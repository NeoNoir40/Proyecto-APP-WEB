import video from "../assets/videos/backgroundVideo.mp4";
import googleicon from "../assets/login/Google__G__Logo.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../api/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { sigin, error: siginErrors, isAuthenticated } = useAuth();

  const [show, setShow] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await sigin(data);
      setShow(true);
    } catch (error) {
      console.log(error);
      setShow(false); 
    }
  });

  useEffect(() => {
    if (isAuthenticated && show) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Inicio de sesion correcto, bienvenido",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }
  }, [isAuthenticated]);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex w-full h-screen flex-col items-center ">
        <div className=" h-full w-1/2 flex flex-col justify-center items-center ">
          <div className="flex flex-col bg-white p-20 rounded-md ">
            <h1 className="text-[25px] font-bold text-center mb-2">
              Inicio de sesion
            </h1>
            <p className="mb-2">
              Bienvenido, ingresa tus datos de para inciar sesion
            </p>
            {siginErrors.map((err, i) => (
              <div className="bg-red-500 p-2 text-white" key={i}>
                {err}
              </div>
            ))}
            <form onSubmit={onSubmit}>
              <div>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Correo electronico"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.email && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <div>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  placeholder="Contraseña"
                  className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                />
                {errors.password && (
                  <span className="text-red-500">Este campo es requerido</span>
                )}
              </div>
              <p className="mb-2">Olvide mi contraseña</p>
              <div>
                <button className="w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors ">
                  Inciar Sesion
                </button>
              </div>
              <div>
                <Link to={"/SingUP"}>
                  <button className="w-full  my-2 text-[#060606] bg-white  border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors">
                    Registrarse
                  </button>
                </Link>
              </div>
              <p className="text-center text-gray-400">
                otras formas de inciar sesion
              </p>
              <div>
                <button className="w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors">
                  <img src={googleicon} alt="" className="mr-2" /> Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
