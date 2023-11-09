import { useEffect, useState } from "react";
import { profile } from "../api/auth.jsx";
export default function Perfil() {
  const [user, setUser] = useState([]);

  const handlePerfil = async () => {
    try {
      const res = await profile();
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePerfil();
  }, []);

  return (
    <div>
      <h1 className="text-white">{user.id}</h1>
      <h1 className="text-white">{user.nombre}</h1>
      <h1 className="text-white">{user.email}</h1>
      <h1 className="text-white">{user.foto}</h1>
    </div>
  );
}
