const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Products = db.Product;
const Brands = db.Brand;


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
index: async (req,res)=>{

    const ProductosGrandes = await Products.findAll({
        where: {
            category_id: 2
        },
        limit: 5,
        include: ['brand']}
    );
    const ProductosPequeños  = await Products.findAll({
        where: {
            category_id: 1
        },
        limit: 5,

        include: ['brand']}
    );;

    

    const paraLaVista = {
        pequeños : ProductosPequeños ,
        grandes  : ProductosGrandes,
        toThousand
    }
    //return res.send(paraLaVista)
    return res.render("index",paraLaVista);
},
cart:(req,res)=>{
    res.render("cart");
},
search: async (req,res)=>{
    
    let products = await Products.findAll({
        include: ['brand'],
        where: {
            name: {[db.Sequelize.Op.like] : "%" + req.query.keyword + "%"}
        }}
    );

    let paraLaVista = {
        products,
        toThousand
    }
    //res.send(req.query.keyword)

    res.render("products/productList", paraLaVista);
}
}



module.exports = controller;