export default function AtmosphereModule() {
  return (
    <div className="flex flex-colum  justify-start bg-black mt-[200px]">
      <div className="flex text-white font-bold">
        {/* Modulo de la luna */}
        <div className="bg-red-900">
          <div className="bg-blue-900">
            <h1>Atmosfera</h1>
          </div>

          <div className="bg-pink-400">
            <p>
              Laika fue el primer ser vivo en orbitar la Tierra. Fue una perra
              enviada al espacio por la Unión Soviética en 1957, pero
              trágicamente no sobrevivió al viaje.
            </p>
          </div>
          <div className="bg-green-900">
            <h1>Moon Icon</h1>
          </div>
        </div>
      </div>
      {/* Modulo de la luna */}
      <div className="bg-purple-400">
        <div className="bg-purple-700">
          <h1>Laika</h1>
        </div>
        <div className="bg-red-500">
          <h1>Container</h1>
        </div>
        <div className="bg-green-400">
          <p>
            Las fases de la luna son diferentes aspectos visibles de la Luna a
            medida que orbita alrededor de la Tierra. Van desde la Luna nueva,
            cuando no se ve, hasta la Luna llena, cuando se ve completamente
            iluminada, pasando por el cuarto creciente y el cuarto menguante.
            Estas fases cambian a lo largo de un ciclo lunar de aproximadamente
            29.5 días. Existen 8 fases de la luna
          </p>
        </div>
      </div>
    </div>
  );
}
