// middleware/passportGoogle.js
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model');

module.exports = function (passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        // Step 1: Try to find by Google ID
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // Step 2: If not found, try finding by email
          user = await User.findOne({ email });

          if (user) {
            // 🔗 Link existing email-based user with Google
            user.googleId = profile.id;
            user.picture = user.picture || profile.photos?.[0]?.value;
            await user.save();
          } else {
            // Step 3: No user found → create new Google-based user
            user = await User.create({
              name: profile.displayName,
              email,
              googleId: profile.id,
              picture: profile.photos?.[0]?.value,
              refreshToken
            });
          }
        }

        return done(null, user);
      } catch (err) {
        console.error("Google login error:", err);
        return done(err, null);
      }
    }));
};
