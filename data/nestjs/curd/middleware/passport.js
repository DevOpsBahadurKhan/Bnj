const passport = require('passport');
const passportJWT = require('./passportJWT');
const passportGoogle = require('./passportGoogle');

// Register strategies
passportJWT(passport);
passportGoogle(passport);


module.exports = () => ({
    initialize: () => passport.initialize(),

    authenticate: () => passport.authenticate('jwt', { session: false }),

    authenticateGoogle: () => passport.authenticate('google', {
        scope: ['profile', 'email']
    }),

    googleCallback: () => passport.authenticate('google', {
        failureRedirect: '/login',
        session: false
    })
});