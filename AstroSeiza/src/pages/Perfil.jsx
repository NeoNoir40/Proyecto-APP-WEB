import { useAuth } from "../api/context/AuthContext.jsx";
import josi from "../assets/img/profile_astroseiza.jpeg";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Perfil() {
  const { user } = useAuth();

  const id = user.id;
  console.log(id);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "No seras capaz de revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:3000/users/${id}`);

          Swal.fire({
            title: "Eliminado!",
            text: "El usuario se elimino correctamente!.",
            icon: "success",
            timer: 1000,
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } catch (error) {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Ocurrio un error inesperado.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <>
      <h2 className="mt-3 text-white text-center text-3xl font-semibold">
        ¡BIENVENIDO A TU PERFIL, CIENTÍFICO!
      </h2>
      <div className="flex flex-col items-center ml-10 h-screen mt-5">
        <div className="flex flex-col items-center rounded-[5px_5px_5px_5px] w-66">
          <div className=" w-66 p-10 rounded-md gap-1 text-white">
            <img
              className="w-[150px] h-auto rounded-[7px_7px_7px_7px] ml-auto mr-auto"
              src={josi}
              alt="profile"
            />
            <p className="text-center uppercase text-xl">{user.nombre}</p>
            <p className="my-5 text-2xl font-bold">DATOS PERSONALES: </p>
            <p className="my-7">
              <span className="font-semibold text-2xl">Usuario:</span>{" "}
              <span className="flex flex-row my-1 text-md">{user.nombre}</span>
            </p>
            <p className="">
              <span className="font-semibold text-2xl">
                Correo Electrónico:
              </span>{" "}
              <span className="flex flex-row my-1 text-md">{user.email}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <Link to={`/EditarUsuario/${id}`}>
            <div className="flex flex-row hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-28 p-1">
              <BiEdit className="text-white my-1" size={22} />
              <button className=" flex flex-row text-white ml-auto mr-auto text-xl">
                Editar Usuario
              </button>
            </div>
          </Link>
          <div className="flex flex-row hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-28 p-1">
            <RiDeleteBin5Fill className="text-white my-1" size={22} />
            <button
              onClick={() => handleDelete(id)}
              className=" flex flex-row text-white ml-auto mr-auto text-xl"
            >
              Borrar Cuenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
