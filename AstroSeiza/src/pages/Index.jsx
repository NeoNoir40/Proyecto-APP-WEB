import React from "react";
import ReactPlayer from "react-player";

import video from "../assets/videos/AstroSeiza.mp4";
import img  from '../assets/img/1.jpg'

export default function Index() {
  return (
    <main className="relative">
      <div>
        <img
          src={img}
          alt=""
          className="absolute h-[100%] w-[100%] object-cover top-0 left-0 blur-[2px]"
        />
      </div>
      <div className="relative  p-[300px] flex flex-col justify-center items-center m-auto ">
        <div className="flex border-solid border border-white">
          <h2 className="text-white flex h-[250px] p-24 m-auto">
            "La tierra es un lugar maravilloso , pero es solo un punto azul
            pálido en un vasto océano cósmico."- Carl Sagan
          </h2>
        </div>
      </div>
      <div className=" absolute top-0 left-0 w-[100%] h-[100%] bg-[#1c1c1d] opacity-[.5] mix-blend-overlay "></div>
    </main>
  );
}
