const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('user').notEmpty().withMessage('Tienes que escribir un usuario').bail().isLength({ min: 3 }).withMessage('Minimo 3 caracteres'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
        body('addres').notEmpty().withMessage('Tienes que escribir una direccion'),
	body('pass').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
    .isLength({ min: 5 }).withMessage('Minimo 5 caracteres'),
    body('pass_confirm').custom((value, { req }) => {
        if (value !== req.body.pass) {
          throw new Error('Las contraseñas no coinciden');
        }
        return true;
      }),
	body('birth_date').notEmpty().withMessage('Tienes que elegir una fecha de cumpleaños'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', ".jpeg"];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]