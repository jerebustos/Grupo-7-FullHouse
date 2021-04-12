const express = require('express');
const router = express.Router();
const validations = require('../middleware/validateCreateProduct');
const productsController = require('../controllers/productsController');
const upload = require("../middleware/productsMulter")
const productsBaseController = require('../controllers/productsBaseController')


router.get('/',productsBaseController.list);

router.get('/detalle/:id',productsBaseController.show);

router.get('/nuevo', productsBaseController.create);

router.get('/editar/:id',productsBaseController.edit);

router.post('/',upload.single("image"),validations, productsBaseController.store);

router.put('/editar/:id', productsBaseController.update);

router.delete('/borrar/:id', productsBaseController.destroy);

module.exports = router