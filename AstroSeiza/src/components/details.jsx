import React from "react";

function DetSumm(tittle, info) {
    return (
        <>
            <details className=" bg-yellow-200 w-72 h-auto rounded-[30px_30px_30px_30px] border-4 border-yellow-600 mt-1 cursor-pointer">
                <summary className="ml-5 mt-1 text-left font-medium">{tittle}</summary>
                <p className="ml-5 mt-1 text-left">{info}</p>
            </details>
        </>
    )
}

export default DetSumm;

