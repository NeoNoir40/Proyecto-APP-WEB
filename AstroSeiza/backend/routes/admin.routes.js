const express = require('express')
const router = express.Router()
const admin = require('../controllers/admin.controllers.js')
const {validateSchema} = require('../middleware/validator.middleware')
const {registerSchema, loginSchema}= require ('../schemas/admin.auth.schema.js');

router.get('/verify',admin.verifyToken)
router.get('/profile',admin.AuthReq,admin.profile)
router.get('/',admin.obtenerAdmin)
router.get('/:id',admin.obtenerAdminId)
router.post('/',validateSchema(registerSchema),admin.crearAdmin)
router.patch('/:id',admin.editarAdmin)
router.delete('/:id',admin.eliminarAdmin)
router.post('/login',validateSchema(loginSchema),admin.login)
router.post('/logout',admin.logout)

module.exports = router;