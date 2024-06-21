const mongoose = require("mongoose");

// Definición del esquema para el modelo Book
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
});

// Creación del modelo Book basado en el esquema definido
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
