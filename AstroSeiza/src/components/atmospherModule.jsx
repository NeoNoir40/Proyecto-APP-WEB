export default function AtmosphereModule() {
  return (
    <div className="flex flex-colum  justify-start bg-black mt-[200px]">
      {/* Modulo de la luna */}
      <div className="bg-purple-400">
        <div className="bg-purple-700">
          <h1>Concentración diaria de dióxido de carbono en la atmósfera.</h1>
        </div>
        <div className="bg-red-500 h-[200px] mt-10 mb-10">
          <h1>Container</h1>
        </div>
        <div className="bg-green-400">
          <p>
            La concentración de CO2 en la atmósfera estaba aumentando y rondaba
            las 414 ppm en septiembre de 2021, pero este número es aproximado y
            puede haber cambiado debido a las emisiones humanas. Este aumento es
            preocupante por su papel en el calentamiento global y el cambio
            climático. Se recomienda consultar fuentes actualizadas para obtener
            la concentración más reciente de CO2 en la atmósfera.
          </p>
        </div>
      </div>
      <div className="flex text-white font-bold">
        <div className="bg-red-900">
          <div className="bg-green-900 p-10">
            <h1>AtmosphereIcon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
