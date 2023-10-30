import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";

export default function PinterestApi() {
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

  const fetchNasaApi = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${key}`
    );
    setNasa(response.data);
    console.log("Nasa Api");
    console.log(response);
  };
  return (
    <div className="flex flex-colum justify-center m-auto p-[100px]">
      <div className=" h-[400px] w-[1100px] text-white">
        <h1 className="text-center font-bold text-[20px]">Video de la nasa del dia</h1>
        <div className="mt-10">
          <div className="flex gap-4 m-auto p-2 ">
            {nasa.media_type === "video" ? (
              <div>
                <YouTube videoId={nasa.url.split("/embed/")[1]} opts={opts} />
              </div>
            ) : (
              <div className="flex">
                <img src={nasa.url} alt="imagen de la nasa" className="h-[400px] w-[400px]" />
              </div>
            )}

            <div className="">
              <p>Derechos de autor: {nasa.copyright}</p>
              <p>Fecha: {nasa.date}</p>
              <p>Explicación: {nasa.explanation}</p>
              <p>Titulo: {nasa.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
