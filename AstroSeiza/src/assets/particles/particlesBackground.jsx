import React, { useCallback } from "react";
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles'
import bg from './particlesjs-config.json'

function Particlesbg(){

    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

    return (
        <>
        <Particles
        //id=""
        options={bg}
        init={particlesInit}
        />
        </>
    )
}

export default Particlesbg