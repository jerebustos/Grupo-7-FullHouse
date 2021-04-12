const fs = require('fs');
const path = require('path');
const db = require("../database/models");

const Products = db.Product;
const Brands = db.Brand;


const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
index: async (req,res)=>{

    const ProductosGrandes = await Products.findAll({
        where: {
            category_id: 1
        },
        include: ['brand']}
    );
    const ProductosPequeños  = await Products.findAll({
        where: {
            category_id: 2
        },
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
search:(req,res)=>{
    res.render("results");
}
}



module.exports = controller;