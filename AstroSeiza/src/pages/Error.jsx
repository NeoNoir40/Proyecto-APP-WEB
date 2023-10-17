import Lottie from "lottie-react";
import icon from "../assets/lottieIcons/Error404Icon.json";

export default function Error() {
  return (
    <>
      <div className="flex flex-colum justify-center p-[100px]">
        <div>
          <h1 className="text-white text-[40px] text-center  flex font-bold">
            Error. No se encontró la página, por favor regrese al incio e
            intente de nuevo.
          </h1>
          <div className="flex flex-colum justify-center">
            <Lottie animationData={icon} className="w-[600px] h-[600px]" />
          </div>
        </div>
      </div>
    </>
  );
}
