import { useAuth } from "../../../api/context/AuthContext";

import SideBar from "../adminComponents/sidebar";

export default function IndexAdmin() {
  const { admin } = useAuth();
  console.log( 'admin' , admin);

  return (
    <div className="flex flex-col  h-screen bg-white">
      <div className="flex flex-col w-[15%] h-full justify-start sticky bg-red-500 ">
        <h1 className="p-2 text-center">Side bar</h1>
        <div className="flex flex-col gap-4 items-center">
          <ul>
            <li>Administradores</li>
          </ul>
          <ul>
            <li>Usuarios</li>
          </ul>
          <ul>
            <li>Cerrar Sesion</li>
          </ul>
        </div>
      </div>
      <p>{admin.email}</p>
    </div>
  );
}
