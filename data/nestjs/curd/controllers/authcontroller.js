const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const validationHandler = require('../validations/validationHandler');

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }

        const validPassword = await user.validPassword(password);
        if (!validPassword) {
            const error = new Error("Wrong Credentials");
            error.statusCode = 401;
            throw error;
        }
        // accessToken
        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            process.env.jwtSecret,
            { expiresIn: '1m' });
        // refreshToken
        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.jwtRefreshSecret,
            { expiresIn: '7d' });

        // Save refresh token in DB
        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,         // JS se access nahi ho sakta
            secure: true,           // HTTPS pe hi send hoga
            sameSite: 'strict',     // CSRF se bachav
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din
        });

        res.json({
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
            accessToken
        });

    } catch (err) {
        next(err);
    }
};

exports.signup = async (req, res, next) => {
    try {
        validationHandler(req);

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            const error = new Error("Email already used");
            error.statusCode = 403;
            throw error;
        }

        let user = new User();
        user.email = req.body.email;
        user.password = req.body.password;
        user.name = req.body.name;
        user = await user.save();

        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            process.env.jwtSecret,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.jwtRefreshSecret,
            { expiresIn: '7d' }
        );

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 din
        });

        res.json({
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
            },
            accessToken
        });
    } catch (err) {
        next(err);
    }
};

exports.logout = async (req, res, next) => {
    try {
        const user = req.user; // optional, only if JWT is used

        // Optional: Clear refresh token from DB
        if (user) {
            user.refreshToken = null;
            await user.save();
        }

        // Remove cookie
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: false,        // ✅ true in production
            sameSite: 'Strict'
        });

        res.json({ message: 'Logged out successfully' });
    } catch (err) {
        next(err);
    }
};


exports.refreshToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            let error = new Error('Refresh token missing');
            error.statusCode = 401;
            throw error;
        }

        const payload = jwt.verify(refreshToken, process.env.jwtRefreshSecret);

        const user = await User.findById(payload.id).select('+refreshToken');
        console.log(user);

        if (!user || user.refreshToken !== refreshToken) {
            let error = new Error('Invalid refresh token');
            error.statusCode = 403;
            throw error;
        }

        const newAccessToken = jwt.sign({ id: user.id, role: user.role },
            process.env.jwtSecret, { expiresIn: '1m' });

        res.json({ accessToken: newAccessToken });
    } catch (err) {

        next(err);
    }
}