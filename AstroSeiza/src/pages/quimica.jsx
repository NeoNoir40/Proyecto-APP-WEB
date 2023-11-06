import React from "react";
import iconQuimica from "../assets/lottieIcons/iconquimica.json";
import CompIcon from "../assets/lottieIcons/comp.json"
import orbital from "../assets/lottieIcons/orbital.json"
import Lottie from "lottie-react";
import cloro from "../assets/img/cloro.jpg";
import atomo from "../assets/img/atomo.png";
import molecula from "../assets/img/molecula.png";
import viñeta from "../assets/img/flechaAbajo.png";
import dinmolecula from "../assets/img/dinamicaMolec.png";
export default function quimica() {
    return (
        <>
            <h1 className="text-white text-center font-bold text-4xl mt-10"> Química </h1>
            <div className=" flex flex-row p-10 items-center justify-center mr-40">
                <Lottie
                    animationData={iconQuimica}
                    className="h-[300px] w-[300px]"
                />
                <div className=" mb-10 ml-10">
                    <p className=" text-white text-center font-bold text-1xl container ">
                        La química es una ciencia que tiene por finalidad no sólo descubrir,<br />
                        sino también, y sobre todo, crear, ya que es el arte de hacer compleja la materia.
                    </p>
                </div>

            </div>
            <h1 className=" text-white text-center font-bold text-3xl p-10">Principios de la quimica moderna</h1>
            <div className=" mb-10 ml-10 justify-center flex">
                <p className=" text-white text-center font-bold text-1xl ">
                    La química moderna se rige por el llamado principio cuántico,<br />
                    fruto de la teoría atómica que considera a la materia desde diferentes niveles de complejidad,<br />
                    como son: Materia. Cualquier cosa que tenga masa, volumen y esté compuesta de partículas.<br />
                    Puede estar compuesta de sustancias puras o mezclas.
                </p>
            </div>
            <div className="flex flex-row p-10 justify-center items-center">
                <div className=" mx-20">
                    <h1 className="text-white font-bold ml-5 text-2xl p-5"> elemento quimico </h1>
                    <img
                        src={cloro}
                        className=" h-[300px] w-[300px] rounded-2xl"
                    />
                </div>
                <div className=" mx-20">
                    <h1 className=" text-white ml-4 font-bold text-2xl p-5"> compuesto quimico</h1>
                    <Lottie
                        animationData={CompIcon}
                        className="h-[300px] w-[300px] bg-slate-400 rounded-[150px]"
                    />
                </div>
            </div>
            <div className="justify-center items-center flex p-5 mt-5 mr-[450px]">
                <details className="bg-transparent w-80 h-auto rounded-[10px_10px_10px_10px] border-2 border-white cursor-pointer mt-1">
                    <summary className="ml-5 py-3 text-left font-mediumml-5 font-medium text-white">¿Qué elemento quieres ver?</summary>
                    <p className="ml-5 mt-1 text-left text-white"></p>
                </details>
            </div>
            <div className="justify-center items-center flex p-10 flex-row">
                <div className="  bg-white h-[500px] w-[900px] rounded-2xl">
                    <p className=" font-bold"></p>
                    <img
                        src={cloro}
                        className=" h-[250px] w-[250px]  ml-10 mt-32 rounded-2xl"
                    />
                    
                </div>
            </div>
            <h1 className=" text-white font-bold text-3xl text-center mt-5">Calculos quimicos cuanticos </h1>
            <div className=" ml-52 mb-10 flex justify-center">
                <p className=" text-white font-bold text-1xl mr-20 mt-[100px] ">
                    Los cálculos químicos cuánticos son un conjunto de técnicas matemáticas y <br />
                    computacionales utilizadas para resolver y modelar problemas en la química cuántica.<br />
                    Estos cálculos se basan en los principios de la mecánica cuántica, que es la teoría fundamental<br />
                    que describe el comportamiento de las partículas subatómicas, como electrones y núcleos,<br />
                    en sistemas moleculares y atómicos.
                </p>
                <img
                    src={atomo}
                    className=" h-[300px] w-[300px]"
                />
            </div>
            <h1 className=" text-white text-center mt-5 font-bold text-3xl">Mecanica molecular</h1>
            <div className=" mb-10 ml-52 justify-center flex">
                <p className=" text-white font-bold text-1xl mr-20 mt-[100px]">
                    La mecánica molecular es una rama de la química computacional que se utiliza<br />
                    para modelar y simular el comportamiento de moléculas y sistemas moleculares<br />
                    utilizando enfoques basados en la mecánica clásica, en lugar de la mecánica cuántica.<br />
                    Permite simular y analizar una amplia gama de sistemas químicos y biológicos,<br />
                    proporcionando información valiosa sobre la dinámica y las propiedades de estas estructuras.
                </p>
                <img
                    src={molecula}
                    className=" h-[300px] w-[300px]"
                />
            </div>
            <h1 className=" text-white text-center mt-5 font-bold text-3xl">Datos de dinámica para una gran cantidad de moléculas</h1>
            <div className=" mb-10 ml-52 justify-center flex">
                <p className=" text-white font-bold text-1xl mr-20 mt-[100px]">
                    La obtención de datos de dinámica para una gran cantidad de moléculas es una tarea crucial <br />
                    en la investigación científica y en aplicaciones prácticas en campos como la química, la biología, <br />
                    la física y la ciencia de los materiales.
                </p>
                <img
                    src={dinmolecula}
                    className=" h-[300px] w-[300px]"
                />
            </div>
            <h1 className=" text-white text-center font-bold text-3xl mt-10">Representacion orbital molecular</h1>
            <div className="justify-center items-center flex p-10">
                <Lottie
                    animationData={orbital}
                    className="h-[300px] w-[300px]"
                />
            </div>


        </>

    );
}