const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/productosBaseDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
index:(req,res)=>{

    const paraLaVista = {
        products,
        toThousand
    }
    res.render("index",paraLaVista);
},
cart:(req,res)=>{
    res.render("cart");
},
search:(req,res)=>{
    res.render("results");
}
}



module.exports = controller;