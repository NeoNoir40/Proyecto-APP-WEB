import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function MoonCarousel() {
  const [curr, setCurrent] = useState(0);
  const [moon, setMoon] = useState([]);

  useEffect(() => {
    fetchMoonPhase();
  }, []);

  const fetchMoonPhase = async () => {
    const response = await axios.get("http://localhost:3001/moonPhase/1");
    setMoon(response.data);
  };

  const prev = () => setCurrent(curr === 0 ? moon.length - 1 : curr - 1);
  const next = () => setCurrent(curr === moon.length - 1 ? 0 : curr + 1);

  const carouselWidth = 400; // Width of each image in the carousel

  return (
    <div className="overflow-hidden relative w-[400px] mx-auto">
      <div className="flex transition-transform ease-out duration-500"
           style={{ width: `${moon.length * carouselWidth}px`, transform: `translateX(-${curr * carouselWidth}px)` }}>
        {moon.map((item, index) => (
          <div key={index} className="flex-none" style={{ width: `${carouselWidth}px` }}>
            <p className="text-white text-center">{item.nombre}</p>
            <img
              className="object-cover"
              src={item.img}
              alt={item.nombre}
              style={{ width: `${carouselWidth}px`, height: '400px' }}
            />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow text-gray-800 hover:bg-gray-100 z-10"
      >
        <ChevronLeft size={50} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow text-gray-800 hover:bg-gray-100 z-10"
      >
        <ChevronRight size={50} />
      </button>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {moon.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "bg-opacity-100" : "bg-opacity-50"}`}
              onClick={() => setCurrent(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
