import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

export default function PinterestApi() {
  const [traduccion, setTraduccion] = useState("");

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const key = "LdwYTnMwZwy50xkMThYpng4Sh7pCdlPJyZZvVJrz";

  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    fetchNasaApi();
  }, []);

  const fetchTranslation = async (textToTranslate) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", "en");
    encodedParams.set("target_language", "es");
    encodedParams.set("text", textToTranslate);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "9298414999msh6647bfad509420bp10413ajsnabde532bfb75",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data.translatedText);
      setTraduccion(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNasaApi = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${key}`
    );
    setNasa(response.data);
    console.log("Nasa Api");
    console.log(response);
    fetchTranslation(response.data.explanation);
  };
  return (
    <div className="flex flex-colum justify-center m-auto p-[100px]">
      <div className=" h-[400px] w-[1100px] text-white">
        <h1 className="text-center font-bold text-[20px]">
          Dato Diario De La Nasa
        </h1>
        <div className="mt-10">
          <div className="flex gap-4 m-auto p-2 ">
            {nasa.media_type === "video" ? (
              <div>
                <YouTube videoId={nasa.url.split("/embed/")[1]} opts={opts} />
              </div>
            ) : (
              <img
                src={nasa.url}
                alt="imagen de la nasa"
                className="h-[450px] w-[450px] "
              />
            )}

            <div className=" my-5">
              <p>Fecha: {nasa.date}</p>
              <p>Explicación: {traduccion || nasa.explanation}</p>
              <p>Titulo: {nasa.title}</p>
              <p>Derechos de autor: {nasa.copyright}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
