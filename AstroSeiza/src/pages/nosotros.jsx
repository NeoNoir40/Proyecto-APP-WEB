import React from "react";
import dano from "../assets/img/dano.jpeg"
import coronado from "../assets/img/coronado.jpg"
import wilberth from "../assets/img/wilberth.jpg"
export default function Nosotros() {
    return (
        <>
            <h1 className="text-white text-center font-bold text-4xl mt-10">Nosotros </h1>
            <br/>
            <div className="text-white text-center text-4xl font-bold p-10">
                <p className=" tec">¿Quienes somos?</p>
            </div>
            <br/>
            
            <div className=" mb-10 ml-10 flex justify-center">
                <p className=" text-white font-bold text-center text-[20px] container ">
                    Somos AstroSeiza, una aplicacion web que trata sobre buscar e informarse sobre el mundo cientifico,
                    como lo puede ser el mundo de la fisica, quimica y de astronomía. Estamos comprometidos en brindar
                    a los entusiastas de la ciencia un espacio único y accesible para explorar el vasto mundo científico.
                    Nuestra aplicación web nace de la
                    pasión por el conocimiento y el deseo de acercar la ciencia a todas las personas, independientemente de su nivel de experiencia.</p>
            </div>
            
            <br/>
            <div className="text-white text-center text-4xl font-bold p-10">
                <p>¿Por qué decidimos hacer AstroSeiza?</p>
            </div>
            <div className="mb-10 ml-10 justify-center flex">
                <p className="text-white font-bold text-[20px] text-center container ">
                    Creemos que la ciencia es una herramienta poderosa para entender el mundo que nos rodea.
                    Queremos estimular la curiosidad de las personas y alentar el aprendizaje continuo.
                    La ciencia no debe ser un territorio exclusivo de expertos. AstroSeiza se esfuerza por hacer
                    que la información científica sea fácil de entender y accesible para todos, así como  derribar
                    las barreras que a menudo dificultan la comprensión de conceptos científicos, para apoyar a que
                    gente de todas las edades se interesen por el vasto mundo cientifíco, como también ver lo que ocurre en el mundo.
                </p>
            </div>
            <div className=" text-white text-2xl h-14 font-bold  text-center">
                <h2>Miembros del equipo</h2>
            </div>
            <div className="text-white text-center font-semibold">
                <ul>
                    <li className=" h-10"> Cahuich Cruz Wilberth Antony</li>
                    <img className="w-80 mx-auto block rounded-lg" src={wilberth} alt=""/>
                    <li className=" mt-5 h-10"> Coronado Cob José Antonio</li>
                    <img className="w-80 mx-auto block rounded-lg" src={coronado} alt=""/>
                    <li className=" mt-5 h-10">Sánchez Martínez Daniel Jesús</li>
                    <img className="w-80 mx-auto block rounded-lg" src={dano} alt=""/>
                </ul>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}
