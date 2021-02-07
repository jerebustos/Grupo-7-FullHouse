const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');



router.get('/detalle',productsController.detail)
router.get('/carrito',productsController.carrito)



module.exports = router