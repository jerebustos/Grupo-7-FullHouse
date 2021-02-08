const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');



router.get('/detalle',productsController.detail);
router.get('/carrito',productsController.carrito);


router.get('/create',productsController.create);
router.post('/', productsController.store);

router.get('/edit',productsController.edit);
router.put('/:id', productsController.update);






module.exports = router