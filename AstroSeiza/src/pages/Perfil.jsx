import { useEffect, useState } from "react";
import { profile } from "../api/auth.jsx";
import {useAuth} from '../api/context/AuthContext.jsx'
export default function Perfil() {
  const {user} = useAuth()

  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <div className="flex flex-col items-center">
        <div className="bg-white w-full p-10 rounded-md gap-1">
          <p className="bg-zinc-200">Nombre del usuario: {user.nombre}</p>
          <p className="bg-zinc-200">Correo Electrónico: {user.email}</p>
          <p className="bg-zinc-200">{user.foto}</p>
        </div>
      </div>
    </div>
  );
}
