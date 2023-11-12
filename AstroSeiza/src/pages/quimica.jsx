import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import iconQuimica from "../assets/lottieIcons/iconquimica.json";
import CompIcon from "../assets/lottieIcons/comp.json"
import orbital from "../assets/lottieIcons/orbital.json"
import Lottie from "lottie-react";
import atomo from "../assets/img/atomo.png";
import molecula from "../assets/img/molecula.png";
import dinmolecula from "../assets/img/dinamicaMolec.png";
import elemento from "../assets/img/elemquimico.png"
export default function quimica() {

    const elemPag = 20;
    const [Actual, setActual] = useState(1);
    const [Quimica, setQuimica] = useState([]);
    const [Categ, setCateg] = useState([]);
    useEffect(() => {

        const fetchquimicApi = async () => {
            try {
                const response = await axios.get("http://localhost:3002/quimicApi/1");
                setQuimica(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchquimicApi();
    }, []);

    useEffect(() => {

        const fetchcategApi = async () => {
            try {
                const response = await axios.get("http://localhost:3002/categApi/");
                setCateg(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchcategApi();
    }, []);

    const indiceInicial = (Actual - 1) * elemPag;
    const indiceFinal = Actual * elemPag;

    // Obtiene la porción de elementos para la página actual
    const elementos = Quimica.slice(indiceInicial, indiceFinal);

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
            <h1 className=" text-white text-center font-bold text-3xl p-5 mb-5">Principios de la quimica moderna</h1>
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
                        src={elemento}
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
            <h1 className=" text-white font-bold text-3xl text-center mt-5">Tabla Periódica</h1>
            <div className="justify-center items-center flex flex-col p-10">
                <table>
                    <thead>
                        <tr>
                            <th className="w-44 text-white font-bold">Elemento</th>
                            <th className="w-44 text-white font-bold">Número atómico</th>
                            <th className="w-44 text-white font-bold">Nombre</th>
                            <th className="w-44 text-white font-bold">Símbolo</th>
                            <th className="w-44 text-white font-bold">Peso atómico (uma)</th>
                            <th className="w-44 text-white font-bold">Periodo-Grupo</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {elementos.map(compuesto => (
                            <tr key={compuesto.id} className="text-center border-y-2 text-white h-5">
                                <td><img src={compuesto.img} alt="img" className=" w-[45px] h-[45px] mx-auto my-auto" /></td>
                                <td>{compuesto.numero}</td>
                                <td>{compuesto.nombre}</td>
                                <td>{compuesto.simbolo}</td>
                                <td>{compuesto.masa}</td>
                                <td>{compuesto.periodoGrupo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => setActual(Actual - 1)}
                        disabled={Actual === 1}
                        className="mx-2 px-4 py-2 bg-transparent text-white rounded"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => setActual(Actual + 1)}
                        disabled={indiceFinal >= Quimica.length}
                        className="mx-2 px-4 py-2 bg-transparent text-white rounded"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
            <div className=" mb-10 flex justify-center flex-col">
                <p className="text-white font-bold text-1xl mt-[40px] text-center">
                    En la tabla periódica, se puede observar que los elementos químicos cuentan con unos colores diferentes entre ellos,
                    <br />
                    estos colores se deben a que forman parte de una categoría en particular, usando de ejemplo los elementos, te mostraré la categorías,
                    <br />
                    estas son:
                </p>
                <div className="text-white mt-10 ml-auto mr-auto font-bold text-[20px]">
                    <table>
                        <thead>
                            <tr className="">
                                <th className="w-40"></th>
                                <th className="w-40"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Categ.map(cate => (
                            <tr key={cate.id} className="text-center border-b-2 text-white h-14" >
                                <th className=" border-r-2 ">{cate.nombreCat}</th>
                                <th className=" border-l-2 "><img src={cate.img} className="w-[45px] h-[45px] mx-auto my-auto"></img></th>
                            </tr>
                            ))}
                        </tbody>
                    </table>
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
