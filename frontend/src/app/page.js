"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getBooks, deleteBook } from "../services/books.service";
import mensajes from "./components/Mensajes";
import { WithAuth } from "./components/withAuth";
import { useAuth } from "@/context/AuthContext";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { logoutUser } = useAuth();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.log(error);

      mensajes("Error", "No se han podido cargar los libros", "error");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      mensajes("Éxito", "Libro eliminado exitosamente");
      fetchBooks();
    } catch (error) {
      mensajes("Error", "No se ha podido eliminar el libro", "error");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col text-start d-flex">
        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            logoutUser();
            router.push("/auth/login");
          }}
        >
          Cerrar sesión
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          Registrar nuevo usuario
        </button>
      </div>
      <div className="row">
        <div className="col mt-3 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por título, autor o categoría"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="col text-end">
          <button
            className="btn btn-primary"
            onClick={() => router.push("/books/create")}
          >
            Crear Nuevo Libro
          </button>
        </div>
      </div>
      <div className="row">
        {filteredBooks.map((book) => (
          <div key={book._id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Autor: {book.author}</p>
                <p className="card-text">Categoría: {book.category}</p>
                <p className="card-text">{book.description}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-warning"
                    onClick={() => router.push(`/books/update/${book._id}`)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(book._id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WithAuth(BooksList);
