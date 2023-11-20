const express = require('express')
const router = express.Router()
const user = require('../controllers/usuario.controller')
const {validateSchema} = require('../middleware/validator.middleware')
const {registerSchema, loginSchema}= require ('../schemas/auth.schema.js');

router.get('/verify',user.verifyToken)
router.post('/login',validateSchema(loginSchema),user.login)
router.get('/profile',user.AuthReq,user.profile)
router.get('/',user.obtenerUsuarios)
router.get('/:id',user.obtenerUsuariosId)
router.post('/',validateSchema(registerSchema),user.crearUsuario)
router.patch('/:id',user.editarUsuario)
router.delete('/:id',user.eliminarUsuario)
router.post('/logout',user.logout)

module.exports = router;