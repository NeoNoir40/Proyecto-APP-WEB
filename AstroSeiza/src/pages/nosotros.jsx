import React from "react";
import dano from "../assets/img/dano.jpeg"
import coronado from "../assets/img/coronado.jpg"
import wilberth from "../assets/img/wilberth.jpg"
import wil from "../assets/img/wuil.jpeg"
import coronao from "../assets/img/coronao.jpeg"
export default function Nosotros() {
    return (
        <>
            <h1 className="text-white text-center font-bold text-4xl mt-10">Nosotros</h1>
            <br />
            <div className="text-white text-center text-4xl font-bold p-10">
                <p className=" tec">¿Quiénes somos?</p>
            </div>
            <br />

            <div className=" mb-10 ml-10 flex justify-center">
                <p className=" text-white text-center text-[20px] container ">
                    Somos AstroSeiza, una aplicacion web que trata sobre buscar e informarse sobre el mundo cientifico,
                    como lo puede ser el mundo de la fisica, quimica y de astronomía. Estamos comprometidos en brindar
                    a los entusiastas de la ciencia un espacio único y accesible para explorar el vasto mundo científico.
                    Nuestra aplicación web nace de la
                    pasión por el conocimiento y el deseo de acercar la ciencia a todas las personas, independientemente de su nivel de experiencia.</p>
            </div>

            <br />
            <div className="text-white text-center text-4xl font-bold p-10">
                <p>¿Por qué decidimos hacer AstroSeiza?</p>
            </div>
            <div className="mb-10 ml-10 justify-center flex">
                <p className="text-white text-[20px] text-center container ">
                    Creemos que la ciencia es una herramienta poderosa para entender el mundo que nos rodea.
                    Queremos estimular la curiosidad de las personas y alentar el aprendizaje continuo.
                    La ciencia no debe ser un territorio exclusivo de expertos. AstroSeiza se esfuerza por hacer
                    que la información científica sea fácil de entender y accesible para todos, así como  derribar
                    las barreras que a menudo dificultan la comprensión de conceptos científicos, para apoyar a que
                    gente de todas las edades se interesen por el vasto mundo cientifíco, como también ver lo que ocurre en el mundo.
                </p>
            </div>
            <div className="text-white text-center text-4xl font-bold p-10">
                <p>Filosofía de AstroSeiza</p>
            </div>
            <div className=" mb-5 justify-center flex flex-col items-center">
                <p className=" text-white font-bold text-3xl p-5">Misión</p>
                <p className="text-white text-[20px] text-center container ">
                    Inculcar la curiosidad y el amor por la ciencia, proporcionando una aplicación que enseñe los principios de la ciencia.
                    Además que la aplicación sea accesible y gratuita para el usuario, pudiendo usarlo caualquiera.
                </p>
                <p className=" text-white font-bold text-3xl p-5">Visión</p>
                <p className="text-white text-[20px] text-center container">
                    Convertirnos en una de las principales fuentes de educación sobre ciencia en línea,
                    creando pasión en los usuarios, inspirando a futuros científicos e ingenieros.
                </p>
                <p className=" text-white font-bold text-3xl mt-6">Valores</p>
            </div>
            <div className=" mb-5">
                <p className=" text-white text-[20px] pl-60">
                    1. Inspiración: Buscamos despertar la pasión por la ciencia, mostrandola atractiva y fácil de entender
                </p>
                <p className="text-white text-[20px] pl-60">
                    2. Aprendizaje: Queremos que la gente que use la aplicación, refuerze sus conocimientos o, de lo contrario, los adquiera gracias a nuestra aplicación.
                </p>
                <p className="text-white text-[20px] pl-60">
                    3. Accesibilidad: Nuestra aplicacion estará diseñada para que cualquier persona de cualquier edad, sea capaz de utilizarla.
                </p>
            </div>
            <div className=" text-white text-2xl mb-7 font-bold text-center">
                <h2>Miembros del equipo</h2>
            </div>
            <div className="text-white text-center justify-center font-semibold flex flex-row">
                <div className=" mx-10">
                    <p className=" mb-5"> Cahuich Cruz Wilberth Antony</p>
                    <img className="w-80 mx-auto block rounded-lg" src={wil} alt="" />
                </div>
                <div className=" mx-10">
                    <p className=" mb-5"> Coronado Cob José Antonio</p>
                    <img className="w-80 mx-auto block rounded-lg" src={coronao} alt="" />
                </div>
                <div className=" mx-10">
                    <p className=" mb-5">Sánchez Martínez Daniel Jesús</p>
                    <img className="w-80 mx-auto block rounded-lg" src={dano} alt="" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}
