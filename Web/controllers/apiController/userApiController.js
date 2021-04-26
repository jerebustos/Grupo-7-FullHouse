const db = require("../../database/models");
const Users = db.User

const controller = {

    list: async (req,res) =>{
     let usuarios = await Users.findAll()

     let email = []
     let user = []

     usuarios.map( usuario => {
        email.push(usuario.email);
        user.push(usuario.user)

     })
      
      return res.status(200).json({
          meta:{total: usuarios.length, status: 200, url: "usuarios/api/list"},
          data: email, user

      })
    },

}














module.exports = controller;