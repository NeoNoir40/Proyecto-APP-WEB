const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
const db = require("./db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/usuario.routes");
const adminRoutes = require('./routes/admin.routes')
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173" ,
    credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend de usarios");
});

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
