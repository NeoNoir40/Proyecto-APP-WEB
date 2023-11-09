const pruebaMoonApi = (req, res) => {
  res.send("Hola Moon Api");
};
const CuartoMenguante = (req, res) => {
  res.send(fasesDeLaLuna);
};

//fases de luna de luna en objetos

const fasesDeLaLuna = [
  {
    id: 1,
    nombre: "Luna nueva",
    emoji: "🌑",
    img: "https://th.bing.com/th/id/OIG.W_7hjnJmr3eNgtAbrj6z?pid=ImgGn",
    text: "En esta etapa el satélite natural de la Tierra está muy oscuro y es difícil vislumbrarlo, porque prácticamente toda la superficie que se ve desde el planeta está en las sombras, pero iluminada por el Sol del otro lado que no es visible para los humanos. Entre esta fase y la Luna llena, el satélite recorre 180° de su órbita, por lo que en esta fase recorre entre 0 y 45°. La parte visible de la Luna es de 0-2% y es igual en ambos hemisferios.",
  },
  {
    id: 2,
    nombre: "Luna Creciente",
    emoji: "🌒",
    img: "https://th.bing.com/th/id/OIG.tPMBpkUHdDsUHavea1ja?pid=ImgGn",
    text: "La Luna comienza a vislumbrarse 3 o 4 días después de la Luna nueva. En el Hemisferio Norte es visible del lado derecho y del lado izquierdo en el Hemisferio Sur. Puede observarse tras la puesta del Sol. Durante esta fase, la Luna recorre entre 45 y 90° de su órbita. La parte visible de la Luna es entre 3 y 34% durante esta fase.",
  },
  {
    id: 3,
    nombre: "Cuarto Creciente",
    emoji: "🌓",
    img: "https://th.bing.com/th/id/OIG.9qHiczgs2kPXM9kVqQTW?pid=ImgGn",
    text: "Durante esta fase está iluminada la mitad del disco lunar; el lado derecho en el Hemisferio Norte y el lado izquierdo en el Hemisferio Sur. Es observable desde el mediodía hasta la medianoche, y ya durante la puesta del Sol se ve alta en el cielo. Durante el cuarto creciente, la Luna recorre entre 90 y 135° de su órbita. La parte visible de la Luna es entre 35%-65% o sea, en algún momento se ve media Luna iluminada durante esta fase.",
  },
  {
    id: 4,
    nombre: "Gibosa Creciente",
    emoji: "🌔",
    img: "https://th.bing.com/th/id/OIG..z5gUurSp0viCQfIl1iD?pid=ImgGn",
    text: "A veces, también recibe el nombre de gibosa creciente. La superficie iluminada es mayor de la mitad; en el Hemisferio Norte se mira una curva en el lado izquierdo y en el Hemisferio Norte la curva se vislumbra en el lado derecho. Se pone antes del amanecer y alcanza su altura máxima en el cielo al anochecer. La parte visible de la Luna es entre 66%-96%",
  },
  {
    id: 5,
    nombre: "Luna Llena",
    emoji: "🌕",
    img: "https://th.bing.com/th/id/OIG.kN6ghiZweeG2k86J9_RV?pid=ImgGn",
    text: "El disco lunar está completamente iluminado en la cara que muestra a la Tierra, pues esta, el Sol y la Luna están alineados de forma casi recta, con la Tierra en el centro. Puede verse desde la puesta del Sol hasta el amanecer y a la medianoche alcanza su máxima altura en el cielo. En este momento está en una posición completamente opuesta, 180° de su lugar inicial en la Luna nueva. O lo que es lo mismo, el ángulo entre la Luna, el Sol y la Tierra es de 180°. En esta fase del 97 al 100% de la Luna es visibl",
  },
  {
    id: 6,
    nombre: "Gibosa Menguante",
    emoji: "🌖",
    img: "https://th.bing.com/th/id/OIG.PlCggGbBoPRldZPDFX2I?pid=ImgGn",
    text: "La superficie iluminada comienza a mermar y por eso se observa una curva en el lado izquierdo si se está en el Hemisferio Norte, y en el lado derecho si se ve en el Hemisferio Sur. El área brillante está un 51-99 por ciento iluminada por la luz solar. Sale después de la puesta del Sol y se ve más alta a la medianoche. La parte visible de la Luna es nuevamente 96%-66% solamente que su progresión es descendente.",
  },
  {
    id: 7,
    nombre: "Cuarto Menguante",
    emoji: "🌗",
    img: "https://th.bing.com/th/id/OIG.HAntRMXAZ9H_scOGvWBR?pid=ImgGn",
    text: "Es la fase contraria al cuarto creciente. Se ve iluminada solo la mitad de la Luna; el lado izquierdo en el Hemisferio Norte y el derecho en el Hemisferio Sur. Sale a la medianoche y se observa más alta al amanecer. La parte visible de la Luna es 65%-35%.",
  },
  {
    id: 8,
    nombre: "Luna Meguante",
    emoji: "🌘",
    img: "https://th.bing.com/th/id/OIG.pI.JkNoUHSMwpLXnEQnL?pid=ImgGn",
    text: "Fase también conocida como creciente menguante y Luna vieja. A estas alturas, solo un delgado segmento de la superficie es visible. En el Hemisferio Norte es el izquierdo, y el derecho en el Hemisferio contrario. Sale después de la medianoche, por lo que es más notoria al final de la madrugada y durante la mañana. La parte visible de la Luna es 34%-3%. Después de la Luna menguante, un ciclo lunar de fases ha sido completado y comienza la Luna nueva. Al intervalo de 29.530589 días terrestres en promedio que transcurre entre una Luna nueva y otra, se llama mes sinódico.",
  },
];

module.exports = {
  pruebaMoonApi,
  CuartoMenguante,
};
