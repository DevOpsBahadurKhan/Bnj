const rateLimit = require('express-rate-limit');

// 🔐 Login Limiter – stricter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { message: "Too many login attempts. Try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false
});

// ✍️ Signup Limiter – moderate
const signupLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10,
  message: { message: "Too many signup attempts. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false
});

// 📥 General API Limiter – global fallback
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // adjust based on traffic
  message: { message: "Too many requests. Please slow down." },
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = {
  loginLimiter,
  signupLimiter,
  apiLimiter
};

