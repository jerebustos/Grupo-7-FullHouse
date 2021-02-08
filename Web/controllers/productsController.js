
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
    store:(req, res) => {
		res.render();},

    edit: (req, res) => {
            res.render('products/productEdit');
        },
    update: (req, res) => {
            res.render();
        },

}




module.exports = controller;