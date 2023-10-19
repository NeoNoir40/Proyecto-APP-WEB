import Lottie from "lottie-react";
import primerIcon from "../assets/lottieIcons/AstronomiaStart.json";
import secondIcon from "../assets/lottieIcons/Astronomia2nd.json";
import EarthIcon from "../assets/lottieIcons/Earth.json";
import SunIcon from "../assets/lottieIcons/Sun.json";
import AsteroidIcon from "../assets/lottieIcons/Asteroid.json";
import MoonIcon from "../assets/lottieIcons/MoonIcon.json";
import GalaxyIcon from "../assets/lottieIcons/Galaxyicon.json";
import { useState } from "react";

export default function Astronomia() {
  const [apiFondo, setApiFondo] = useState(false);

  const cambiarFondo = () => {
    setApiFondo(true);
  };

  return (
    <>
      <div className="grid p-20">
        {/* Modulo de incio */}
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
          <div className="bg-white h-[400px] w-[1000px]">
            <h1 className="text-black">Pinteresst API</h1>
          </div>
        </div>
        {/* Modulo de tipo de astros */}
        <div>
          <div className="flex flex-colum justify-center">
            <div className="grid">
              <div className="">
                <h1 className="text-white font-bold text-[20px] text-center">
                  Tipos de Astros
                </h1>
              </div>

              <div className=" ml-auto mr-auto grid">
                <div className="flex flex-row">
                  <div className=" ">
                    <button onClick={cambiarFondo}>
                      <Lottie
                        animationData={EarthIcon}
                        className="h-[150px] w-[150px]"
                      ></Lottie>
                    </button>
                  </div>
                  <div className="b">
                    <button onClick={cambiarFondo}>
                      <Lottie
                        animationData={SunIcon}
                        className="h-[150px] w-[150px] "
                      ></Lottie>
                    </button>
                  </div>
                  <div className="">
                    <button onClick={cambiarFondo}>
                      <Lottie
                        animationData={AsteroidIcon}
                        className="h-[150px] w-[150px]"
                      ></Lottie>
                    </button>
                  </div>
                  <div className="">
                    <button onClick={cambiarFondo}>
                      <Lottie
                        animationData={MoonIcon}
                        className="h-[150px] w-[150px]"
                      ></Lottie>
                    </button>
                  </div>
                  <div className="">
                    <button onClick={cambiarFondo}>
                      <Lottie
                        animationData={GalaxyIcon}
                        className="h-[150px] w-[150px]"
                      ></Lottie>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-colum justify-center m-auto p-[100px]">
                <div className={apiFondo ? "fondo-blanco" : ""}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-colum  justify-start bg-black">
          <div className="flex text-white font-bold">
            {/* Modulo de la luna */}
            <div className="bg-red-900">
              <div className="bg-blue-900">
                <h1>Fases de la luna</h1>
              </div>
              <div className="bg-green-900">
                <h1>Moon Icon</h1>
              </div>
              <div className="bg-pink-400">
                <p>
                  Laika fue el primer ser vivo en orbitar la Tierra. Fue una
                  perra enviada al espacio por la Unión Soviética en 1957, pero
                  trágicamente no sobrevivió al viaje.
                </p>
              </div>
            </div>
          </div>
          {/* Modulo de la luna */}
          <div className="bg-purple-400">
            <div className="bg-purple-700">
              <h1>Laika</h1>
            </div>
            <div className="bg-red-500">
              <h1>Container</h1>
            </div>
            <div className="bg-green-400">
              <p>
                Las fases de la luna son diferentes aspectos visibles de la Luna
                a medida que orbita alrededor de la Tierra. Van desde la Luna
                nueva, cuando no se ve, hasta la Luna llena, cuando se ve
                completamente iluminada, pasando por el cuarto creciente y el
                cuarto menguante. Estas fases cambian a lo largo de un ciclo
                lunar de aproximadamente 29.5 días. Existen 8 fases de la luna
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-colum  justify-start bg-black mt-[200px]">
          <div className="flex text-white font-bold">
            {/* Modulo de la luna */}
            <div className="bg-red-900">
              <div className="bg-blue-900">
                <h1>Atmosfera</h1>
              </div>

              <div className="bg-pink-400">
                <p>
                  Laika fue el primer ser vivo en orbitar la Tierra. Fue una
                  perra enviada al espacio por la Unión Soviética en 1957, pero
                  trágicamente no sobrevivió al viaje.
                </p>
              </div>
              <div className="bg-green-900">
                <h1>Moon Icon</h1>
              </div>
            </div>
          </div>
          {/* Modulo de la luna */}
          <div className="bg-purple-400">
            <div className="bg-purple-700">
              <h1>Laika</h1>
            </div>
            <div className="bg-red-500">
              <h1>Container</h1>
            </div>
            <div className="bg-green-400">
              <p>
                Las fases de la luna son diferentes aspectos visibles de la Luna
                a medida que orbita alrededor de la Tierra. Van desde la Luna
                nueva, cuando no se ve, hasta la Luna llena, cuando se ve
                completamente iluminada, pasando por el cuarto creciente y el
                cuarto menguante. Estas fases cambian a lo largo de un ciclo
                lunar de aproximadamente 29.5 días. Existen 8 fases de la luna
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
