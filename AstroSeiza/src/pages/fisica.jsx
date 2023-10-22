import Lottie from "lottie-react";
import fis from '../assets/lottieIcons/animation_lntab4at.json';
import sec from '../assets/lottieIcons/icons8-casa.json'
import thre from '../assets/lottieIcons/clima.json'
import img from '../assets/img/arrow.png'
import newton from '../assets/img/Isaac-Newton.png'
import ohm from '../assets/img/georg-ohm.png'
import tesla from '../assets/img/nikolatesla.png'

export default function Physical() {
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
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600">
                    <p className="ml-5 mt-1 text-left font-medium">Clima hoy</p>
                </div>
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600 my-1">
                    <p className="ml-5 mt-1 text-left font-medium">Incendios Forestales</p>
                </div>
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600 my-0">
                    <p className="ml-5 mt-1 text-left font-medium">Ciudades Vecinas</p>
                </div>
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600 my-1">
                    <p className="ml-5 mt-1 text-left font-medium">Ciclones</p>
                </div>
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600 my-0">
                    <p className="ml-5 mt-1 text-left font-medium">Ciclones del Año</p>
                </div>
                <div className=" bg-yellow-200 w-72 h-10 rounded-[30px_30px_30px_30px] border-4 border-yellow-600 my-1">
                    <p className="ml-5 mt-1 text-left font-medium">Por Localidad</p>
                </div>
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
            </div>
            <div className="my-5">
                <h2 className="text-white font-semibold text-2xl mx-56 mt-5 uppercase">¿Quién es..?</h2>
                <div className="text-white items-center justify-center flex flex-row">
                    <h3 className="font-medium mb-32 text-left">ISAAC NEWTON</h3>
                    <p className="mt-7">Conocedor de los estudios sobre el movimiento de Galileo y de las leyes de
                        <br />Kepler sobre las órbitas de los planetas, Newton estableció las leyes
                        <br />fundamentales de la dinámica (ley de inercia, proporcionalidad de fuerza y
                        <br />aceleración y principio de acción y reacción) y dedujo de ellas la ley de
                        <br />gravitación universal.</p>
                    <img className="w-44 h-44 object-contain" src={tesla} alt="isacc newton" />
                </div>
            </div>
            <div className="mt-5">
                <h2 className="text-white font-semibold text-2xl mx-56 mt-5 uppercase">¿Quién es..?</h2>
                <div className="text-white items-center justify-center flex flex-row">
                    <h3 className="font-medium mb-32 text-left">ISAAC NEWTON</h3>
                    <p className="mt-7">Conocedor de los estudios sobre el movimiento de Galileo y de las leyes de
                        <br />Kepler sobre las órbitas de los planetas, Newton estableció las leyes
                        <br />fundamentales de la dinámica (ley de inercia, proporcionalidad de fuerza y
                        <br />aceleración y principio de acción y reacción) y dedujo de ellas la ley de
                        <br />gravitación universal.</p>
                    <img className="w-44 h-44 object-contain" src={ohm} alt="isacc newton" />
                </div>
            </div>
        </>
    );
}
