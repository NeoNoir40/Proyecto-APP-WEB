import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function MoonCarousel() {
  const [curr, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((curr) => (curr === 0 ? moon.length - 1 : curr - 1));
  const next = () =>
    setCurrent((curr) => (curr === moon.length - 1 ? 0 : curr + 1));

  const [moon, setMoon] = useState([]);
  useEffect(() => {
    fetchMoonPhase();
  }, []);

  const imageWidth = "400px";
  const imageHeight = "400px";

  const fetchMoonPhase = async () => {
    const response = await axios.get("http://localhost:3001/moonPhase/1");
    setMoon(response.data);
    console.log("Datos de la api");
    console.log(response);
  };
  return (
    <div className="overflow-hidden relative p-2 m-auto">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {moon.map((item) => (
       
            <img
              className={`w-${imageWidth} h-${imageHeight} object-cover p-2 m-auto`}
              key={item.id}
              src={item.img}
              alt=""
            />
        ))}
      </div>
      <div
        className="absolute inset-0 flex items-center
      justify-between p-4"
      >
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={50} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          {" "}
          <ChevronRight size={50} />{" "}
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {moon.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-4" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
    
  );
}
