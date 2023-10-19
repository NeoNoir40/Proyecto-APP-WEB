import primerIcon from "../assets/lottieIcons/AstronomiaStart.json";
import Lottie from "lottie-react";

export default function AstronomiStartModule() {
  return (
    <div className="flex flex-colum justify-start ">
      <div className="flex">
        <div className="flex">
          <Lottie
            animationData={primerIcon}
            className="h-[400px] w-[400px]"
          ></Lottie>
        </div>
        <div className="grid  text-white">
          <div className=" h-12 w-auto">
            <h1 className=" font-bold text-[30px] mt-20 text-center">
              Astronomia
            </h1>
          </div>
          <div className=" h-[140px] w-[650px]">
            <p className="text-[20px] ">
              La astronomia es la rama de la ciencia que se enfoca a estudiar
              los astros (estrellas, planetas, asteroides..etc), en este
              apartado podras encontrar informacion acerca de los astros y sus
              fenomenos,.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
