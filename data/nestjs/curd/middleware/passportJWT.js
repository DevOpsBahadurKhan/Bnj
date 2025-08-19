const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/user.model');

module.exports = function (passport) {
  const jwtParams = {
    secretOrKey: process.env.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  };

  passport.use('jwt', new JwtStrategy(jwtParams, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      if (!user) return done(null, false);
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }));
};
