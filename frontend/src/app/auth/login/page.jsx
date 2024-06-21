"use client";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import mensajes from "../../components/Mensajes";
import { useRouter } from "next/navigation";
import { login } from "../../../services/auth.service";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function Login() {
  const router = useRouter();
  const { loginUser, user } = useAuth();

  const validationScheme = Yup.object().shape({
    email: Yup.string().required("Ingrese su email").email("Debe ser un email válido"),
    password: Yup.string().required("Ingrese su contraseña"),
    // .min(10, "Debe tener al menos 10 caracteres"),
  });

  const formOptions = {
    resolver: yupResolver(validationScheme),
  };

  const { register, handleSubmit, formState: { errors } } = useForm(formOptions);

  const sendData = async (data) => {
    try {
      const { user, token } = await login(data);

      // Guardar en el contexto global
      loginUser(user, token);

      mensajes("Has ingresado al sistema", "Bienvenido usuario");
      router.push("/");
    } catch (error) {
      console.log(error?.response?.data);
      mensajes("Error en inicio de sesion", error.response?.data?.msg || "No se ha podido iniciar sesión", "error");
    }
  };

  useEffect(() => {
    if (!user) {
      const userData = window.localStorage.getItem("user");
      const token = window.localStorage.getItem("token");

      console.log({ userData, token });

      // Si ya hay sesión, loguear al usuario, sino, redirigir al login
      if (userData && token) {
        loginUser(JSON.parse(userData), token);
        router.push("/");
      } else {
        // router.push("/login");
      }
    }
  }, []);

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center mb-4">Iniciar sesión</h1>
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
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  {...register("password")}
                  id="password"
                  type="password"
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="text-center mb-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Iniciar sesión
                </button>
              </div>
              <div className="text-center">
                <Link href="/auth/forgot-password">
                  ¿Has olvidado tu contraseña?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
