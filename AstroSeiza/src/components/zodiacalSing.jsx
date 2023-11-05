import axios from "axios";
import { useState } from "react";
import Lottie from "lottie-react";
import example from "../assets/ZodiacalSing/Scorpio.json";
import Acuario from "../assets/ZodiacalSing/Aquarium.json";
import Aries from "../assets/ZodiacalSing/Aries.json";
import Cáncer from "../assets/ZodiacalSing/Cancer.json";
import Capricornio from "../assets/ZodiacalSing/Capricorn.json";
import Géminis from "../assets/ZodiacalSing/Gemini.json";
import Leo from "../assets/ZodiacalSing/Leo.json";
import Libra from "../assets/ZodiacalSing/Libra.json";
import Piscis from "../assets/ZodiacalSing/Picis.json";
import Sagitario from "../assets/ZodiacalSing/Sagitarius.json";
import Escorpio from "../assets/ZodiacalSing/Scorpio.json";
import Tauro from "../assets/ZodiacalSing/Taurus.json";
import Virgo from "../assets/ZodiacalSing/Virgo.json";

const zodiacAnimations = {
  Capricornio,
  Acuario,
  Piscis,
  Aries,
  Tauro,
  Géminis,
  Cáncer,
  Leo,
  Virgo,
  Libra,
  Escorpio,
  Sagitario,
};

export default function ZodicalSing() {
  const [birthdate, setBirthdate] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  const fetchZodiacalSign = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/zodiaco", {
        birthdate,
      });
      const sign = response.data.sign
      setZodiacSign(sign);
      setAnimationData(zodiacAnimations[sign]);
    } catch (error) {
      console.error("Error calculando el signo del zodiaco", error);
      setError("Error al conseguir el signo del Zodiaco");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchZodiacalSign();
  };

  return (
    <div className="flex flex-col w-auto justify-center mt-[50px]">
      <div className="grid zodiacalBG p-10 m-auto">
        <div className="text-white text-center text-[35px]">
          <h1>Calcula tu signo del zodiaco</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 items-center justify-center"
        >
          <label className="text-white text-center text-[20px]">
            Ingrese su fecha de nacimiento DD-MM-AAAA
          </label>
          <input
            className="rounded-md p-2 text-center"
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-white w-20 h-10 rounded-md hover:bg-transparent"
            >
              Calcular
            </button>
          </div>
        </form>
        {loading && <p>Cargando...</p>}
        {!loading && error && <p>Error: {error}</p>}
        {!loading && zodiacSign && (
          <>
            <p className="mt-10 text-white text-center">
              Tu signo del zodiaco: {zodiacSign}
            </p>
            <div>
              {animationData && (
                <Lottie animationData={animationData} className="h-[250px]" />
              )}
            </div>
          </>
        )}
      </div>
     
    </div>
  );
}
