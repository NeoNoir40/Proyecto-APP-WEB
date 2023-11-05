import video from "../assets/videos/backgroundVideo.mp4";
import googleicon from "../assets/login/Google__G__Logo.svg";
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="flex w-full h-screen flex-col items-center ">
        <div className=" h-full w-1/2 flex flex-col justify-center items-center ">
          <div className="flex flex-col bg-white p-20 rounded-md ">
            <h1 className="text-[25px] font-bold text-center mb-2">
              Inicio de sesion
            </h1>
            <p className="mb-2">
              Bienvenido, ingresa tus datos de para inciar sesion
            </p>
            <div>
              <input
                type="email"
                placeholder="Correo electronico"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            <p className="mb-2">Olvide mi contraseña</p>
            <div>
              <button className="w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors ">
                Inciar Sesion
              </button>
            </div>
            <div>
                <Link to={'/SingUP'}>
              <button className="w-full  my-2 text-[#060606] bg-white  border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors">
                Registrarse
              </button>
              </Link>
            </div>
            <p className="text-center text-gray-400">
              otras formas de inciar sesion
            </p>
            <div>
              <button className="w-full text-[#060606] my-2 bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center hover:bg-blue-950 hover:text-gray-100 transition-colors">
                <img src={googleicon} alt="" className="mr-2" /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
