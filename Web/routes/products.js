const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/detalle/:id',productsController.show);

// No deberia crear o editar o borrar sin permisos de administrador
// Middleware de Logged User
// Middleware de Authentication User

router.get('/nuevo',productsController.create);

router.get('/editar/:id',productsController.edit);

router.post('/', productsController.store);

router.put('/:id', productsController.update);

router.delete('/borrar', productsController.destroy);

module.exports = router