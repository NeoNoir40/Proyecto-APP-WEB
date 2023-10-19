import Lottie from "lottie-react";
import secondIcon from "../assets/lottieIcons/Astronomia2nd.json";


export default function BigBangModule() {
  return (
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
            F
            <p className="text-[20px] ">
              La teoría del Big Bang es la explicación científica del origen del
              universo. Hace unos 13.8 mil millones de años, todo estaba
              concentrado en un punto caliente y denso que explotó, iniciando
              una expansión que continúa hoy. A medida que se expandía y
              enfriaba, se formaron átomos, luego estrellas y galaxias, dando
              lugar al universo que conocemos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
