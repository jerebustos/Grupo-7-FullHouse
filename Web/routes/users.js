const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userBaseController = require("../controllers/userBaseController")
const userApiController = require("../controllers/apiController/userApiController")
const validations = require('../middleware/validateRegister');
const uploadFile = require("../middleware/usersMulter")
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const validateEditUser = require('../middleware/validateEditUser');


router.get('/ingresar', guestMiddleware, userBaseController.login);

router.get('/registro', guestMiddleware, userBaseController.register);

router.get('/perfil',authMiddleware, userBaseController.profile);

router.get('/editar/:id',authMiddleware, userBaseController.edit);

router.get('/salir', userBaseController.logout);

router.get("/api/list", userApiController.list);

router.get("/api/detail/:id", userApiController.detail);

router.post('/acceder', userBaseController.access);

router.post('/',uploadFile.single("avatar"),validations, userBaseController.save);

router.put('/editar/:id',authMiddleware,uploadFile.single("avatar"),validateEditUser, userBaseController.update);

router.delete('/desactivar/:id', userBaseController.disable);


module.exports = router;