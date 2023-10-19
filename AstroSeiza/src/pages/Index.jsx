import React from "react";
import img from "../assets/img/fondoindex.jpg";
import iconastro from "../assets/lottieIcons/FTOUb4lWpd.json";
import iconquimica from "../assets/lottieIcons/quimica.json";
import iconfisica from "../assets/lottieIcons/fisica.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

export default function Index() {
  return (
    <>
      <div className="flex relative">
        <div>
          <img
            src={img}
            alt=""
            pp
            className="absolute object-cover h-[75%] w-[100%] blur-[3px]"
          />
        </div>
        <div className="relative  p-[250px] mb-[100px] flex flex-col justify-center items-center m-auto ">
          <div className="flex border-solid border border-white">
            <h2 className="text-white text-[20px] font-serif flex h-[250px] p-24 ">
              "La tierra es un lugar maravilloso , pero es solo un punto azul
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
            <div className=" h-[330px] w-[1300px]  ">
              <p className="text-center text-[20px]">
                Durante su estancia en la aplicacion web, podran encontrar
                informacion interesante acerca de la Astronomia, Fisica y
                Quimica, como pono ejemplo cuales son los cuerpos celestes o los
                atros del espacio, datos interesantes acerca del espacio y la
                tierra, en los apartados de Quimica y Fisica podran encontrar
                datos interesantes de como esas materias han contribuido a la
                ciencia , aportando conociemiento y como mejoro la tecnologia
                del planeta tierra
              </p>
            </div>
          </div>
          <div className="text-[20px]">
            <p>
              Aqui podras encontrar informacion especifica de los siguientes
              apartados:
            </p>
            <div className="flex flex-colum justify-center">
              <div>
                <Link to="/Astronomia">
                  <Lottie
                    animationData={iconastro}
                    className="h-[400px] w-[400px]"
                  />

                  <h1 className="font-bold text-[30px]">Astronomia</h1>
                </Link>
              </div>
              <div>
                <Lottie
                  animationData={iconquimica}
                  className="h-[400px] w-[400px]"
                />
                <h1 className="font-bold text-[30px]">Quimica</h1>
              </div>
              <div>
                <Lottie
                  animationData={iconfisica}
                  className="h-[400px] w-[400px]"
                />
                <h1 className="font-bold text-[30px]">Fisica</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-colum justify-center mt-[40px] mb-[40px] ">
        <div className="withus text-white   text-center rounded-xl">
          <h2 className="font-bold text-[20px]">
            Unete a nuestra comunidad y se un Quimica,Astronomo, Fisico,
            Aprenderas nuevas cosas en nuestras secciones informativas acerca
            del espacio, la quimica y la fisica, Solo haz click en el boton para
            registrarte! , es gratis
          </h2>
          <div className="mt-10">
            <button className="bg-white border-2 border-solid  border-yellow-300 rounded-md text-black m-auto p-1 text-[15px]">
              Registrate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
