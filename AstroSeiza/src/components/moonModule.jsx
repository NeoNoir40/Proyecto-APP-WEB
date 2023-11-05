import Lottie from "lottie-react";
import ModuleIcon from "../assets/lottieIcons/MoonModuleIcon.json";
import MoonCarousel from "./carouselMoon";

export default function MoonModule() {
  return (
    <div className="flex  justify-start">
      <div className="flex text-white font-bold">
        {/* Modulo de la luna */}
        <div className="mt-20">
          <div className=" text-center">
            <h1>Fases de la luna</h1>
          </div>
          <div className=" flex justify-center">
            <Lottie
              animationData={ModuleIcon}
              className="h-[350px] w-[400px]"
            ></Lottie>
          </div>
          <div className=" mt-10">
            <p>
              Laika fue el primer ser vivo en orbitar la Tierra. Fue una perra
              enviada al espacio por la Unión Soviética en 1957, pero
              trágicamente no sobrevivió al viaje.
            </p>
          </div>
        </div>
      </div>
      {/* Modulo de la luna */}
      <div className=" p-10 ">
        <div className="flex items-center justify-center">
          <div className="max-w-xl">
            <MoonCarousel></MoonCarousel>
          </div>
        </div>
        <div className=" mt-10 text-white">
          <p>
            Las fases de la luna son diferentes aspectos visibles de la Luna a
            medida que orbita alrededor de la Tierra. Van desde la Luna nueva,
            cuando no se ve, hasta la Luna llena, cuando se ve completamente
            iluminada, pasando por el cuarto creciente y el cuarto menguante.
            Estas fases cambian a lo largo de un ciclo lunar de aproximadamente
            29.5 días. Existen 8 fases de la luna
          </p>
        </div>
      </div>
    </div>
  );
}
