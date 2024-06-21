const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 25,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 25,
  },
  email: {
    type: String,
    min: 5,
    max: 30,
    default: null,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },
  token: {
    type: String,
    required: false,
  },
  tokenExpiresAt: {
    type: Date,
    required: false,
  },
});

// Override the 'toJSON' function to customize the JSON output
userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.__v;
    delete ret.token;
    delete ret.tokenExpiresAt;
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
