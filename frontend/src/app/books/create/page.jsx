"use client";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createBook } from "../../../services/books.service"; // Asegúrate de tener este servicio creado
import mensajes from "../../components/Mensajes";
import { WithAuth } from "@/app/components/withAuth";

function CreateBookView() {
    const router = useRouter();

    const validationScheme = Yup.object().shape({
        title: Yup.string().required("Ingrese el título del libro"),
        author: Yup.string().required("Ingrese el autor del libro"),
        category: Yup.string().required("Ingrese la categoría del libro"),
        description: Yup.string().required("Ingrese la descripción del libro"),
    });

    const formOptions = {
        resolver: yupResolver(validationScheme),
    };

    const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

    const sendData = async (data) => {
        try {
            await createBook(data);

            mensajes("Éxito", "El libro ha sido creado exitosamente");

            router.push("/");
        } catch (error) {
            console.log(error?.response?.data);

            mensajes("Error", error.response?.data?.msg || "No se ha podido crear el libro", "error");
        }
    };

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center mb-4">Crear Libro</h1>
                        <form onSubmit={handleSubmit(sendData)}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Título</label>
                                <input
                                    {...register("title")}
                                    id="title"
                                    type="text"
                                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">
                                    {errors.title?.message}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="author" className="form-label">Autor</label>
                                <input
                                    {...register("author")}
                                    id="author"
                                    type="text"
                                    className={`form-control ${errors.author ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">
                                    {errors.author?.message}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Categoría</label>
                                <input
                                    {...register("category")}
                                    id="category"
                                    type="text"
                                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">
                                    {errors.category?.message}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <textarea
                                    {...register("description")}
                                    id="description"
                                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">
                                    {errors.description?.message}
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Crear Libro
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithAuth(CreateBookView);
