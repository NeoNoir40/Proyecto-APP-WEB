import Lottie from "lottie-react";
import primerIcon from "../assets/lottieIcons/AstronomiaStart.json";
import secondIcon from "../assets/lottieIcons/Astronomia2nd.json";
import EarthIcon from "../assets/lottieIcons/Earth.json";
import SunIcon from "../assets/lottieIcons/Sun.json";
import AsteroidIcon from "../assets/lottieIcons/Asteroid.json";
import MoonIcon from "../assets/lottieIcons/MoonIcon.json";
import GalaxyIcon from "../assets/lottieIcons/Galaxyicon.json";

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
        <div className="flex flex-colum justify-start ml-[200px] ">
          <div className="flex">
            <div className="flex">
              <Lottie
                animationData={secondIcon}
                className="h-[200px] w-[200px]"
              ></Lottie>
            </div>
            <div className="grid  text-white">
              <div className=" h-12 w-auto">
                <h1 className=" font-bold text-[30px]  text-center">
                  Teoria del big bang
                </h1>
              </div>
              <div className=" h-[140px] w-[650px]">
                <p className="text-[20px] ">
                  La teoría del Big Bang es la explicación científica del origen
                  del universo. Hace unos 13.8 mil millones de años, todo estaba
                  concentrado en un punto caliente y denso que explotó,
                  iniciando una expansión que continúa hoy. A medida que se
                  expandía y enfriaba, se formaron átomos, luego estrellas y
                  galaxias, dando lugar al universo que conocemos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-colum justify-center m-auto p-[100px]">
          <div className="bg-white h-[400px] w-[1000px]"></div>
        </div>
        <div>
          <div className="flex flex-colum justify-center">
            <div className="grid">
              <div className="">
                <h1 className="text-white font-bold text-[20px] text-center">
                  Tipos de Astros
                </h1>
              </div>

              <div className="grid">
                <div className="flex flex-row">
                  <div className=" ">
                  <Lottie
                      animationData={EarthIcon}
                      className="h-[150px] w-[150px]"
                    ></Lottie>
                  </div>
                  <div className="b">
                    <Lottie
                      animationData={SunIcon}
                      className="h-[150px] w-[150px] "
                    ></Lottie>
                  </div>
                  <div className="">
                    <Lottie
                      animationData={AsteroidIcon}
                      className="h-[150px] w-[150px]"
                    ></Lottie>
                  </div>
                  <div className="">
                    <Lottie
                      animationData={MoonIcon}
                      className="h-[150px] w-[150px]"
                    ></Lottie>
                  </div>
                  <div className="">
                    <Lottie
                      animationData={GalaxyIcon}
                      className="h-[150px] w-[150px]"
                    ></Lottie>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
