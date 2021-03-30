const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator');
const productsFilePath = path.resolve(__dirname, '../data/productosBaseDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    show:(req,res)=>{
        const productoDetalle = products.find( producto => producto.id == req.params.id);

        let paraLaVista = {
            productoDetalle,
            toThousand
        }

        res.render('products/productDetail',paraLaVista)
    },

    create: (req, res) => {
        // Enviar a la vista un array con todas las categorias posibles
		res.render('products/productCreate');
	},
    store:(req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {

            let filePath = path.resolve(__dirname,'../public/img/products/' + req.file.filename);
            fs.unlinkSync(filePath);

			return res.render('products/productCreate', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        let productoAgregar = {
			id: products.length == 0 ? 1 : products[products.length -1].id +1,
			name: req.body.name,
			price: req.body.price,
			color: req.body.color ,
            accesorios: req.body.accesorios,
            marca: req.body.marca,
            modelo: req.body.modelo,
			category: req.body.category ,
			description: req.body.description,
			image: req.file.filename

			
		};

		
		products.push(productoAgregar);
        let productoSubir = JSON.stringify(products, null , 2);
		fs.writeFileSync(productsFilePath ,productoSubir)
        

		return res.redirect("/")
      
    },
    edit: (req, res) => {

        let productoAEditar = products.find( producto => producto.id == req.params.id);
        
        res.render('products/productEdit',productoAEditar);
    },
    update: (req, res) => {
       	let productoAEditar = products.find( producto => producto.id == req.params.id);

		const productoEditado = products.map( producto => {
			if(producto.id == productoAEditar.id ){
                producto.name = req.body.name;
                producto.price = req.body.price;
                producto.color = req.body.color;
                producto.accesorios = req.body.accesorios;
                producto.marca = req.body.marca;
                producto.modelo = req.body.modelo;
                producto.category = req.body.category;
                producto.description = req.body.description;
             }
			 return producto;
			 
		})

		let productoSubir = JSON.stringify(productoEditado, null , 2);
		fs.writeFileSync(productsFilePath,productoSubir);

		res.redirect("/")
        
    },
    destroy: (req, res) => {
        let productoEliminado = products.filter(producto => producto.id != req.params.id);
        
		let imagenABorrar = products.find( producto => producto.id == req.params.id);

		let filePath = path.resolve(__dirname,'../public/img/products/' + imagenABorrar.image);

		fs.unlinkSync(filePath);
         
       

		let productoSubir = JSON.stringify(productoEliminado, null , 2);
		fs.writeFileSync(productsFilePath,productoSubir);
		

		res.redirect("/")
    },

}




module.exports = controller;