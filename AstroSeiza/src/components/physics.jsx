import React from "react";

function DatosPhy({ src, name, info }) {
    return (
        <div className="flex justify-center items-center">
            <div className=" w-96 h-auto">
                <div className="text-white items-center justify-center flex flex-col">
                    <h3 className="font-medium text-left uppercase my-3 text-xl">{name}</h3>
                    <p className="my-2">{info}</p>
                    <img className="w-44 h-44 object-contain my-4" src={src} alt="isacc newton" />
                </div>
            </div>
        </div>
    )
};

export default DatosPhy;