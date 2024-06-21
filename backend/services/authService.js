const { hashPassword } = require("../helpers/hashPassword");
const generateUrlFriendlyToken = require("../helpers/generateFriendlyToken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = async (email, password) => {
  const user = await User.findOne({ email });

  console.log(user, email);

  if (!user) throw new Error("Credenciales incorrectas");

  const compare = bcrypt.compareSync(password, user.password);

  if (!compare) {
    throw new Error("Credenciales incorrectas");
  }

  return user;
};

const register = async ({ password, ...newInfo }) => {
  // Busco el rol del usuario normal
  const hashedPassword = await hashPassword(password);
  newInfo.password = hashedPassword;

  const user = await User.create(newInfo);

  return user;
};

const generatePasswordRecoveryToken = async (email) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("El usuario no está registrado");

  const token = generateUrlFriendlyToken();

  user.token = token;
  user.tokenExpiresAt = new Date(Date.now() + 3 * 60 * 60 * 1000);
  await user.save();

  return token;
};

const validateToken = async (token) => {
  const user = await User.findOne({ token });

  if (!user) {
    throw new Error("Token no válido");
  }

  if (Date.now() > user.tokenExpiresAt) {
    throw new Error("El token ha expirado");
  }

  return user;
};

module.exports = {
  login,
  register,
  hashPassword,
  generatePasswordRecoveryToken,
  validateToken,
};
