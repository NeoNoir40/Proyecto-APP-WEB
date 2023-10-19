import Lottie from "lottie-react";
import ModuleIcon from "../assets/lottieIcons/MoonModuleIcon.json";

export default function MoonModule() {
  return (
    <div className="flex  justify-start bg-black">
      <div className="flex text-white font-bold">
        {/* Modulo de la luna */}
        <div className="bg-red-900">
          <div className="bg-blue-900 text-center">
            <h1>Fases de la luna</h1>
          </div>
          <div className="bg-green-900 flex justify-center">
            <Lottie
              animationData={ModuleIcon}
              className="h-[150px] w-[150px]"
            ></Lottie>
          </div>
          <div className="bg-pink-400 mt-10">
            <p>
              Laika fue el primer ser vivo en orbitar la Tierra. Fue una perra
              enviada al espacio por la Unión Soviética en 1957, pero
              trágicamente no sobrevivió al viaje.
            </p>
          </div>
        </div>
      </div>
      {/* Modulo de la luna */}
      <div className="bg-purple-400 p-10 ">
        <div className="bg-purple-700 text-center font-bold text-white">
          Fase del dia de hoy
        </div>
        <div className="bg-red-500 h-[200px] mt-10">
          <h1>Container</h1>
        </div>
        <div className="bg-green-400 mt-10 text-white">
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
