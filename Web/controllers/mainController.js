const path = require('path');
const fs = require('fs');
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");


const Products = db.Product;
const Brands = db.Brand;


const toThousand = n => n ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "0";


const controller = {
index: async (req,res)=>{
    let ProductosGrandes = [];
    let ProductosPequeños = [];

    try {
        ProductosGrandes = await Products.findAll({
            where: { category_id: 2 },
            limit: 5,
            include: ['brand']
        });
        ProductosPequeños = await Products.findAll({
            where: { category_id: 1 },
            limit: 5,
            include: ['brand']
        });
    } catch (e) {
        const jsonPath = path.join(__dirname, '../data/productosBaseDatos.json');
        if (fs.existsSync(jsonPath)) {
            try {
                const allProducts = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
                ProductosPequeños = allProducts.filter(p => p.category === 'pequeño').slice(0, 5);
                ProductosGrandes = allProducts.filter(p => p.category === 'grande').slice(0, 5);
            } catch (err) {}
        }
    }

    const paraLaVista = {
        pequeños : ProductosPequeños ,
        grandes  : ProductosGrandes,
        toThousand
    }
    return res.render("index",paraLaVista);
},
cart:(req,res)=>{
    res.render("cart");
},

checkout:(req,res)=>{
    res.render("checkout");
},
search: async (req,res)=>{
    let products = [];
    const keyword = (req.query.keyword || '').toLowerCase();
    try {
        products = await Products.findAll({
            include: ['brand'],
            where: {
                name: {[db.Sequelize.Op.like] : "%" + req.query.keyword + "%"}
            }}
        );
    } catch (e) {
        const jsonPath = path.join(__dirname, '../data/productosBaseDatos.json');
        if (fs.existsSync(jsonPath)) {
            try {
                const allProducts = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
                products = allProducts.filter(p => p.name && p.name.toLowerCase().includes(keyword));
            } catch (err) {}
        }
    }

    let paraLaVista = {
        products,
        toThousand
    }

    res.render("products/productList", paraLaVista);
}
}



module.exports = controller;