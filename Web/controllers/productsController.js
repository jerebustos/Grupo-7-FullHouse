
const controller = {
    detail:(req,res)=>{
        res.render('productDetail')
    },
    carrito:(req,res)=>{
        res.render('productCart')
    },

}




module.exports = controller;