import React from "react";

function Cuadro({ tittle, subtittle, info }) {
    return (
        <div className="border-2 my-4 rounded-[10px_10px_10px_10px] p-5 w-72 h-auto text-white">
            <h1 className="mb-3 font-bold text-2xl">{tittle}</h1>
            <h2 className="mb-2 font-semibold text-lg">{subtittle}</h2>
            <p className=" font-serif">{info}</p>
        </div>
    )
}

export default Cuadro;