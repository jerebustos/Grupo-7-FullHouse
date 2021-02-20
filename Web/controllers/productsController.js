// Requerir el modelo de los Productos
// Requerir el modelo de las Categorias

const controller = {
    show:(req,res)=>{
        // Buscar al producto en la base de datos por el parametro id (req.params)
        // Enviar esa información en el render
        res.render('products/productDetail')
    },
    create: (req, res) => {
        // Enviar a la vista un array con todas las categorias posibles
		res.render('products/productCreate');
	},
    store:(req, res) => {
       // Guardar un nuevo producto
       // Con la informacion del formulario (req.body)
    },
    edit: (req, res) => {
        // Buscar al producto en la base de datos por el parametro id (req.params)
        // Enviar esa información en el render
        res.render('products/productEdit');
    },
    update: (req, res) => {
        // Modificar el producto seleccionado por el id  (req.params)
        // Con la información del formulario (req.body) 
        
    },
    destroy: (req, res) => {
        // Eliminar el producto seleccionado por el id  (req.body)
    },

}




module.exports = controller;