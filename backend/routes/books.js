const { Router } = require("express");
const bookController = require("../controllers/bookController");
const validateRequestBody = require("../middlewares/validateRequestBody");
const { createBookSchema, updateBookSchema } = require("../schemas/Book");

const bookRouter = Router();

/**
 * @route POST /book
 * @desc Crear libro
 * @access Private (ejemplo de acceso privado)
 */
bookRouter.post(
  "/",
  validateRequestBody(createBookSchema),
  bookController.createBook
);

/**
 * @route GET /book
 * @desc Obtener todos los libros
 * @access Public (ejemplo de acceso público)
 */
bookRouter.get("/", bookController.getAllBooks);

/**
 * @route GET /book/:id
 * @desc Obtener un libro por ID
 * @access Public (ejemplo de acceso público)
 */
bookRouter.get("/:id", bookController.getBookById);

/**
 * @route PUT /book/:id
 * @desc Actualizar un libro por ID
 * @access Private (ejemplo de acceso privado)
 */
bookRouter.put(
  "/:id",
  validateRequestBody(updateBookSchema),
  bookController.updateBook
);

/**
 * @route DELETE /book/:id
 * @desc Eliminar un libro por ID
 * @access Private (ejemplo de acceso privado)
 */
bookRouter.delete("/:id", bookController.deleteBook);

module.exports = bookRouter;
