const express = require('express');
const router = express.Router();
const validations = require('../middleware/validateCreateProduct');
const admiMiddleware = require("../middleware/admiMiddleware")
const productsController = require('../controllers/productsController');
const upload = require("../middleware/productsMulter")
const productsBaseController = require('../controllers/productsBaseController')


router.get('/',productsBaseController.list);

router.get('/detalle/:id',productsBaseController.show);

router.get('/nuevo',admiMiddleware, productsBaseController.create);

router.get('/editar/:id',admiMiddleware, productsBaseController.edit);

router.post('/',upload.single("image"),validations, productsBaseController.store);

router.put('/editar/:id',admiMiddleware, productsBaseController.update);

router.delete('/borrar/:id',admiMiddleware, productsBaseController.destroy);

module.exports = router