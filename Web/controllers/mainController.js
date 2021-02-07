

const controller = {
index:(req,res)=>{
    res.render("index");
},
login:(req,res)=>{
    res.render("login")
},
register:(req,res)=>{
    res.render("register")
},
}





module.exports = controller;