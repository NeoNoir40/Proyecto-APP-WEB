const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require('multer');
const fs = require('node:fs');
const path = require('path');

const app = express();

app.use(morgan("dev"));
const db = require("./db");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/usuario.routes");
const adminRoutes = require('./routes/admin.routes')
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, './dbimagenes')));
app.get("/", (req, res) => {
  res.send("backend de usarios");
});

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);


// const upload = multer({ dest: 'uploads/' })

// app.post('/images/upload', upload.single('imagenPerfil'), (req, res) => {
//   console.log(req.file)
//   saveImage(req.file)
//   res.send('Imagen subida')
// })

// function saveImage(file){
//   const newPath = `./uploads/${file.originalname}`;
//   fs.renameSync(file.path, newPath);
//   return newPath;
// }







const diskstorage = multer.diskStorage({
  destination: path.join(__dirname, '/imagenes'),
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-userimagen-' + file.originalname)
  }
});


const fileUpload = multer({
  storage: diskstorage
}).single('image');



// app.post('/images/upload', fileUpload, (req, res) => {

//   const name = req.file.originalname
//   const type = req.file.mimetype
//   const data = fs.readFileSync(path.join(__dirname, '/imagenes', req.file.filename))

//   db.query('INSERT INTO fotos set ? ', [{type,name,data}], (err, rows) => {
//     if (err) console.log(err)

//     res.send('Imagen subida')

//   })

//   console.log(req.file);
//   res.send('Imagen subida')

// })



app.post('/images/upload/:id', fileUpload, async (req, res) => {
  try {
    const usuario_id = req.params.id;
    const { originalname, mimetype, filename } = req.file;
    const filePath = path.join(__dirname, '/imagenes', filename);
    const data = fs.readFileSync(filePath);

    // Verificar si ya existe una foto para este usuario
    const checkQuery = 'SELECT COUNT(*) AS count FROM fotos WHERE usuario_id = ?';
    const [countResult] = await db.promise().query(checkQuery, [usuario_id]);

    if (countResult[0].count > 0) {
      // El usuario ya tiene una foto, manejar el error
      console.error('Ya existe una foto para este usuario');
      res.status(400).send('Ya existe una foto para este usuario');
      return;
    }

    // Insertar la nueva foto
    const insertQuery = 'INSERT INTO fotos SET ?';
    await db.promise().query(insertQuery, { type: mimetype, name: originalname, data, usuario_id });

    console.log('Foto insertada correctamente');
    res.send('Imagen subida');

    // Elimina el archivo después de insertar la foto en la base de datos
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/images/:id', (req, res) => {
  const id = req.params.id;

  db.query('SELECT * FROM fotos WHERE usuario_id = ?', [id], (err, rows) => {
    
      if(err) return res.status(500).send('Error interno del servidor');

      if(rows.length === 0) return res.status(404).send('No se encontró la foto');

      const img = rows[0]; // Tomar solo la primera imagen (puedes ajustar la lógica según tus necesidades)

      fs.writeFileSync(path.join(__dirname, './dbimagenes', img.name), img.data);

      res.json({ image: img.name }); // Devolver solo el nombre de la imagen

  });
});


app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

