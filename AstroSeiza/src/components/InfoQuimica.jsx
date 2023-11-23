import React from 'react';

export default function InfoQuimica ({ titulo, texto, imagen }) {
    return (
        <div>
            <h1 className="text-white font-bold text-3xl text-center">{titulo}</h1>
            <div className="flex justify-center items-center mb-10">
                <div className="max-w-[700px] text-center text-white text-xl mx-2">
                    <p>{texto}</p>
                </div>
                <img src={imagen} className="h-[300px] w-[300px]" />
            </div>
        </div>
    );
};
