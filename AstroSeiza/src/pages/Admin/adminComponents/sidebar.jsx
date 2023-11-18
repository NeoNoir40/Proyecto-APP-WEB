import React, { useState } from "react";
import { BiMenu, BiSolidDashboard, BiLogIn } from "react-icons/bi";
import { PiUserSquareFill } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/context/AuthContext";

export default function SideBar() {
  const { logoutAdmin } = useAuth();

  const [open, setOpen] = useState(true);
  const menus = [
    { name: "Dashboard", link: "/indexAdmin", icon: BiSolidDashboard },
    { name: "Admin Perfil", link: "/PerfilAdmin", icon: MdAdminPanelSettings },
    { name: "Usuarios", link: "/Usuarios", icon: PiUserSquareFill },
    { name: "Cerrar Sesión", link: "/indexAdmin", icon: BiLogIn, margin: true, onClick : ()=>{logoutAdmin()}  },
  ];





  return (
    <div
      className={`bg-[#0D102C] min-h-screen ${
        open ? "w-72" : "w-16"
      } text-white px-4`}
    >
      <div className="py-3 flex justify-end">
        <BiMenu
          size={26}
          className="cursor-pointer mb-5"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            className={`${
              menu?.margin && "mt-96"
            }  group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-700 rounded-md`} onClick={menu?.onClick}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{ transitionDelay: `${i + 3}00ms` }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-[#0D102C] font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 
        py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1  group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
