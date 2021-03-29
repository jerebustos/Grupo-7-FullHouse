const express = require('express');
const router = express.Router();
const validations = require('../middleware/validateCreateProduct');
const productsController = require('../controllers/productsController');
const upload = require("../middleware/productsMulter")


router.get('/detalle/:id',productsController.show);

router.get('/nuevo', productsController.create);

router.get('/editar/:id',productsController.edit);

router.post('/',upload.single("image"),validations, productsController.store);

router.put('/editar/:id', productsController.update);

router.delete('/borrar/:id', productsController.destroy);

module.exports = router