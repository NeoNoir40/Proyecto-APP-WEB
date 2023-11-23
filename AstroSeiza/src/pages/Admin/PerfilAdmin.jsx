import SideBar from "./adminComponents/sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { allAdmins } from "../../api/auth";
import { useForm } from "react-hook-form";
import { useAuth } from "../../api/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
export default function PerfilAdmin() {
  const navigate = useNavigate();

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { CreateAdmin, error: siginErrors } = useAuth();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await CreateAdmin(data);
      fetchUsers();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se ah creado correctamente el usuario",
        showConfirmButton: false,
        timer: 1500
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
      const response = await allAdmins();
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
          await axios.delete(`http://localhost:3000/admin/${id}`);
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
            DASHBOARD ADMINISTRADORES
          </div>
              <div className="flex items-center justify-center">
             <button onClick={() => navigate(`/AddAdmin`)}
                  className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded"
                >
                  Agregar Admin/s
                </button>
              </div>

          <div className=" flex flex-col justify-center items-center my-3">
            {userInfo.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th className="w-44 p-3 text-blue-950 uppercase">id</th>
                    <th className="w-1/5">Nombre</th>
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
                        {user.email}
                      </td>
                      <td className="p-3 border-y-2 border-black">
                        <button
                          onClick={() =>
                            navigate(`/updateAdmin/${user.id_admin}`)
                          }
                        >
                          Actualizar
                        </button>
                      </td>

                      <td className="p-3 border-y-2 border-black">
                        <button onClick={() => handleDelete(user.id_admin)}>
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
                  No hay administradores registrados
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
