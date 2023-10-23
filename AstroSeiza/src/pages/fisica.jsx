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

export default function Physical() {

    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            const data = await verClima(city);
            setWeatherData(data);
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
                <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Consultar Clima</summary>
                    <div className="p-4 h-auto text-center object-center justify-center">
                        <div className="card">
                            <h2 className="font-bold"><i className="fa fa-cloud"></i>Clima de Hoy</h2>
                            <div className="search-form">
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Ingrese una ciudad" className="rounded-[5px_5px_5px_5px] h-8 shadow-md border-yellow-600 border-2" />
                                <button type="button" className="w-15 h-8 border-2 rounded-[5px_5px_5px_5px] ml-2 border-yellow-600 bg-yellow-400" onClick={() => getData()}>Buscar</button>
                            </div>
                        </div>
                        {weatherdata !== null ? (
                            <div className="main-container">
                                <div className="location">
                                    <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
                                </div>
                                <div className="weather-icon flex justify-center content-center">
                                    <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon" />
                                </div>
                                <h3 className="uppercase">{weatherdata.weather[0].description}</h3>
                                <div className="temprature">
                                    <h1>{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}&deg;C</h1>
                                </div>
                                <div className="temprature-range">
                                    <h6>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)}&deg;C
                                        || Máx: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)}&deg;C
                                        Húmedad: {weatherdata.main.humidity}%</h6>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </details>
                {/*<details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Incendios Forestales</summary>
                    <p className="ml-5 mt-1 text-left">Clima hoy</p>
                </details>
                <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Ciudades Vecinas</summary>
                    <p className="ml-5 mt-1 text-left">Clima hoy</p>
                </details>
                <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Ciclones</summary>
                    <p className="ml-5 mt-1 text-left">Clima hoy</p>
                </details>
                <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Ciclones del Año</summary>
                    <p className="ml-5 mt-1 text-left">Clima hoy</p>
                </details>
                <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                    <summary className="ml-5 mt-1 text-left font-medium">Por Localidad</summary>
                    <p className="ml-5 mt-1 text-left">Clima hoy</p>
            </details>*/}
            </div>
            <div>
                <h2 className="text-white font-semibold text-2xl mx-56 mt-5 uppercase">¿Quién es..?</h2>
                <div className="text-white items-center justify-center flex flex-row">
                    <h3 className="font-medium mb-32 text-left">ISAAC NEWTON</h3>
                    <p className="mt-7">Conocedor de los estudios sobre el movimiento de Galileo y de las leyes de
                        <br />Kepler sobre las órbitas de los planetas, Newton estableció las leyes
                        <br />fundamentales de la dinámica (ley de inercia, proporcionalidad de fuerza y
                        <br />aceleración y principio de acción y reacción) y dedujo de ellas la ley de
                        <br />gravitación universal.</p>
                    <img className="w-44 h-44 object-contain" src={newton} alt="isacc newton" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className=" text-xl leading-2 tracking-tight text-white font-semibold">LEYES:</h3>
                    <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                        <summary className="ml-5 mt-1 text-left font-medium">1ra. Ley</summary>
                        <p className="ml-5 mt-1 text-left">Clima hoy</p>
                    </details>
                    <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                        <summary className="ml-5 mt-1 text-left font-medium">2da. Ley</summary>
                        <p className="ml-5 mt-1 text-left">Clima hoy</p>
                    </details>
                    <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                        <summary className="ml-5 mt-1 text-left font-medium">3ra. Ley</summary>
                        <p className="ml-5 mt-1 text-left">Clima hoy</p>
                    </details>
                </div>
            </div>
            <div className="my-5">
                <h2 className="text-white font-semibold text-2xl mx-52 mt-5 uppercase">¿Quién es..?</h2>
                <div className="text-white items-center justify-center flex flex-row">
                    <h3 className="font-medium mb-32 text-left">NIKOLA TESLA</h3>
                    <p className="mt-7">Nikola Tesla fue un físico, matemático, ingeniero eléctrico y mecánico, y célebre
                        <br />inventor, un verdadero visionario muy por delante de sus contemporáneos en el
                        <br />campo del desarrollo científico, que revolucionó la teoría eléctrica desarrollando
                        <br />las bases para la, generación de corriente alterna (AC).</p>
                    <img className="w-44 h-44 object-contain" src={tesla} alt="isacc newton" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className=" text-xl leading-2 tracking-tight text-white font-semibold">INVENTOS:</h3>
                    <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                        <summary className="ml-5 mt-1 text-left font-medium">Motor eléctrico</summary>
                        <p className="ml-5 mt-1 text-left">Clima hoy</p>
                    </details>
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-white font-semibold text-2xl mx-56 mt-5 uppercase">¿Quién es..?</h2>
                <div className="text-white items-center justify-center flex flex-row">
                    <h3 className="font-medium mb-32 text-left">GOERGE SIMON OHM</h3>
                    <p className="mt-7">Georg Simon Ohm fue un físico y matemático alemán conocido principalmente
                        <br />por su investigación sobre las corrientes eléctricas., formulando la ley que lleva
                        <br />su nombre. También se interesó por la acústica, la polarización de las pilas y las
                        <br />interferencias luminosas.</p>
                    <img className="w-44 h-44 object-contain" src={ohm} alt="isacc newton" />
                </div>
            </div>
        </>
    );
}
