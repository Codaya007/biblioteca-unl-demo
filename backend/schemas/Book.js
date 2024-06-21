const Joi = require("joi");

// Esquema Joi para la creación de un libro
const createBookSchema = Joi.object({
  title: Joi.string().required().messages({
    "*": "El campo título es requerido",
  }),
  author: Joi.string().required().messages({
    "*": "El campo autor es requerido",
  }),
  category: Joi.string().required().messages({
    "*": "El campo categoría es requerido",
  }),
  description: Joi.string().allow("").optional().messages({
    "*": "El campo descripción debe ser una cadena",
  }),
});

// Esquema Joi para la actualización de un libro
const updateBookSchema = Joi.object({
  title: Joi.string().optional().messages({
    "*": "El campo título debe ser una cadena",
  }),
  author: Joi.string().optional().messages({
    "*": "El campo autor debe ser una cadena",
  }),
  category: Joi.string().optional().messages({
    "*": "El campo categoría debe ser una cadena",
  }),
  description: Joi.string().allow("").optional().messages({
    "*": "El campo descripción debe ser una cadena",
  }),
  id: Joi.string().required().messages({ "*": "Id requerido" }),
});

module.exports = {
  createBookSchema,
  updateBookSchema,
};
