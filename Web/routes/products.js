const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/productsController');
const multer = require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,'../public/img/products'))
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
  })
   
  const upload = multer({ storage: storage })


router.get('/detalle/:id',productsController.show);

// No deberia crear o editar o borrar sin permisos de administrador
// Middleware de Logged User
// Middleware de Authentication User

router.get('/nuevo', productsController.create);

router.get('/editar/:id',productsController.edit);

router.post('/',upload.single("image"), productsController.store);

router.put('/editar/:id', productsController.update);

router.delete('/borrar/:id', productsController.destroy);

module.exports = router