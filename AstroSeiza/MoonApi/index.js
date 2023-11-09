const express = require("express");
const cors = require('cors')
const app = express();
//
const moonPhase = require("./routes/moonPhase.routes");
const zodiaco = require('./routes/zodiaco.routes')
//midlware
app.use(cors())
app.use(express.json());
//ruta principal de la api
app.get("/", (req, res) => {
  res.send("Hola soy La moon api");
});
//routas de api
app.use('/moonPhase', moonPhase);
app.use('/zodiaco', zodiaco);

app.listen(3001, () => {
  console.log("Servidor en el puerto 3001");
});
