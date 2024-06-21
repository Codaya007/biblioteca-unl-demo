"use client"
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerUser } from "@/services/auth.service";
import mensajes from "../../components/Mensajes";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { WithAuth } from "../../components/withAuth";

const validationSchema = object().shape({
  name: string()
    .required("Nombre requerido"),
  lastname: string().required("Apellido requerido"),
  email: string()
    .email("Ingrese un email válido")
    .required("Email requerido"),
  password: string()
    .required("Contraseña requerida")
    .matches(/[a-z]/, 'Debe contener al menos una letra minúscula')
    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .matches(/[0-9]/, 'Debe contener al un número')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un caracter especial')
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
});

function UserForm() {
  const router = useRouter();
  const { token } = useAuth();
  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  };
  const { register, handleSubmit, formState } = useForm(formOptions)
  const { errors } = formState;

  const handleCreateUser = async (data) => {
    try {
      await registerUser(data, token);

      mensajes("Exito", "Usuario registrado exitosamente");
      router.push("/");
    } catch (error) {
      console.log(error?.response?.data || error);
      mensajes("Error", error.response?.data?.msg || "No se ha podido crear el usuario", "error");
    }
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center mb-4">Registro de usuarios</h1>
            < form onSubmit={handleSubmit(handleCreateUser)} >
              <h1 className="title-form">Crear nuevo usuario</h1>
              <div className="form-item">
                <label>Nombre</label>
                <input {...register("name")} type="text" />
                {errors.name && <span className="validation-error">{errors.name.message}</span>}
              </div>
              <div className="form-item">
                <label>Apellido</label>
                <input {...register("lastname")} type="text" />
                {errors.lastname && <span className="validation-error">{errors.lastname.message}</span>}
              </div>
              <div className="form-item">
                <label>Email</label>
                <input  {...register("email")} type="email" />
                {errors.email && <span className="validation-error">{errors.email.message}</span>}
              </div>
              <div className="form-item">
                <label>Contraseña</label>
                <input  {...register("password")} type="password" />
                {errors.password && <span className="validation-error">{errors.password.message}</span>}
              </div>
              <input className="button-primary" type="submit" value="Crear" />
            </ form>
          </div >
        </div >
      </div >
    </div >
  );
}

export default WithAuth(UserForm)