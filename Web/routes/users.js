const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userBaseController = require("../controllers/userBaseController")
const userApiController = require("../controllers/apiController/userApiController")
const validations = require('../middleware/validateRegister');
const uploadFile = require("../middleware/usersMulter")
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/ingresar', guestMiddleware, userBaseController.login);

router.get('/registro', guestMiddleware, userBaseController.register);

router.get('/perfil',authMiddleware, userBaseController.profile);

router.get('/editar', userBaseController.edit);

router.get('/salir', userBaseController.logout);

router.get("/api/list", userApiController.list)

router.post('/acceder', userBaseController.access);

router.post('/',uploadFile.single("avatar"),validations, userBaseController.save);

router.put('/perfil', userBaseController.update);

router.delete('/desactivar/:id', userBaseController.disable);


module.exports = router;