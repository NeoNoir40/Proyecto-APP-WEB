import React from "react";
import img from "../assets/img/fondoindex.jpg";
import iconastro from "../assets/lottieIcons/FTOUb4lWpd.json";
import iconquimica from "../assets/lottieIcons/quimica.json";
import iconfisica from "../assets/lottieIcons/fisica.json";
import Lottie from "lottie-react";
import videoBackground from "../assets/videos/indexVideo1.mp4";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <div className="flex relative">
        <div className="absolute w-full h-[75%] overflow-hidden">
          <video autoPlay loop muted className="object-cover w-full h-full">
            <source src={videoBackground} type="video/mp4" />
          </video>
        </div>

        <div className="relative  p-[250px] mb-[100px] flex flex-col justify-center items-center m-auto ">
          <div className="flex border-solid border border-white">
            <h2 className="text-white text-[20px] font-serif flex h-[250px] p-24 ">
              "La tierra es un lugar maravilloso, pero es solo un punto azul
              pálido en un vasto océano cósmico."- Carl Sagan
            </h2>
          </div>
        </div>
        <div className=" absolute top-0 left-0 w-[100%] h-[75%] bg-[#1c1c1d] opacity-[.2] mix-blend-overlay "></div>
      </div>
      <div className="text-center text-white  mb-[40px] ">
        <div className="mb-[50px]">
          <h1 className="font-bold text-[35px] ">Bienvenidos a AstroSeiza</h1>
        </div>

        <div className="mt-[40px]">
          <div className="flex flex-colum justify-center  ">
            <div className=" h-[330px] w-[1300px]   ">
              <p className="text-center text-[20px] ">
                Durante su estancia en la Aplicación Web, podrán encontrar
                información interesante acerca de la Astronomía, Física y
                Química, cómo por ejemplo cuáles son los cuerpos celestes o los
                atros del espacio, datos interesantes acerca del espacio y la
                tierra, en los apartados de Química y Física podrán encontrar
                datos interesantes de como esas materias han contribuido a la
                ciencia, aportando conocimiento y como mejoró la tecnología
                del planeta tierra.
              </p>
            </div>
          </div>
          <div className="text-[20px]">
            <p>
              Aquí podras encontrar información específica de los siguientes
              apartados:
            </p>
            <div className="flex flex-colum justify-center">
              <div className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                <Link to="/Astronomia">
                  <Lottie
                    animationData={iconastro}
                    className="h-[400px] w-[400px]"
                  />

                  <h1 className="font-bold text-[30px]">Astronomía</h1>
                </Link>
              </div>
              <Link to='/Quimica'>
              <div className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                <Lottie
                  animationData={iconquimica}
                  className="h-[400px] w-[400px] "
                />
                <h1 className="font-bold text-[30px]">Química</h1>
              </div>
              </Link>
              <Link to="/Fisica">
                <div className=" hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
                  <Lottie
                    animationData={iconfisica}
                    className="h-[400px] w-[400px]"
                  />
                  <h1 className="font-bold text-[30px]">Física</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-colum justify-center mt-[40px] mb-[40px] ">
        <div className="withus text-white   text-center rounded-xl ">
          <h2 className="font-bold text-[20px]">
            Únete a nuestra comunidad y se un Químico, Astrónomo, Físico,
            Aprenderás nuevas cosas en nuestras secciones informativas acerca
            del espacio, la química y la física. Solo haz click en el botón para
            registrarte!, es gratis.
          </h2>
          <Link to={"/SingUP"}>
            <div className="mt-10  hover:scale-105 transition-all hover:contrast-125 hover:shadow-xs ">
              <button className="bg-white border-2 border-solid  border-yellow-300 rounded-md text-black m-auto p-1 text-[15px]">
                Regístrate
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
