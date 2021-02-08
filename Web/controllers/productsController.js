
const controller = {
    detail:(req,res)=>{
        res.render('products/productDetail')
    },
    carrito:(req,res)=>{
        res.render('products/productCart')
    },
    create: (req, res) => {
		res.render('products/productCreate');
	},

}




module.exports = controller;