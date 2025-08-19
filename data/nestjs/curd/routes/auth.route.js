const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


const passport = require('../middleware/passport')();
const verifyAccess = require('../middleware/verifyAccess');
const rateLimiters = require('../middleware/rateLimiters');
const authController = require('../controllers/authcontroller');
const { isEmail, hasPassword, hasName } = require('../validations/validator');


router.post('/login', rateLimiters.loginLimiter, authController.login);
router.post('/signup', rateLimiters.signupLimiter, [isEmail, hasPassword, hasName], authController.signup);
router.post('/logout', authController.logout);
router.post('/refresh-token', authController.refreshToken);

// router.get(
//     '/me',
//     passport.authenticate(),
//     verifyAccess('read', 'profile', 'own'),  // or 'any' if admin can access all
//     authController.me
// );


// Step 1: Trigger Google Login
router.get('/google',
    passport.authenticateGoogle('google', {
        scope: ['profile', 'email'],
        accessType: 'offline',       // ✅ This gets refreshToken
        prompt: 'consent'            // ✅ Force showing consent screen again
    })
);

// Step 2: Handle Google OAuth Callback
router.get('/google/callback', passport.googleCallback(), async (req, res) => {
    const user = req.user;

    const accessToken = jwt.sign(
        { id: user._id, email: user.email },
        process.env.jwtSecret,
        { expiresIn: '1h' }
    );

    // Generate your own refreshToken
    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.jwtRefreshSecret,
        { expiresIn: '7d' }
    );

    // Save your own refreshToken in DB
    user.refreshToken = refreshToken;
    await user.save();

    // Set both tokens as cookies
    res.cookie('accessToken', accessToken, {
        httpOnly: true,  // Set to true in production
        secure: true,
        sameSite: 'Strict',
        maxAge: 60 * 60 * 1000
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // ✅ Redirect
    res.redirect(`${process.env.FRONTEND_URL}`);

});

module.exports = router;