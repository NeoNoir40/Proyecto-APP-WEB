import { useAuth } from "../../../api/context/AuthContext";
import { allUsers } from "../../../api/auth";
import SideBar from "../adminComponents/sidebar";
import React, { useState, useEffect } from "react";
import Administra from '../adminComponents/img/admin.jpeg';
import Usuarioo from '../adminComponents/img/userssss.jpeg';
export default function IndexAdmin() {
  const { admin } = useAuth();

  const [asUs, setAdUs] = useState([]);

  useEffect(() => {;
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await allUsers();
      setAdUs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">

      <section className="flex gap-6">
        <SideBar/>
        <div className="ml-10">
          <p  className="m-3 text-center text-4xl text-black font-semibold ml-10">
            DASHBOARD ASTROSEIZA
          </p>
          <p  className="m-3 text-center text-3xl text-black font-semibold ml-10">
            ¡Bienvenido {admin.nombre}!
          </p>
          <p className="text-2xl my-5 font-semibold">
            ¿Qué puedes hacer?
          </p>
          <div className="my-4">
          <p className="text-2xl font-semibold my-10">
            Perfiles de Administradores
          </p>
          <img src={Administra} alt="admin" className="my-5 rounded-[5px_5px_5px_5px]"/>
          <p className="text-xl my-5">En este apartado encontrarás a todos los administradores que están registrados en <strong>AstroSeiza</strong>, se tiene datos como el correo,
          <br/>así que también se puede eliminar un Administrador o en su respectivo caso, editar información de un Administrador, ya sea
          <br/>para cambiarle la contraseña o el nombre de una Admin.</p>
          </div>
          <div className="my-4">
          <p className="text-2xl font-semibold my-10">
            Usuarios
          </p>
          <img src={Usuarioo} alt="admin" className="my-5 rounded-[5px_5px_5px_5px]"/>
          <p className="text-xl my-5">En este apartado encontrarás a todos los usuarios que están registrados en <strong>AstroSeiza</strong>, se tiene datos como el correo,
          <br/>nombre y usuario, así que también se puede eliminar un Usuario o en su respectivo caso, editar información de un 
          <br/>siendo Administrador, ya sea para cambiarle la contraseña o el nombre a un Usuario.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
