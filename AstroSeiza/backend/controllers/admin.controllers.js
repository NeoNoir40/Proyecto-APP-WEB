const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenSecret = "SECRET";

const obtenerAdmin = (req, res) => {
  db.query("SELECT * FROM Admin", (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error al obtener los Admin" });
    } else {
      res.json(results);
    }
  });
};

const obtenerAdminId = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM Admin WHERE id_admin = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error al obtener el admin" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "admin no encontrado" });
    } else {
      res.json(results[0]);
    }
  });
};

const crearAdmin = (req, res) => {
  const { nombre,  password, email, foto } = req.body;

  // Primero, verifica si ya existe un admin con ese email
  db.query(
    "SELECT * FROM Admin WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "Error al verificar el admin" });
      }

      if (results.length > 0) {
        // Si ya existe un admin con ese email, devuelve un error
        return res
          .status(409)
          .json(["El correo electrónico ya está registrado"]);
      } else {
        // Si no, encripta la contraseña y crea el admin
        const encryptedPassword = bcrypt.hashSync(password, 10);

        db.query(
          "INSERT INTO Admin (nombre, password, email, foto) VALUES (?, ? ,? , ?)",
          [nombre, encryptedPassword, email, foto],
          (error, results) => {
            if (error) {
              return res
                .status(500)
                .json({ message: "Error al crear el admin" });
            } else {
              return res
                .status(201)
                .json({ message: "admin creado correctamente" });
            }
          }
        );
      }
    }
  );
};

const editarAdmin = (req, res) => {
  const id = req.params.id;
  const { nombre,  password, email, foto } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "UPDATE Admin SET nombre = ?, password = ?, email = ? , foto = ? WHERE id_admin = ?",
    [nombre,  encryptedPassword, email, foto, id],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "Error al actualizar el usaurio" });
      } else {
        res.status(201).json({ message: "admin actualizado correctamente" });
      }
    }
  );
};

const eliminarAdmin = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM Admin WHERE id_admin = ? ", [id], (error, resultado) => {
    if (error) {
      res.status(500).json({ message: "Error al eliminar el admin" });
    } else {
      res.status(200).json({ message: "admin eliminado correctamente" });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM Admin WHERE email = ?",
    [email],
    (error, resultado) => {
      if (error) {
        res.status(500).json({ message: "Error al obtener el admin" });
      } else if (resultado.length === 0) {
        res.status(400).json({ message: "admin no encontrado" });
      } else {
        const response = resultado[0];

        const contraseñaValida = bcrypt.compare(password, response.password);

       
        
        if (contraseñaValida) {

            const token = jwt.sign({ id: response.id_admin }, tokenSecret, {
                expiresIn: "1d",
              });
      
              res.cookie("token", token);

              res.cookie("token", token);
              res.json({ message: "Login exitoso Admin" , token: token  });
        } else {
          console.log(contraseñaValida);
          res.status(400).json({ message: "Contraseña incorrecta" });
        }
      }
    }
  );
};


const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.json({ authenticated: false });
  
    jwt.verify(token, tokenSecret, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const id = user.id
      console.log("ID del admin:", id);
      console.log("token del:", token);
  
      db.query('SELECT * FROM Admin WHERE id_admin = ?', [id], async (error, results) => {
        if (error) {
          res.status(500).json({ error: 'Ocurrió un error al verificar el token' });
        } else if (results.length === 0) {
          res.sendStatus(401);
        } else {
          const userFound = results[0];
  
          return res.json({
            id: userFound.id,
            nombre: userFound.nombre,
            email: userFound.email,
            // Otros datos del admin que se deseen incluir en la respuesta
          });
        }
      });
    });
  };

const logout = (req, res) => {
  // Eliminar la cookie que almacena el token
  res.clearCookie("token");

  // Responder con éxito al cliente
  res.json({ mensaje: "Logout exitoso" });
};

const profile = (req, res) => {
  const id = req.user.id;

  db.query(
    "SELECT id_admin  , nombre, email, password,  foto FROM admin WHERE id_admin = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al obtener el admin" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "El admin no fue encontrado" });
        console.log(error);
      } else {
        const admin = resultados[0];
        res.json({
          id: admin.id,
          nombre: admin.nombre,
          email: admin.email,
          foto: admin.foto,
        });
      }
    }
  );
};

const AuthReq = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(401)
      .json({ message: "Sin token, autorizacion denegada" });

  jwt.verify(token, tokenSecret, (err, user) => {
    if (err) return res.status(403).json({ message: "Token no valido" });

    // El objeto decodificado del token se almacena en la variable 'user'
    req.user = user;

    next();
  });
};

module.exports = {
  obtenerAdmin,
  obtenerAdminId,
  crearAdmin,
  editarAdmin,
  eliminarAdmin,
  login,
  profile,
  logout,
  AuthReq,
  verifyToken,
};
