const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validations = require('../middleware/validateRegister');
const uploadFile = require("../middleware/usersMulter")
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/ingresar',guestMiddleware, userController.login);

router.get('/registro',guestMiddleware, userController.register);

router.get('/perfil',authMiddleware, userController.profile);

router.get('/editar', userController.edit);

router.post('/acceder', userController.access);

router.post('/',uploadFile.single("avatar"),validations, userController.save);

router.put('/perfil', userController.update);

router.delete('/desactivar', userController.disable);


module.exports = router;