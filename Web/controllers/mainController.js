

const controller = {
index:(req,res)=>{
    res.render("index");
},
cart:(req,res)=>{
    res.render("cart");
},
search:(req,res)=>{
    res.render("results");
}
}



module.exports = controller;