import { Link } from "react-router-dom";
import { useAuth } from "../api/context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, isAuthenticatedAdmin, logout } = useAuth();
  return (
    <header className="bg-header text-white flex justify-between w-full h-[90px] items-center px-3">
      <div className="flex items-center">
        <img
          className="w-[70px] h-[70px] mr-2"
          src="../../public/AstroSeiza.svg"
          alt="Logo"
        />
        <h1 className="text-[36px] font-bold">AstroSeiza</h1>
      </div>
      {isAuthenticated ? (
        <>
          <div className="mr-10 border-y p-2">
            <ul className="flex gap-4">
              <Link to="/">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Inicio
                </li>
              </Link>
              <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                Nosotros
              </li>
              <Link to="/Astronomia">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Astronomia
                </li>
              </Link>
              <Link to="/">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Quimica
                </li>
              </Link>
              <Link to="/">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Fisica
                </li>
              </Link>
              <Link to="/Perfil">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Perfil
                </li>
              </Link>
            </ul>
          </div>
          <div className="mr-10">
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
            >
              <button className="  w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-2 text-center  hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs  ">
                Cerrar Sesion{" "}
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="mr-10 border-y p-2">
            <ul className="flex gap-4">
              <Link to="/">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Inicio
                </li>
              </Link>
              <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                Nosotros
              </li>
              <Link to="/Astronomia">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Astronomia
                </li>
              </Link>
              <Link to="/">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Quimica
                </li>
              </Link>
              <Link to="/Fisica">
                <li className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  Fisica
                </li>
              </Link>
            </ul>
          </div>
          <div className="mr-10">
            <Link to="/login">
              <button className="  w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-2 text-center  hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs  ">
                Iniciar Sesión
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}

