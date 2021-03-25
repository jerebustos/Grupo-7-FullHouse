const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const uploadFile = require("../middleware/usersMulter")

router.get('/ingresar', userController.login);

router.get('/registro', userController.register);

router.get('/perfil', userController.profile);

router.get('/editar', userController.edit);

router.post('/acceder', userController.access);

router.post('/guardar',uploadFile.single("avatar"), userController.save);

router.put('/perfil', userController.update);

router.delete('/desactivar', userController.disable);


module.exports = router;