import { useEffect, useState } from "react";
import { profile } from "../api/auth.jsx";
import { useAuth } from '../api/context/AuthContext.jsx'
import josi from '../assets/img/profile_astroseiza.jpeg'
import { BiEdit } from 'react-icons/bi'
import { Link } from "react-router-dom";

export default function Perfil() {
  const { user } = useAuth()

  return (
    <>
      <h2 className="mt-3 text-white text-center text-3xl font-semibold">¡BIENVENIDO A TU PERFIL, CIENTÍFICO!</h2>
      <div className="flex flex-col items-center ml-10 h-screen mt-5">
        <div className="flex flex-col items-center rounded-[5px_5px_5px_5px] w-66">
          <div className=" w-66 p-10 rounded-md gap-1 text-white">
            <img className="w-[150px] h-auto rounded-[7px_7px_7px_7px] ml-auto mr-auto" src={josi} alt="profile" />
            <p className="text-center uppercase text-xl">{user.nombre}</p>
            <p className="my-5 text-2xl font-bold">DATOS PERSONALES: </p>
            <p className="my-7"><span className="font-semibold text-2xl">Usuario:</span> <span className="flex flex-row my-1 text-md">{user.nombre}</span></p>
            <p className=""><span className="font-semibold text-2xl">Correo Electrónico:</span> <span className="flex flex-row my-1 text-md">{user.email}</span></p>
          </div>
        </div>
          <Link to={'/Perfil'}>
        <div className="flex flex-row hover:scale-105 transition-shadow items-center border rounded-[7px_7px_7px_7px] ml-auto mr-auto w-28 p-1">
            <BiEdit className="text-white my-1" size={22} />
            <button className=" flex flex-row text-white ml-auto mr-auto text-xl">EDITAR</button>
        </div>
          </Link>
      </div>
    </>
  );
}
