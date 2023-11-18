import SideBar from "./adminComponents/sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { allUsers } from "../../api/auth";

export default function IndexAdmin() {
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
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const openPopWindows = () => {
    setPopWindow(true);
  };

  const closePopWindows = () => {
    setPopWindow(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <section className="flex gap-6">
        <SideBar />
        <div className="texto h-full w-full">
          <div className="m-3 text-xl text-black font-semibold text-center">
            DASHBOARD ASTROSEIZA
          </div>

          {popWindows ? (
            <>
              <div>
                <div className="bg-red-400 w-full">
                  <div className="text-center flex justify-center items-center">

                    <form className="flex flex-col w-1/4 gap-4 h-1/2 ">
                      <input type="text" placeholder="Ingresa el nombre" />
                      <input type="text" placeholder="Ingresa el usuario" />
                      <input type="text" placeholder="Ingresa el email" />
                      <input type="text" placeholder="Ingresa el contraseña" />
                    </form>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={closePopWindows}
                    className="  my-2 text-[#060606] bg-white  border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors"
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
                  className="  my-2 text-[#060606] bg-white  border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors"
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
                        Actualizar
                      </td>

                      <td className="p-3 border-y-2 border-black">
                        {" "}
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
