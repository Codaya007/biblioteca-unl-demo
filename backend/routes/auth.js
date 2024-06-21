const { Router } = require("express");
const authController = require("../controllers/authController");
const {
  loginSchema,
  registerUserSchema,
  recoverPasswordSchema,
} = require("../schemas/Auth");
const validateRequestBody = require("../middlewares/validateRequestBody");

const authRouter = Router();

/**
 * @route POST /login
 * @desc Iniciar sesión
 * @access Public
 */
authRouter.post(
  "/login",
  validateRequestBody(loginSchema),
  authController.loginUser
);

/**
 * @route POST /register
 * @desc Registrar nuevo usuario normal
 * @access Public
 */
authRouter.post(
  "/register",
  validateRequestBody(registerUserSchema),
  authController.registerUser
);

/**
 * @route POST /generateToken
 * @desc Generar token y enviar por correo para la recuperación de la contraseña
 * @access Public
 */
authRouter.post(
  "/forgot-password",
  validateRequestBody(recoverPasswordSchema),
  authController.generatePasswordRecoveryToken
);

/**
 * @route POST /reset-password
 * @desc Recuperar la contraseña
 * @access Public
 */
authRouter.post("/reset-password", authController.recoverPassword);

module.exports = authRouter;
