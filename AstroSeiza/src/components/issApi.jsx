// src/components/ISSLocationMap.jsx
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ISSLocationMap = () => {
  const [issPosition, setIssPosition] = useState({ lat: 0, lon: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchISSLocation = async () => {
      try {
        const response = await fetch("http://api.open-notify.org/iss-now.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIssPosition({
          lat: parseFloat(data.iss_position.latitude),
          lon: parseFloat(data.iss_position.longitude),
        });
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      fetchISSLocation();
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  const issIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5551/5551492.png", 
    iconSize: [50, 50],
    iconAnchor: [25, 25],
  });

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className="iss-info text-white p-10 ">
        <h1 className="font-bold text-center ">
          Posiciónde la Estación Espacial Internacional (ISS)
        </h1>
        <p>
          La Estación Espacial Internacional representa uno de los logros más
          impresionantes de la cooperación y la ingeniería humana. Situada en la
          órbita terrestre baja, la ISS es un laboratorio científico en
          microgravedad que avanza en nuestro conocimiento del mundo y más allá.
          Astronautas internacionales trabajan incansablemente, realizando
          experimentos que no serían posibles bajo la gravedad de la Tierra.
          Investigaciones en medicina, biología, meteorología y física
          realizadas a bordo han resultado en descubrimientos revolucionarios
          que repercuten en numerosas áreas de la ciencia y la tecnología. La
          ISS también juega un papel crucial en la educación, inspirando a
          generaciones a mirar hacia las estrellas y preguntarse qué más podemos
          lograr. La estación, que se mueve a unos 28,000 kilómetros por hora,
          da una vuelta completa a la Tierra aproximadamente cada 90 minutos.
          Este increíble viaje le permite a la tripulación experimentar un
          amanecer o un atardecer cada 45 minutos, proporcionando perspectivas
          únicas del planeta que compartimos.
        </p>
      </div>
      <MapContainer
        center={[issPosition.lat, issPosition.lon]}
        zoom={5}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[issPosition.lat, issPosition.lon]} icon={issIcon} />
      </MapContainer>
    </>
  );
};

export default ISSLocationMap;
