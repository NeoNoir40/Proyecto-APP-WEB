import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component"; // Importa DataTable

export default function Dashboard() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Clima, setClima] = useState([]);

  const params = useParams();
  var id = params.id;
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    fetchClima();
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${id}`,
          {
            headers: {
              Authorization: `Bearer ${id}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    navigate("/login");
  };

  const fetchClima = async () => {
    const response = await axios.get(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas"
    );
    const resultados = response.data.results;
    setClima(resultados);
    console.log("datos de la api clima");
    console.log(resultados);
  };

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3000/user");
    setUsers(response.data);
    console.log("Datos de la api");
    console.log(response);
  };

  const HandleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:3000/user/${id}`);
    if (response.status === 200) {
      console.log("Datos borrados correctamente");
    } else {
      console.log("No se pudo borrar");
    }
    fetchUsers();
  };

  const confirmDelete = (id) => {
    Swal.fire({
      title: "Seguro que quieres eliminar?",
      text: "No podrás deshacer el cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        HandleDelete(id);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Usuario eliminado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const userColumns = [
    {
      name: "#",
      selector: "id",
    },
    {
      name: "Username",
      selector: "Username",
    },
    {
      name: "Nombre",
      selector: "Nombre",
    },
    {
      name: "Apellido",
      selector: "Apellido",
    },
    {
      name: "Eliminar",
      cell: (row) => (
        <button onClick={() => confirmDelete(row.id)}>Eliminar</button>
      ),
    },
    {
      name: "Actualizar",
      cell: (row) => (
        <button onClick={() => navigate(`/Update/${row.id}`)}>
          Actualizar
        </button>
      ),
    },
  ];

  const climaColumns = [
    {
      name: "Nombre",
      selector: "name",
      wrap: true,
    },
    {
      name: "Estado",
      selector: "state",
      wrap: true,

    },
    {
      name: "Descripción del cielo",
      selector: "skydescriptionlong",
      wrap: true,

    },
    {
      name: "Temperature",
      selector: "tempc",
      wrap: true,

    },
    {
      name: "Viento km",
      selector: "windspeedkm",
      wrap: true,

    },
  ];

  return (
    <>
      <div className="flex ">
        <div className="sticky left-0 h-screen w-44 bg-var p-5">
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
          <div className="flex items-center gap-4 hover.bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Agregar API</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover.bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Consultas</h1>
            </ul>
          </div>
          <div className="flex items-center gap-4 hover.bg-body p-4 text-white hover:text-gray-500 rounded-lg transition-colors font-semibold">
            <ul>
              <h1>Usuario</h1>
            </ul>
          </div>
        </div>
        <div className="m-auto mt-[60px]">
          <div className="grid">
            <div>
              <div className="text-white text-center">
                <img src={profile.picture} alt="user image" className="m-auto" />
                <h3>Usuario: Logeado</h3>
                <p>Nombre: {profile.name}</p>
                <p>Email: {profile.email}</p>
                <br />
                <br />
                <button className="bg-red-500 rounded-lg p-2 hover:bg-red-600 hover:opacity-25  " onClick={logOut}>Cerrar Sesión</button>
              </div>
            </div>
            <div className="mb-10  m-auto">
              <Link to="/New">
                <button className="h-6 w-20 bg-white font-bold rounded-sm hoover mt-10">
                  Nuevo
                </button>
              </Link>
            </div>
            <div>
              <DataTable
                pagination
                title="Tabla de usuarios"
                columns={userColumns}
                data={Users}
                striped
                highlightOnHover
                
              />
            </div>
            <div className="mt-10">
              <DataTable
                pagination
                title="Api de condiciones atmosféricas"
                columns={climaColumns}
                data={Clima}
                striped
                highlightOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
