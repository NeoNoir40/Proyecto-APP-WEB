const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenSecret = "SECRET";

const obtenerUsuarios = (req, res) => {
  db.query("SELECT * FROM usuarios", (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error al obtener los usuarios" });
    } else {
      res.json(results);
    }
  });
};

const obtenerUsuariosId = (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM usuarios WHERE id = ?", [id], (error, results) => {
    if (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.json(results[0]);
    }
  });
};





const crearUsuario = (req, res) => {
  const { nombre, usuario, password, email } = req.body;

  // Primero, verifica si ya existe un usuario con ese email
  db.query(
    "SELECT * FROM usuarios WHERE email = ?",
    [email],
    (error, results) => {
      if (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "Error al verificar el usuario" });
      }

      if (results.length > 0) {
        // Si ya existe un usuario con ese email, devuelve un error
        return res
          .status(409)
          .json(["El correo electrónico ya está registrado"]);
      } else {
        // Si no, encripta la contraseña y crea el usuario
        const encryptedPassword = bcrypt.hashSync(password, 10);

        db.query(
          "INSERT INTO usuarios (nombre, usuario, password, email ) VALUES (?, ? ,? ,? )",
          [nombre, usuario, encryptedPassword, email],
          (error, results) => {
            if (error) {
              return res
                .status(500)
                .json({ message: "Error al crear el usuario" });
            } else {
              console.log(encryptedPassword);

              return res
                .status(201)
                .json({ message: "Usuario creado correctamente" });
            }
          }
        );
      }
    }
  );
};


const editarUsuario = (req, res) => {
  const id = req.params.id;
  const { nombre, usuario, password, email } = req.body;
  const encryptedPassword = bcrypt.hashSync(password, 10);

  db.query(
    "UPDATE usuarios SET nombre = ?, usuario = ?, password = ?, email =? ,  WHERE id = ?",
    [nombre, usuario, encryptedPassword, email, id],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: "Error al actualizar el usaurio" });
      } else {
        res.status(201).json({ message: "Usuario actualizado correctamente" });
      }
    }
  );
};

const eliminarUsuario = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM usuarios WHERE id = ? ", [id], (error, resultado) => {
    if (error) {
      res.status(500).json({ message: "Error al eliminar el usuario" });
    } else {
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    }
  });
};


//

const login = (req, res) => {
  const { email, password } = req.body;
  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (error, result) => {
    if (error) {
      res.status(500).json({ message: "Error al obtener el usuario" });
    } else if (result.length === 0) {
      res.status(400).json({ message: "Usuario no encontrado" });
    } else {
      const response = result[0];
      const contraseñaValida = bcrypt.compareSync(password.trim(), response.password.trim());

      if (contraseñaValida) {
        const token = jwt.sign({ id: response.id }, tokenSecret, {
          expiresIn: "1d",
        });
        res.cookie("token", token);
        res.json({ message: "Login exitoso" });
      } else {
        res.status(400).json({ message: "Contraseña incorrecta" });
      }
    }
  });
};

//
const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.json({ authenticated: false });

  jwt.verify(token, tokenSecret, async (error, user) => {
    if (error) return res.sendStatus(401);

    const id = user.id
    console.log("ID del usuario:", id);
    console.log("token del:", token);

    db.query('SELECT * FROM usuarios WHERE id = ?', [id], async (error, results) => {
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
          // Otros datos del usuario que se deseen incluir en la respuesta
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
    "SELECT usuarios.id , nombre, usuario, password, email, foto from usuarios where id = ?",
    [id],
    (error, resultados) => {
      if (error) {
        res
          .status(500)
          .json({ error: "Ocurrió un error al obtener el usuario" });
      } else if (resultados.length === 0) {
        res.status(404).json({ error: "El usuario no fue encontrado" });
      } else {
        const usuario = resultados[0];
        res.json({
          id: usuario.id,
          nombre: usuario.nombre,
          email: usuario.email,
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
  obtenerUsuarios,
  obtenerUsuariosId,
  crearUsuario,
  editarUsuario,
  eliminarUsuario,
  login,
  profile,
  logout,
  AuthReq,
  verifyToken,
};
