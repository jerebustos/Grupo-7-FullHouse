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
	.isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
		minSymbols: 1
    })
    .withMessage('Minimo 8 caracteres, 1 mayuscula, 1 numero y 1 caracter'),
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