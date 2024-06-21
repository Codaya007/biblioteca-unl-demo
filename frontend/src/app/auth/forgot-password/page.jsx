"use client";
import Image from "next/image";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import mensajes from "../../components/Mensajes";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/services/auth.service";

function ForgotPasswordView() {
  const router = useRouter();
  const validationScheme = Yup.object().shape({
    email: Yup.string().required("Ingrese su email").email("Debe ser un email válido"),
  });

  const formOptions = {
    resolver: yupResolver(validationScheme),
  };

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

  const sendData = async (data) => {
    try {
      await forgotPassword(data);

      mensajes("Éxito", "Si ha ingresado sus datos correctamente, se enviará un email para recuperación de contraseña");

      router.push("/login");
    } catch (error) {
      console.log(error?.response?.data);

      mensajes("Error", error.response?.data?.msg || "No se ha podido enviar el email de recuperación", "error");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center mb-4">Recuperar Contraseña</h1>
            <form onSubmit={handleSubmit(sendData)}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  {...register("email")}
                  id="email"
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Recuperar contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordView;
