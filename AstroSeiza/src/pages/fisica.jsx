import Lottie from "lottie-react";
import fis from '../assets/lottieIcons/animation_lntab4at.json';
import sec from '../assets/lottieIcons/icons8-casa.json'
import thre from '../assets/lottieIcons/clima.json'

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
                    <br/>en cortos períodos, generalmente horas o pocos días. Si se asoma a la 
                    <br/>ventana, se podrá observar cómo está el tiempo atmosférico.</p>
                </div>
            </div>
        </>
    );
}
