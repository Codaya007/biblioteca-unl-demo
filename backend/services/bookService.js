const Book = require("../models/Book");

// Función para crear un nuevo libro
const create = async (bookData) => {
  try {
    const newBook = await Book.create(bookData);
    return newBook;
  } catch (error) {
    throw new Error("Error al crear el libro: " + error.message);
  }
};

// Función para buscar todos los libros
const findAll = async (query) => {
  try {
    const books = await Book.find(query);
    return books;
  } catch (error) {
    throw new Error("Error al obtener los libros: " + error.message);
  }
};

// Función para buscar un libro por su ID
const findById = async (bookId) => {
  try {
    const book = await Book.findById(bookId);
    return book;
  } catch (error) {
    throw new Error("Error al obtener el libro por ID: " + error.message);
  }
};

// Función para actualizar un libro por su ID
const update = async (bookId, bookData) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, bookData, {
      new: true,
    });
    return updatedBook;
  } catch (error) {
    throw new Error("Error al actualizar el libro: " + error.message);
  }
};

// Función para eliminar un libro por su ID
const deleteById = async (bookId) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    return deletedBook;
  } catch (error) {
    throw new Error("Error al eliminar el libro: " + error.message);
  }
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  deleteById,
};
