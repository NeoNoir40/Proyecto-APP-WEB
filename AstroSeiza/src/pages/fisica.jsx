import Lottie from "lottie-react";
import fis from '../assets/lottieIcons/animation_lntab4at.json';
import sec from '../assets/lottieIcons/icons8-casa.json'
import thre from '../assets/lottieIcons/clima.json'
import img from '../assets/img/arrow.png'
import newton from '../assets/img/Isaac-Newton.png'
import ohm from '../assets/img/georg-ohm.png'
import tesla from '../assets/img/nikolatesla.png'
import DetSumm from "../components/details";
import { useEffect, useState } from "react";
import axios from 'axios';
import { verClima } from "../components/apiclima";
import DatosPhy from "../components/physics";
import leyohm from '../assets/img/leyohm.png'
import Paragraph from "../components/expressions";

export default function Physical() {

    const [clima, setClima] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const [formula1, setFormula1] = useState([]);

    const [earthquake, setEarthquake] = useState([]);

    const [formula2, setFormula2] = useState([]);

    const [formula3, setFormula3] = useState([]);
    
    const [formula4, setFormula4] = useState([]);

    const [formula5, setFormula5] = useState([]);

    const [formula6, setFormula6] = useState([]);

    const [formula7, setFormula7] = useState([]);
    
    const [formula8, setFormula8] = useState([]);

    const [formula9, setFormula9] = useState([]);

    const [formula10, setFormula10] = useState([]);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/simplify/2%5E2+2(2)';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                console.log("🚀 ~ formula 1", response)
                setFormula1(data);
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula', error);
            });
    }, []);
    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/cos/pi';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                console.log("🚀 ~ formula 2", response)
                setFormula2(data);
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula', error);
            });
    }, []);


    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/area/2:4lx%5E3';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula3(data);
                console.log("🚀 ~ formula3", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula3', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/zeroes/x%5E2+2x';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula4(data);
                console.log("🚀 ~ formula4", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula4', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/tan/0';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula5(data);
                console.log("🚀 ~ formula5", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula5', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/integrate/x%5E2+2x';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula6(data);
                console.log("🚀 ~ formula6", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula6', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/arcsin/0';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula7(data);
                console.log("🚀 ~ formula7", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula7', error);
            });
    }, []);

    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/abs/-1';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula8(data);
                console.log("🚀 ~ formula8", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula8', error);
            });
    }, []);
    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/arctan/0';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula9(data);
                console.log("🚀 ~ formula9", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula9', error);
            });
    }, []);
    useEffect(() => {
        const apiUrl = 'https://newton.vercel.app/api/v2/log/2l8';
        axios.get(apiUrl)
            .then(response => {
                const { data } = response;
                setFormula10(data);
                console.log("🚀 ~ formula10", response)
            })
            .catch(error => {
                console.error('No se obtuvo la fórmula10', error);
            });
    }, []);

    useEffect(() => {
        const apiURL = 'https://6547df5a902874dff3acd475.mockapi.io/physic/earthquakes';
        const fetchEarthquake = async () => {
            try {
                const response = await axios.get(apiURL);
                setEarthquake(response.data);
                console.log("🚀 ~ file: fisica.jsx:44 ~ fetchEarthquake ~ data:", response)
            } catch (error) {
                console.error('No hay datos' + error);
            }
        }
        fetchEarthquake();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const data = await verClima(city);
            setClima(data);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="text-white p-12 flex flex-row items-center justify-center">
                <Lottie
                    animationData={fis}
                    className="h-[180px] w-[180px] mr-4"
                />
                <div className=" mr-14 h-auto">
                    <h1 className="h-14 font-bold text-3xl">FÍSICA</h1>
                    <p className="text-left text-2xl">La Física es la ciencia natural que estudia,
                        <br />mediante leyes fundamentales, la energía, la materia, el tiempo y el espacio,
                        <br />es decir, el universo mismo.</p>
                </div>
            </div>
            <div className="text-white flex flex-row items-center justify-center ml-48">
                <div className=" mr-14 h-auto">
                    <h1 className="h-9 text-xl font-bold text-end">TERREMOTOS</h1>
                    <p className="text-end">Un terremoto es el movimiento brusco de la Tierra (con mayúsculas, ya
                        <br />que nos referimos al planeta), causado por la brusca liberación de
                        <br /> energía acumulada durante un largo tiempo.</p>
                </div>
                <Lottie
                    animationData={sec}
                    className="h-[180px] w-[180px] mr-4"
                />
            </div>
            <div className="text-white flex flex-col justify-center items-center my-3">
                <h1 className="uppercase text-xl font-semibold my-4">Terremotos más terroríficos</h1>
                <table>
                    <thead>
                        <tr>
                            <th className="w-44">País</th>
                            <th className="w-44">Nombre del País</th>
                            <th className="w-44">Ciudad</th>
                            <th className="w-44">Magnitud</th>
                            <th className="w-44">Fecha</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {earthquake.map(terremoto => (
                            <tr key={terremoto.id} className="text-center border-y-2">
                                <td><img src={terremoto.img} alt="img" className=" w-[45px] h-[45px] mx-auto my-auto" /></td>
                                <td>{terremoto.country}</td>
                                <td>{terremoto.city}</td>
                                <td>{terremoto.magnitude}</td>
                                <td>{terremoto.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-white flex flex-row items-center justify-center mr-48">
                <Lottie
                    animationData={thre}
                    className="h-[180px] w-[180px] mr-4"
                />
                <div className=" mr-14 h-auto">
                    <h1 className="h-9 text-xl font-bold text-start">CLIMA</h1>
                    <p className="text-start">Es el estado en que se encuentra la atmósfera en ese momento
                        <br />en cortos períodos, generalmente horas o pocos días. Si se asoma a la
                        <br />ventana, se podrá observar cómo está el tiempo atmosférico.</p>
                    <p>Consultar clima: </p>
                </div>
            </div>
            <div className=" flex justify-center items-center h-auto flex-col">
                <details tails className=" bg-transparent w-72 h-auto rounded-[10px_10px_10px_10px] border-2 border-white cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium text-white">Consultar Clima</summary>
                    <div className="p-4 h-auto text-center object-center justify-center">
                        <div className="card">
                            <h2 className="font-bold text-white"><i className="fa fa-cloud"></i>Clima de Hoy</h2>
                            <div className="search-form">
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingrese una ciudad" className="rounded-[5px_5px_5px_5px] h-8 shadow-md border-whithe bg-transparent border-2 text-white" />
                                <button type="button" className=" w-14 h-8 border-2 rounded-[5px_5px_5px_5px] ml-2 border-white bg-transparent text-white" onClick={() => getData()}>Buscar</button>
                            </div>
                        </div>
                        {clima !== null ? (
                            <div className="main-container">
                                <div className="location">
                                    <h3 className="text-white"><i className="fa fa-street-view"></i>{clima.name} | {clima.sys.country}</h3>
                                </div>
                                <div className="weather-icon flex justify-center content-center">
                                    <img src={`http://openweathermap.org/img/w/${clima.weather[0].icon}.png`} alt="imgicon" />
                                </div>
                                <h3 className="uppercase text-white">{clima.weather[0].description}</h3>
                                <div className="temprature text-white">
                                    <h1>{parseFloat(clima.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                                </div>
                                <div className="temprature-range text-white">
                                    <h6>Min: {parseFloat(clima.main.temp_min - 273.15).toFixed(1)}&deg;C
                                        || Máx: {parseFloat(clima.main.temp_max - 273.15).toFixed(1)}&deg;C
                                        Húmedad: {clima.main.humidity}%</h6>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </details>
            </div>
            <div>
                <h2 className="text-white font-semibold text-2xl ml-72 mt-8 uppercase">¿Quién es..?</h2>
                <DatosPhy
                    src={newton}
                    name={'Isaac Newton'}
                    info={'Conocedor de los estudios sobre el movimiento de Galileo y de las leyes de Kepler sobre las órbitas de los planetas, Newton estableció las leyes fundamentales de la dinámica (ley de inercia, proporcionalidad de fuerza y aceleración y principio de acción y reacción) y dedujo de ellas la ley de gravitación universal.'}
                />
                <div className="flex flex-col justify-center items-center">
                    <h3 className=" text-xl leading-2 tracking-tight text-white font-semibold">LEYES:</h3>
                    <DetSumm
                        tittle={'1ra. Ley'}
                        subtittle={'Ley de la Inercia'}
                        info={'"Todo cuerpo preserva su estado de reposo o movimiento uniforme y rectilíneo a no ser que sea obligado a cambiar su estado por fuerzas impresas sobre él."'}
                    />
                    <DetSumm
                        tittle={'2da. Ley'}
                        subtittle={'Ley Fundamental de la Dinámica'}
                        info={'"Cuando una fuerza actúa sobre un objeto este se pone en movimiento, acelera, desacelera o varía su trayectoria."'}
                    />
                    <DetSumm
                        tittle={'3ra. Ley'}
                        subtittle={'Ley de acción-reacción'}
                        info={'"Con toda acción ocurre siempre una reacción igual y contraria: o sea, las acciones mutuas de dos cuerpos siempre son iguales y dirigidas en direcciones opuestas."'}
                    />
                    <div className="text-white my-3">
                        <h2 className="uppercase font-semibold text-lg my-3">expresiones de newton</h2>
                        <div className="flex flex-row gap-4">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="w-44 border-y-2">Expresión</th>
                                        <th className="w-44 border-y-2">Operación</th>
                                        <th className="w-44 border-y-2">Resultado</th>
                                    </tr>
                                </thead>
                                <tbody className=" text-sm font-mono">
                                    {formula1 && formula2 && (
                                        <tr className=" font-serif">
                                            <th className=" font-sans">{formula1.expression} <span className="flex flex-row ml-20 mr-20">{formula2.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula3.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula4.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula5.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula6.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula7.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula8.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula9.expression}</span> <span className="flex flex-row ml-20 mr-20">{formula10.expression}</span></th>
                                            <th className="font-sans">{formula1.operation} <span className="flex flex-row ml-20 mr-20">{formula2.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula3.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula4.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula5.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula6.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula7.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula8.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula9.operation}</span> <span className="flex flex-row ml-20 mr-20">{formula10.operation}</span></th>
                                            <th className="font-sans">{formula1.result} <span className="flex flex-row ml-20 mr-20">{formula2.result}</span> <span className="flex flex-row ml-20 mr-16">{formula3.result}</span> <span className="flex flex-row ml-16 mr-16">{formula4.result}</span> <span className="flex flex-row ml-20 mr-16">{formula5.result}</span> <span className="flex flex-row ml-20 mr-16">{formula6.result}</span> <span className="flex flex-row ml-20 mr-16">{formula7.result}</span> <span className="flex flex-row ml-20 mr-16">{formula8.result}</span> <span className="flex flex-row ml-20 mr-16">{formula9.result}</span> <span className="flex flex-row ml-20 mr-16">{formula10.result}</span></th>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-white font-semibold text-2xl ml-72 mt-8 uppercase">¿Quién es..?</h2>
                <DatosPhy
                    name={'nikola tesla'}
                    info={'Nikola Tesla fue un físico, matemático, ingeniero eléctrico y mecánico, y célebre inventor, un verdadero visionario muy por delante de sus contemporáneos en el campo del desarrollo científico, que revolucionó la teoría eléctrica desarrollando las bases para la, generación de corriente alterna (AC).'}
                    src={tesla}
                />
                <div className="flex flex-col justify-center items-center">
                    <h3 className=" text-xl leading-2 tracking-tight text-white font-semibold">INVENTOS:</h3>
                    <DetSumm
                        info={'En 1888 el serbio-croata inventó el primer motor de corriente alterna y con él el sistema polifásico de transmisión de energía. El motor eléctrico de corriente alterna es simplemente un tipo de motor eléctrico que es más eficiente que la corriente continua.'}
                        tittle={'Motor Eléctrico'}
                    />
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-white font-semibold text-2xl ml-72 mt-8 uppercase">¿Quién es..?</h2>
                <DatosPhy
                    info={'Georg Simon Ohm fue un físico y matemático alemán conocido principalmente por su investigación sobre las corrientes eléctricas., formulando la ley que lleva su nombre. También se interesó por la acústica, la polarización de las pilas y las interferencias luminosas.'}
                    src={ohm}
                    name={'george simon ohm'}
                />
            </div>
            <div className="flex flex-col justify-center items-center my-3">
                <h3 className=" text-xl leading-2 tracking-tight text-white font-semibold uppercase">leyes:</h3>
                <DetSumm
                    info={'Se usa para determinar la relación entre la diferencia de potencial (V), la corriente eléctrica (I) y la resistencia eléctrica (R), en un circuito eléctrico. Establece que la intensidad de la corriente eléctrica (I) que circula por un circuito eléctrico es directamente proporcional a la diferencia del potencial (V), que aplicamos entre los extremos del circuito eléctrico y es inversamente proporcional a la resistencia eléctrica (R) del conductor.'}
                    tittle={'Ley de Ohm'}
                    src={leyohm}
                />
            </div>
        </>
    );
}