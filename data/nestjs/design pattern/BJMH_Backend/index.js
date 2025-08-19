import express from 'express';
const app = express();
const port = 3000;

import bcrypt from 'bcrypt';

app.use(express.json());

import User from './models/users.model.js';

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

mongoose.connect('mongodb://127.0.0.1:27017/test');

// signup
app.post('/api/signup', async (req, res, next) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            const err = new Error('User already exist');
            err.statusCode = 403;
            throw err;
        }

        let user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 5);
        user.name = name;
        await user.save();
        const accessToken = jwt.sign({ id: user.id }, "accessTokenSecret", { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id }, "refreshTokenSecret", { expiresIn: '7d' });


        res.json({ user, accessToken, refreshToken });

    } catch (error) {
        next(error)
    }
});


app.post('/api/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email }).select('+password');
        if (!user) {
            const err = new Error("Wrong Credentials");
            err.errorCode = 403;
            throw err;
        }

        const validPassword = bcrypt.compare(password, user.password);

        if (!validPassword) {
            const err = new Error("Wrong Credentials");
            err.errorCode = 401;
            throw err;
        }
        const accessToken = jwt.sign({ id: user.id }, "accessTokenSecret", { expiresIn: '1h' });
        const refreshToken = jwt.sign({ id: user.id }, "refreshTokenSecret", { expiresIn: '7d' });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });
        
        await user.save();

        res.send({ email: user.email, accessToken })

    } catch (err) {
        next(err)
    }
});

app.listen(port, () => {
    console.log(`Listing ${port}`);
});

