const db = require("../server/models");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


 const Users = db.User

 const controller = {
    login:(req,res)=>{
        res.render("users/login")
    },
    register:(req,res)=>{
        res.render("users/register")
    },
    access: async (req,res)=>{
        let userToLogin = await Users.findOne({
            where:{
                user:req.body.user
            }
        });
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.pass, userToLogin.pass);
			if (isOkThePassword) {
				delete userToLogin.pass;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('user', req.body.user, { maxAge: (1000 * 60) * 60 })
				}

				return res.redirect('/usuario/perfil');
			} 
			return res.render('users/login', {
				errors: {
					user: {
						msg: 'Contaseña incorrecta'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				user: {
					msg: 'No se encuentra este usuario en nuestra base de datos'
				}
			}
		});

    }

}


module.exports = controller;