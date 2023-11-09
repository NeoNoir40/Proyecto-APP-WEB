const {z} = require("zod");

const registerSchema = z.object({
  nombre: z.string({ required_error: "El usuario es requerido" }),
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "El email no es valido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    });

const loginSchema = z.object({
  email: z
    .string({ required_error: "El email es requerido" })
    .email({ message: "El email no es valido" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
    
});


module.exports = {registerSchema, loginSchema}