import Lottie from "lottie-react";
import EarthIcon from "../assets/lottieIcons/Earth.json";
import SunIcon from "../assets/lottieIcons/Sun.json";
import AsteroidIcon from "../assets/lottieIcons/Asteroid.json";
import MoonIcon from "../assets/lottieIcons/MoonIcon.json";
import GalaxyIcon from "../assets/lottieIcons/Galaxyicon.json";
import { useState } from "react";

export default function TypeOfAstros() {
  const [apiFondo, setApiFondo] = useState(false);

  const cambiarFondo = () => {
    setApiFondo(true);
  };
  return (
    <div className="mt-[150px]">
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
  );
}
