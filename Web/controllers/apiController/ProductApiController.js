const db = require("../../database/models");
const Products = db.Product;
const Brands = db.Brand;
const Colors = db.Color;
const Categories = db.Category



const controller = {

    list: async (req,res) =>{
     let productos = await Products.findAll(
        {include: ['brand',"color", "category"]}
     )
 
      return res.status(200).json({
          meta:{total: productos.length, status: 200, url: "producto/api/list"},
          data: productos

      })
    },

    show: async (req,res) =>{

        idProduct = req.params.id;
        let productoDetail = await Products.findByPk(idProduct, {include: ['brand',"color", "category"]});
        
      
        if(productoDetail){
        
         

         return res.status(200).json({
        meta:{status: 200, url: "producto/api/detail/" + idProduct},
        data:productoDetail

        
      
            })

        }

        else {
            return res.send("Producto no encontrado")
        }

       


    }

}














module.exports = controller;