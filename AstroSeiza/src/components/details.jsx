import React from "react";

function DetSumm({tittle, info, subtittle, src}) {
    return (
        <>
                    <details className="bg-transparent w-72 h-auto rounded-[10px_10px_10px_10px] border-2 border-white cursor-pointer mt-1">
                        <summary className="ml-5 my-1 text-left font-mediumml-5 font-medium text-white">{tittle}</summary>
                        <p className="text-center text-white my-3">{subtittle}</p>
                        <p className="ml-5 mt-1 text-left text-white my-3 font-thin">{info}</p>
                        <img className="justify-center flex content-center" src={src}/>
                    </details>
        </>
    )
}

export default DetSumm;