import React, { useState, useEffect } from "react";
import axios from 'axios';
import iconQuimica from "../assets/lottieIcons/iconquimica.json";
import orbital from "../assets/lottieIcons/orbital.json"
import Lottie from "lottie-react";
import atomo from "../assets/img/atomo.png";
import molecula from "../assets/img/molecula.png";
import dinmolecula from "../assets/img/dinamicaMolec.png";
import elemento from "../assets/img/elemquimico.png"
import InfoQuimica from "../components/InfoQuimica";

export default function quimica() {

    const elemPag = 20;
    const [Actual, setActual] = useState(1);
    const [Quimica, setQuimica] = useState([]);
    const [Categ, setCateg] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [ordenPeriodo, setOrdenPeriodo] = useState('asc');
    const [ordenGrupo, setOrdenGrupo] = useState('asc');

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
    const elementos = Quimica.slice(indiceInicial, indiceFinal);

    const Filtro = elementos.filter(compuesto =>
        compuesto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        || compuesto.simbolo.toLowerCase().includes(busqueda.toLowerCase())
    );

    const ordPeriodo = () => {
        const newOrd = ordenPeriodo === 'asc' ? 'desc' : 'asc';
        setOrdenPeriodo(newOrd);
        const elemOrd = [...Quimica].sort((a, b) => {
            return newOrd === 'asc' ? a.periodo - b.periodo : b.periodo - a.periodo;
        });
        setQuimica(elemOrd);
    };

    const ordGrupo = () => {
        const newOrd = ordenGrupo === 'asc' ? 'desc' : 'asc';
        setOrdenGrupo(newOrd);
        const elemOrd = [...Quimica].sort((a, b) => {
            return newOrd === 'asc' ? a.grupo - b.grupo : b.grupo - a.grupo;
        });
        setQuimica(elemOrd);
    };



    return (
        <>
            <h1 className="text-white text-center font-bold text-4xl mt-10"> Química </h1>
            <div className=" flex flex-row mt-5 items-center justify-center mr-40">
                <Lottie
                    animationData={iconQuimica}
                    className="h-[300px] w-[300px]"
                />
                <div className=" ml-10">
                    <p className=" text-white text-center text-1xl container ">
                        La química es una ciencia que tiene por finalidad no sólo descubrir,<br />
                        sino también, crear, ya que es el arte de hacer compleja la materia.
                    </p>
                </div>

            </div>

            <div className="flex flex-row p-5 justify-center items-center">
                <div className=" mx-20">
                    <h1 className="text-white font-bold text-2xl p-5 mb-5">Principios de la química moderna</h1>
                    <p className=" text-white text-1xl ">
                        La química moderna se rige por el llamado principio cuántico,<br />
                        fruto de la teoría atómica que considera a la materia desde diferentes niveles de complejidad,<br />
                        como son: Materia. Cualquier cosa que tenga masa, volumen y esté compuesta de partículas.<br />
                        Puede estar compuesta de sustancias puras o mezclas.
                    </p>
                </div>
                <div className=" mx-20">
                    <h1 className="text-white font-bold ml-5 text-2xl p-5"> Elemento químico </h1>
                    <img
                        src={elemento}
                        className=" h-[300px] w-[300px] rounded-2xl"
                    />
                </div>
            </div>
            <h1 className=" text-white font-bold text-3xl text-center mt-5">Tabla Periódica</h1>
            <div className="justify-center items-center flex flex-col p-10">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="flex m-5 rounded-md border-2 border-white p-[4px] bg-transparent text-white font-semibold mr-[500px] "
                        placeholder="Buscar Elemento..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    <button onClick={ordPeriodo} className=" text-white flex rounded-md p-[4px] border-2 border-white font-semibold m-5">Ordenar por Periodo
                        {ordenPeriodo === 'asc' ? '↑' : '↓'}</button>
                    <button onClick={ordGrupo} className=" text-white flex rounded-md p-[4px] border-2 border-white font-semibold m-5">Ordenar por Grupo
                        {ordenGrupo === 'asc' ? '↑' : '↓'}</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="w-44 text-white font-bold">Elemento</th>
                            <th className="w-44 text-white font-bold">Número atómico</th>
                            <th className="w-44 text-white font-bold">Nombre</th>
                            <th className="w-44 text-white font-bold">Símbolo</th>
                            <th className="w-44 text-white font-bold">Peso atómico (uma)</th>
                            <th className="w-44 text-white font-bold">Periodo</th>
                            <th className="w-44 text-white font-bold">Grupo</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Filtro.map(compuesto => (
                            <tr key={compuesto.id} className="text-center border-y-2 text-white h-5">
                                <td><img src={compuesto.img} alt="img" className=" w-[45px] h-[45px] mx-auto my-auto" /></td>
                                <td>{compuesto.numero}</td>
                                <td>{compuesto.nombre}</td>
                                <td>{compuesto.simbolo}</td>
                                <td>{compuesto.masa}</td>
                                <td>{compuesto.periodo}</td>
                                <td>{compuesto.grupo}</td>
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
                <p className="text-white text-1xl mt-[40px] text-center">
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
            <InfoQuimica
                titulo={"Cálculos químicos cuánticos"}
                texto={`Los cálculos químicos cuánticos son un conjunto de técnicas matemáticas
                        y computacionales utilizadas para resolver y modelar problemas en la química cuántica.
                        Estos cálculos se basan en los principios de la mecánica cuántica, que es la teoría fundamental 
                        que describe el comportamiento de las partículas subatómicas, como electrones y núcleos, 
                        en sistemas moleculares y atómicos`}
                imagen={atomo}
            />
            <InfoQuimica
                titulo={`Mecanica molecular`}
                texto={`La mecánica molecular es una rama de la química computacional que se utiliza
            para modelar y simular el comportamiento de moléculas y sistemas moleculares
            utilizando enfoques basados en la mecánica clásica, en lugar de la mecánica cuántica.
            Permite simular y analizar una amplia gama de sistemas químicos y biológicos,
            proporcionando información valiosa sobre la dinámica y las propiedades de estas estructuras.`}
                imagen={molecula}
            />
            <InfoQuimica
                titulo={`Datos de dinámica para una gran cantidad de moléculas`}
                texto={`La obtención de datos de dinámica para una gran cantidad de moléculas es una tarea crucial
            en la investigación científica y en aplicaciones prácticas en campos como la química, la biología,
            la física y la ciencia de los materiales.`}
                imagen={dinmolecula}
            />

            <h1 className=" text-white text-center font-bold text-3xl mt-10">Representación orbital molecular</h1>
            <div className="justify-center items-center flex p-10">
                <Lottie
                    animationData={orbital}
                    className="h-[300px] w-[300px]"
                />
            </div>

        </>

    );
}
