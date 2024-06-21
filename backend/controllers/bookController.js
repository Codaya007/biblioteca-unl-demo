const bookService = require("../services/bookService");

// Controlador para crear un nuevo libro
const createBook = async (req, res) => {
  try {
    const { title, author, category, description } = req.body;
    const newBook = await bookService.create({
      title,
      author,
      category,
      description,
    });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para obtener todos los libros
const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.findAll(req.query);

    res.status(200).json(books);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para obtener un libro por ID
const getBookById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await bookService.findById(bookId);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json(book);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para actualizar un libro por ID
const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedData = req.body;
    const updatedBook = await bookService.update(bookId, updatedData);
    if (!updatedBook) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json(updatedBook);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controlador para eliminar un libro por ID
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await bookService.deleteById(bookId);
    if (!deletedBook) {
      res.status(404).json({ message: "Book not found" });
    } else {
      res.status(200).json({ message: "Book deleted successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
