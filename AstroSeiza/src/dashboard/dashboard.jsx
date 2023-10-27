import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import axios from "axios";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Clima , setClima] = useState([])

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

  const fetchClima = async () =>{
    const response = await axios.get('https://api.datos.gob.mx/v1/condiciones-atmosfericas')
    const resultados = response.data.results;
    setClima(resultados);
    console.log('datos de la api clima')
    console.log(resultados)
  }

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
      text: "No podras desacer el cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borar!",
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
            <div>
              <div>
                <img src={profile.picture} alt="user image" />
                <h3>User Logged in</h3>
                <p>Name: {profile.name}</p>
                <p>Email Address: {profile.email}</p>
                <br />
                <br />
                <button onClick={logOut}>Log out</button>
              </div>
            </div>
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
                      <a onClick={() => confirmDelete(users.id)}>Eliminar </a>

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
            <div>
              <table className=" user grid h-auto p-2 w-auto rounded-lg text-center font-bold bg-white ">
                <thead>Api de condiciones atmosfericas</thead>
                <tbody className="">
                  <tr className="">
                    <th className="p-3">#</th>
                    <th className="p-3">Nombre</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3">Descripción del cielo</th>
                    <th className="p-3">Temperature</th>
                    <th className="p-3">Viento km</th>
                  </tr>
                  {Clima.map((clima, i) => (
                    <tr>
                      <th>{i + 1}</th>
                      <th>{clima.name}</th>
                      <th>{clima.state}</th>
                      <th>{clima.skydescriptionlong}</th>
                      <th>{clima.tempc}°C</th>
                      <th>{clima.windspeedkm}  km</th>
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
