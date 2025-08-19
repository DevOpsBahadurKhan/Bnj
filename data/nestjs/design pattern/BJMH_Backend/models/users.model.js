import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    select: false,
    required: function () {
      return !this.googleId;
    }
  },
  googleId: String // optional: if using Google auth
});

const User = mongoose.model('User', UserSchema);
export default User;
