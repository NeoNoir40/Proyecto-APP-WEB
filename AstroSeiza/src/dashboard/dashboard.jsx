import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3000/user");
    setUsers(response.data);
    console.log("Datos de la api");
    console.log(response);
  };

  const HandleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/user/${id}`);

    if (response.status == 200) {
      alert("Usuario eliminado");
    } else {
      alert("Error al eliminar usuario");
    }
    fetchUsers();
  };

  return (
    <>
      <div className="flex ">
        <div className=" sticky left-0 h-screen w-44 bg-var p-5">
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Inicio</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Administrar</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Ver API's</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Agregar API</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Consultas</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover:bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Usuario</h1>
            </ul>
          </div>
        </div>
        <div className="m-auto mt-[60px]">
          <div className="grid">
            <div className="mb-10  m-auto">
              <Link to="/New">
                <button className="h-6 w-20 bg-white font-bold rounded-sm ">
                  Nuevo
                </button>
              </Link>
            </div>
            <div>
              <table className=" user grid h-auto p-2 w-auto rounded-lg text-center font-bold bg-white ">
                <thead>Tabla de usuarios</thead>
                <tbody className="">
                  <tr className="">
                    <th className="p-3">#</th>
                    <th className="p-3">Username</th>
                    <th className="p-3">Nombre</th>
                    <th className="p-3">Apellido</th>
                    <th className="p-3">Delete</th>
                    <th className="p-3">Update</th>
                  </tr>
                  {Users.map((users, i) => (
                    <tr>
                      <th>{i + 1}</th>
                      <th>{users.Username}</th>
                      <th>{users.Nombre}</th>
                      <th>{users.Apellido}</th>
                      <a onClick={() => HandleDelete(users.id)}>Eliminar </a>

                      <th>
                        <a onClick={() => navigate(`/Update/${users.id}`)}>
                          Editar{" "}
                        </a>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
