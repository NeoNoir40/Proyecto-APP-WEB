import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../api/context/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { AdminById } from "../../api/auth";
import axios from "axios";
import Swal from "sweetalert2";

export default function updateAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const handdleUpdate = async (data) => {
    try {
      await axios.patch(`http://localhost:3000/admin/${id}`, data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se actualizo correctamente!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/PerfilAdmin");
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrio un error!",
      });
    }
  };

  const fetchUser = async () => {
    try {
      const response = await AdminById(id);
      setUserInfo(response.data);
      console.log(response.data);

      setValue("nombre", response.data.nombre);
      setValue("email", response.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = handleSubmit((data) => handdleUpdate({ ...data, id }));

  return (
    <main className="bg-white flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col ">
          <form
            onSubmit={onSubmit}
            className="shadow-xl rounded-xl p-20 border-black border-x-2 border-y-2 gap-2"
          >
            <div className="mb-4">
              <label htmlFor="nombre" className="text-black mb-2 block">
                Nombre:
              </label>
              <input
                {...register("nombre", { required: true })}
                defaultValue={userInfo ? userInfo.nombre : ""}
                type="text"
                id="nombre"
                className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                placeholder="Ingresa el nombre"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="text-black mb-2 block">
                Email:
              </label>
              <input
                {...register("email", { required: true })}
                defaultValue={userInfo ? userInfo.email : ""}
                type="email"
                id="email"
                className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                placeholder="Ingresa el email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contrasena" className="text-black mb-2 block">
                Contraseña:
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="contrasena"
                className="w-full text-black p-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                placeholder="Ingresa la contraseña"
              />
            </div>

            <button className="bg-yellow-600 text-white p-2 rounded-md">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
