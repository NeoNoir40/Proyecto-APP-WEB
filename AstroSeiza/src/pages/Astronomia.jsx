import Lottie from "lottie-react";
import primerIcon from "../assets/lottieIcons/AstronomiaStart.json";
import secondIcon from "../assets/lottieIcons/Astronomia2nd.json";

export default function Astronomia() {
  return (
    <>
      <div className="grid p-20">
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
                  La astronomia es la rama de la ciencia que se enfoca a
                  estudiar los astros (estrellas, planetas, asteroides..etc), en
                  este apartado podras encontrar informacion acerca de los
                  astros y sus fenomenos,.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-colum justify-start ml-[120px] ">
          <div className="flex">
            <div className="flex">
              <Lottie
                animationData={secondIcon}
                className="h-[300px] w-[300px]"
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
                  La astronomia es la rama de la ciencia que se enfoca a
                  estudiar los astros (estrellas, planetas, asteroides..etc), en
                  este apartado podras encontrar informacion acerca de los
                  astros y sus fenomenos,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
