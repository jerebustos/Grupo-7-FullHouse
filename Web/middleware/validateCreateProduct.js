const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre de producto'),
	body('price').notEmpty().withMessage('Tienes que escribir un precio').bail()
		.isNumeric().withMessage('Debes escribir un numero'),
	body('accessory').notEmpty().withMessage('Tienes que elegir un accesorio'),
    body('model').notEmpty().withMessage('Tienes que elegir un modelo'),
	body('image').custom((value, { req }) => {
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