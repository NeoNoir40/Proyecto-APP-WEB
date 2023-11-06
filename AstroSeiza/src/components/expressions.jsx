import React from "react";

function Paragraph({expression, operation, result}) {
    return (
        <>
            <p>La expresión: <span className=" font-serif">{expression}</span></p>
            <p>La operación: <span className=" font-serif">{operation}</span></p>
            <p>El resultado: <span className=" font-serif">{result}</span></p>
        </>
    )
}

export default Paragraph;