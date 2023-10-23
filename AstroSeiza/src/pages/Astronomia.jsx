import Lottie from "lottie-react";
import { useState } from "react";
import MoonModule from "../components/moonModule";
import AtmosphereModule from "../components/atmospherModule";
import AstronomiStartModule from "../components/astronomicStartModule";
import BigBangModule from "../components/bigBangModule";
import TypeOfAstros from "../components/typesOfPlanets";
import PinterestApi from "../components/pinterestApi";
import ZodicalSing from "../components/zodiacalSing";
export default function Astronomia() {
  return (
    <>
      <div className="grid p-20">
        {/* Modulo de incio */}
        <>
          <AstronomiStartModule />
        </>
        <>
          <BigBangModule />
        </>
        <>
          {" "}
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
          <AtmosphereModule />
        </>
        <>
        <ZodicalSing/>
        </>
      </div>
    </>
  );
}
