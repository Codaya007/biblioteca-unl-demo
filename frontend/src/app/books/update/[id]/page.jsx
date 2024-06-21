"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getBook, updateBook } from "@/services/books.service";
import mensajes from "../../../components/Mensajes";
import { WithAuth } from "@/app/components/withAuth";

function UpdateBookView() {
    const router = useRouter();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Ingrese el título del libro"),
        author: Yup.string().required("Ingrese el autor del libro"),
        category: Yup.string().required("Ingrese la categoría del libro"),
        description: Yup.string().required("Ingrese la descripción del libro"),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, setValue, formState } = useForm(formOptions);
    const { errors } = formState;

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const book = await getBook(id);
                setValue("title", book.title);
                setValue("author", book.author);
                setValue("category", book.category);
                setValue("description", book.description);
                setLoading(false);
            } catch (error) {
                console.error(error)
                mensajes("Error", "No se ha podido cargar el libro", "error");
            }
        };
        fetchBook();
    }, [id, setValue]);

    const sendData = async (data) => {
        try {
            await updateBook(id, data);
            mensajes("Éxito", "Libro actualizado exitosamente");
            router.push("/");
        } catch (error) {
            console.log(error?.response?.data);
            mensajes("Error", error.response?.data?.msg || "No se ha podido actualizar el libro", "error");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h1 className="text-center mb-4">Actualizar libro</h1>
                        <form onSubmit={handleSubmit(sendData)}>
                            <div className="mb-3">
                                <label className="form-label">Título</label>
                                <input
                                    {...register("title")}
                                    type="text"
                                    className={`form-control ${errors.title ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">{errors.title?.message}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Autor</label>
                                <input
                                    {...register("author")}
                                    type="text"
                                    className={`form-control ${errors.author ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">{errors.author?.message}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <input
                                    {...register("category")}
                                    type="text"
                                    className={`form-control ${errors.category ? "is-invalid" : ""}`}
                                />
                                <div className="invalid-feedback">{errors.category?.message}</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea
                                    {...register("description")}
                                    className={`form-control ${errors.description ? "is-invalid" : ""}`}
                                ></textarea>
                                <div className="invalid-feedback">{errors.description?.message}</div>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Actualizar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WithAuth(UpdateBookView);
