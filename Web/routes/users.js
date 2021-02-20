const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/ingresar', userController.login);

router.get('/registro', userController.register);

router.get('/perfil', userController.profile);

router.get('/editar', userController.edit);

router.post('/acceder', userController.access);

router.post('/guardar', userController.save);

router.put('/perfil', userController.update);

router.put('/desactivar', userController.disable);


module.exports = router;