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

    detail: async (req,res) =>{

        idUser = req.params.id;
        let usuarioDetail = await Users.findByPk(idUser, {attributes:{exclude: ["pass","createdAt","updatedAt","admi"]}});
        
      
        if(usuarioDetail){
        
         delete usuarioDetail.admi;
         

         return res.status(200).json({
        meta:{status: 200, url: "usuarios/api/detail/" + idUser},
        data:usuarioDetail

        
      
            })

        }

        else {
            return res.send("usuario no encontrado")
        }

       


    }

}














module.exports = controller;