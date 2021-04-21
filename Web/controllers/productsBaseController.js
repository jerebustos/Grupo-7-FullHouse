const fs = require('fs');
const path = require('path')
const db = require("../database/models");
const capitalizarPrimeraLetra = require("../middleware/Mayuscula")
const {validationResult} = require('express-validator');

const Products = db.Product;
const Brands = db.Brand;
const Colors = db.Color;
const Categories = db.Category

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    list: async (req,res) =>{

        let products = await Products.findAll({
            include: ['brand']}
        );

        let paraLaVista = {
            products,
            toThousand
        }

      //return res.send(products)
      return res.render("products/productList", paraLaVista)
    }, 


    show: async (req,res)=>{

        let productoDetalle = await Products.findOne({
            where: {
                id: req.params.id
            },
            include: ['brand',"color"]
        });
        
        let paraLaVista = {
            productoDetalle,
            toThousand
        }
       
       // return res.send(productoDetalle)
       return res.render('products/productDetail',paraLaVista)
    },

    create: async (req, res) => {
        
        let allBrand = await Brands.findAll();
        let allColor = await Colors.findAll();
        let allCategory = await Categories.findAll();

		res.render('products/productCreate', {allBrand,allColor,allCategory});
	},
    store: async (req, res) => {

        let allBrand = await Brands.findAll();
        let allColor = await Colors.findAll();
        let allCategory = await Categories.findAll();

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
           
            if (req.file) {
                let filePath = path.resolve(__dirname,'../public/img/products/' + req.file.filename);
            fs.unlinkSync(filePath);
                
            }
            

			return res.render('products/productCreate', {
				errors: resultValidation.mapped(),
				oldData: req.body,
                allBrand,allColor,allCategory
			});
		}

        await Products.create({
            name: capitalizarPrimeraLetra(req.body.name),
            price: req.body.price,
            color_id: req.body.color_id,
            accessory: req.body.accessory,
            brand_id: req.body.brand_id,
            model: req.body.model,
            category_id:req.body.category_id,
            description: req.body.description,
            image: req.file.filename


        })

		return res.redirect("/producto")
      
    },
    edit: async (req, res) => {
        let allBrand = await Brands.findAll();
        let allColor = await Colors.findAll();
        let allCategory = await Categories.findAll();

        let productoAEditar = await Products.findOne({
            where: {
                id: req.params.id
            }
        });
        
        res.render('products/productEdit',{productoAEditar,allBrand,allColor,allCategory});
    },
    update: async (req, res) => {
        let productId = req.params.id;

        await Products.update({
            name: req.body.name,
            price: req.body.price,
            color_id: req.body.color_id,
            accessory: req.body.accessory,
            brand_id: req.body.brand_id,
            model: req.body.model,
            category_id:req.body.category_id,
            description: req.body.description
        },
        {
            where: {id: productId}
        })


		res.redirect("/")
        
    },
    destroy: async (req, res) => {
        
        let productoDetalle = await Products.findOne({
            where: {
                id: req.params.id
            } })

        await Products.destroy({where: {id: req.params.id}, force: true})

		let filePath = path.resolve(__dirname,'../public/img/products/' + productoDetalle.image);

		fs.unlinkSync(filePath);
		

		res.redirect("/")
    },

}




module.exports = controller;