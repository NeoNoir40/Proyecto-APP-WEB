import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-header text-white flex w-auto h-[90px]">
      <div className="flex p-3">
        <div>
          <h1 className="text-[36px] font-bold">AstroSeiza</h1>
        </div>
        <ul className="flex gap-4 ml-5 p-5">
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <li>Nosotros</li>
          <Link to="login">
          <li className="">Inicio de sesion</li>

          </Link>
        </ul>
      </div>
    </header>
  );
}
