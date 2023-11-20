const express = require("express");
const cors = require('cors')
const app = express();
//
const quimicApi = require("./routes/quimicApi.routes");
const categApi = require("./routes/categApi.routes")
//midlware
app.use(cors())
app.use(express.json());
//ruta principal de la api
app.get("/", (req, res) => {
  res.send("Api de quimica, hola!");
});
//routas de api
app.use('/quimicApi', quimicApi);
app.use('/categApi', categApi);

app.listen(3002, () => {
  console.log("Servidor en el puerto 3002");
});
