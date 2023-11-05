import ISSLocation from "../components/issApi";
import MoonModule from "../components/moonModule";
import AstronomiStartModule from "../components/astronomicStartModule";
import BigBangModule from "../components/bigBangModule";
import TypeOfAstros from "../components/typesOfPlanets";
import PinterestApi from "../components/pinterestApi";
import ZodicalSing from "../components/zodiacalSing";
import AstroSong from "../components/musicPlayerAstronomi";
export default function Astronomia() {
  return (
    <>
      <>
        <AstroSong />
      </>

      <div className="grid p-20">

        <div className="bg-white   w-[650px]">
          <p className="text-red-600  font-bold text-[12px]">
            Nota: si estas en un dispositivo en el que la resolucion nativa no
            sea 1920 x 1280, es posible que la pagina no se vea correctamente,
            de igual menera si el dipsotivio tiene algun tipo de zoom activado,
            se recomienda desactivarlo para una mejor experiencia
          </p>
        </div>
        <>
          <AstronomiStartModule />
        </>
        <>
          <BigBangModule />
        </>
        <>
          <PinterestApi />
        </>
        {/* Modulo de tipo de astros */}
        <>
          <TypeOfAstros />
        </>
        <>
          <MoonModule />
        </>
        <>
          <ISSLocation />
        </>
        <>
          <ZodicalSing />
        </>
      </div>
    </>
  );
}
