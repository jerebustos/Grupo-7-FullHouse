const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../data/productosBaseDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
index:(req,res)=>{
    const ProductosGrandes = [];
    const ProductosPequeños  = [];

    products.map(producto => {
        if(producto.category == "grande"){
            ProductosGrandes.push(producto)
         }
         else if(producto.category == "pequeño"){
            ProductosPequeños.push(producto)
         }
    })

    const paraLaVista = {
        pequeños : ProductosPequeños ,
        grandes  : ProductosGrandes,
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