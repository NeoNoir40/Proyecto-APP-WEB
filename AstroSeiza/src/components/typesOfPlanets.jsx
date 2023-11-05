import Lottie from "lottie-react";
import EarthIcon from "../assets/lottieIcons/Earth.json";
import SunIcon from "../assets/lottieIcons/Sun.json";
import AsteroidIcon from "../assets/lottieIcons/Asteroid.json";
import MoonIcon from "../assets/lottieIcons/MoonIcon.json";
import GalaxyIcon from "../assets/lottieIcons/Galaxyicon.json";
import { createClient } from "pexels";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
export default function TypeOfAstros() {
  const apiKey = "7oRIFLnyrcf8UgLAUi30Z3RW1RNr8XXEdsejMNT87R2tjDkv8MCREbAQ";
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [dataPexels, setDataPexels] = useState([]);
  const [apiFondo, setApiFondo] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const totalPages = 15;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


  const descriptions = {
    planeta: "Los planetas son cuerpos celestes que orbitan alrededor de una estrella, como nuestra Tierra que gira alrededor del Sol. Están compuestos principalmente de roca o gas y su tamaño puede variar enormemente.",
    sun: "El Sol es una estrella de tipo espectral G2V que se encuentra en el centro de nuestro sistema solar. Es la fuente principal de energía lumínica y calor para los planetas que orbitan a su alrededor.",
    meteorite: "Los meteoritos son fragmentos de cometas o asteroides que ingresan a la atmósfera terrestre y sobreviven hasta impactar la superficie. Nos ofrecen pistas únicas sobre la composición del sistema solar primitivo.",
    moon: "La Luna es el único satélite natural de la Tierra y juega un papel crucial en influir en las mareas oceánicas. Su superficie está marcada por cráteres y amplias llanuras llamadas mares lunares.",
    galaxy: "Las galaxias son enormes sistemas que contienen millones o incluso billones de estrellas, junto con gas y polvo, unidos por la gravedad. Nuestra galaxia, la Vía Láctea, es solo una de las muchas que existen en el universo."
  };
  

  useEffect(() => {
    getPexelsApi();
  }, [currentPage, query]);

  const getPexelsApi = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${query}&page=${currentPage}&per_page=${perPage}`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );

    const fotos = response.data.photos;

    setDataPexels(fotos);
    console.log("Datos de la api de pexels");
    console.log(response);
    setIsLoading(false);
  };

  const cambiarFondo = () => {
    setApiFondo(!apiFondo);
  };
  const cambiarQuery = (e) => {
    setQuery(e);
  };

  const handleIconClick = (e) => {
    cambiarFondo();
    cambiarQuery(e);
    setCurrentPage(1);
    setShowImages(true);
    setCurrentDescription(descriptions[e]);

  };
  return (
    <div className="mt-[150px]">
      <div className="flex flex-colum justify-center">
        <div className="grid">
          <div className="">
            <h1 className="text-white font-bold text-[20px] text-center">
              Tipos de Astros
            </h1>
            <p className="text-center text-white text-[20px] p-4">
              Haga click en cualquiera de los siguientes iconos para ver
              imagenes acerca de los siguientes astros:
            </p>
          </div>

          <div className=" ml-auto mr-auto grid">
            <div className="flex flex-row">
              <div className=" ">
                <button onClick={() => handleIconClick("planeta")}>
                  <Lottie
                    animationData={EarthIcon}
                    className="h-[150px] w-[150px]"
                  ></Lottie>
                  <p className="text-white font-bold">Planeta</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => handleIconClick("sun")}>
                  <Lottie
                    animationData={SunIcon}
                    className="h-[150px] w-[150px] "
                  ></Lottie>
                  <p className="text-white font-bold">Sol</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => handleIconClick("meteorite")}>
                  <Lottie
                    animationData={AsteroidIcon}
                    className="h-[150px] w-[150px]"
                  ></Lottie>
                  <p className="text-white font-bold">Asteroide</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => handleIconClick("moon")}>
                  <Lottie
                    animationData={MoonIcon}
                    className="h-[150px] w-[150px]"
                  ></Lottie>
                  <p className="text-white font-bold">Luna</p>
                </button>
              </div>
              <div className="">
                <button onClick={() => handleIconClick("galaxy")}>
                  <Lottie
                    animationData={GalaxyIcon}
                    className="h-[150px] w-[150px]"
                  ></Lottie>
                  <p className="text-white font-bold">Galaxia</p>
                </button>
              </div>
            </div>
          </div>

          {isLoading ? (
            <div> Cargando contenido</div>
          ) : (
            <div>
              {showImages && (
                <>
                <div className=" flex justify-center">
                <p  className="text-white text-center text-[15px] w-[250px] h-[50px] mb-[100px] mt-[30px]">{currentDescription}</p>

                </div>

                  <div className="grid grid-rows-4 w-[100%] grid-flow-col gap-4 mt-10">

                    {dataPexels.map((photos, index) => (
                      <div>
                        <p className="text-white text-[10px]">Autor: {photos.photographer}</p>
                        <img
                          key={index}
                          src={photos.src.medium}
                          alt={photos.alt}
                          loading="lazy"
                          className="h-[350px] w-[600px] "
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex  justify-center items-center gap-4 mt-10">
                    <button
                      className="w-10 h-10 text-white hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl hover:text-gray-400 "
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      {" "}
                      <ArrowLeft size={30} />
                    </button>

                    {pages.map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`bg-white w-10 h-10 hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl ${
                          currentPage === page ? "hover:bg-gray-400" : ""
                        }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      className="w-10 h-10 text-white hover:scale-105 transition-all hover:contrast-125 hover:shadow-2xl hover:text-gray-400"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ArrowRight size={30} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
