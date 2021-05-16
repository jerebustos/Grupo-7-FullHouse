const express = require('express');
const router = express.Router();
const validations = require('../middleware/validateCreateProduct');
const admiMiddleware = require("../middleware/admiMiddleware")
const productsController = require('../controllers/productsController');
const upload = require("../middleware/productsMulter")
const productsBaseController = require('../controllers/productsBaseController')
const productosApiController = require("../controllers/apiController/ProductApiController")


router.get('/',productsBaseController.list);

router.get('/detalle/:id',productsBaseController.show);

router.get('/nuevo',admiMiddleware, productsBaseController.create);

router.get('/editar/:id',admiMiddleware, productsBaseController.edit);

router.get("/api/list", productosApiController.list);

router.get("/api/detail/:id", productosApiController.show);

router.post('/',upload.single("image"),validations, productsBaseController.store);

router.put('/editar/:id',upload.single("image"),admiMiddleware, productsBaseController.update);

router.delete('/borrar/:id',admiMiddleware, productsBaseController.destroy);

module.exports = router