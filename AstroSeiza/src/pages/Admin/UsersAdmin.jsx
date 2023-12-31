import SideBar from "./adminComponents/sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { allUsers } from "../../api/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../../api/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function IndexAdmin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { CreateUser, error: siginErrors } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await CreateUser(data);
      fetchUsers();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ah creado correctamente el usuario",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  });

  const [userInfo, setUserInfo] = useState([]);
  const [popWindows, setPopWindow] = useState(false);

  useEffect(() => {
    console.log(popWindows);
    fetchUsers();
  }, [popWindows]);

  const fetchUsers = async () => {
    try {
      const response = await allUsers();
      setUserInfo(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          fetchUsers();

          Swal.fire({
            title: "Eliminado!",
            text: "El usuario se elimino correctamente!.",
            icon: "success",
          });
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

  const openPopWindows = () => {
    setPopWindow(true);
  };

  const closePopWindows = () => {
    setPopWindow(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <section className="flex gap-6">
        <SideBar />
        <div className="texto h-full w-full">
          <div className="m-3 text-xl text-black font-semibold text-center">
            DASHBOARD ASTROSEIZA
          </div>

          {popWindows ? (
            <>
              <div>
                <div className=" w-full">
                  <div className=" flex justify-center items-center">
                    <form
                      onSubmit={onSubmit}
                      className=" shadow-xl rounded-xl p-10 border-black border-x-2  border-y-2 flex flex-col w-1/4 gap-2 "
                    >
                      {siginErrors.map((err, i) => (
                        <div className="bg-red-500 p-2 text-white" key={i}>
                          {err}
                        </div>
                      ))}

                      <label htmlFor="">Nombre</label>
                      {errors.nombre && (
                        <span className="text-red-500">
                          Este campo es requerido
                        </span>
                      )}
                      <input
                        {...register("nombre", { required: true })}
                        className="w-full text-black my-2 bg-t ransparent border-b border-black outline-none focus:outline-none"
                        type="text"
                        placeholder="Ingresa el nombre"
                      />

                      <label htmlFor="">Usuario</label>
                      {errors.usuario && (
                        <span className="text-red-500">
                          Este campo es requerido
                        </span>
                      )}
                      <input
                        {...register("usuario", { required: true })}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        type="text"
                        placeholder="Ingresa el usuario"
                      />
                      <label htmlFor="">Email</label>
                      {errors.email && (
                        <span className="text-red-500">
                          Este campo es requerido
                        </span>
                      )}
                      <input
                        {...register("email", { required: true })}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        type="text"
                        placeholder="Ingresa el email"
                      />
                      <label htmlFor="">Contraseña</label>
                      {errors.password && (
                        <span className="text-red-500">
                          Este campo es requerido
                        </span>
                      )}
                      <input
                        {...register("password", { required: true })}
                        className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                        type="password"
                        placeholder="Ingresa el contraseña"
                      />

                      <div className="flex flex-row items-center justify-center  ">
                        <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                          Crear
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex items-center justify-center p-10">
                  <button
                    onClick={closePopWindows}
                    className="bg-red-500  text-white font-bold py-2 px-4 rounded  hover:bg-red-400 transition-colors"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <button
                  onClick={openPopWindows}
                  className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                >
                  Agregar usuario/s
                </button>
              </div>
            </>
          )}

          <div className=" flex flex-col justify-center items-center my-3">
            {userInfo.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th className="w-44 p-3 text-blue-950 uppercase">id</th>
                    <th className="w-1/5">Nombre</th>
                    <th className="w-1/5">Usuario</th>
                    <th className="w-1/5">Email</th>
                    <th className="w-1/5">Actualizar</th>
                    <th className="w-1/5">Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {userInfo.map((user, index) => (
                    <tr key={index} className="text-center">
                      <td className="p-3 border-y-2 border-black">
                        {index + 1}
                      </td>
                      <td className="p-3 border-y-2 border-black">
                        {user.nombre}
                      </td>
                      <td className="p-3 border-y-2 border-black">
                        {user.usuario}
                      </td>
                      <td className="p-3 border-y-2 border-black">
                        {user.email}
                      </td>
                      <td className="p-3 border-y-2 border-black">
                        <button
                          onClick={() => navigate(`/updateUser/${user.id}`)}
                        >
                          Actualizar
                        </button>
                      </td>

                      <td className="p-3 border-y-2 border-black">
                        <button onClick={() => handleDelete(user.id)}>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex  justify-center items-center">
                <p className="text-red-700 font-bold text-[40px] ">
                  No hay usuarios registrados
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
