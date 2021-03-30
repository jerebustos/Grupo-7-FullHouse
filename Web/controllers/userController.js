const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const {
	validationResult
} = require('express-validator');

const userFilePath = path.resolve(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


const controller = {
    login:(req,res)=>{
        res.render("users/login")
    },
    register:(req,res)=>{
        res.render("users/register")
    },
    access: (req,res)=>{
        let userToLogin = users.find( usuario => usuario.user == req.body.user);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.pass, userToLogin.pass);
			if (isOkThePassword) {
				delete userToLogin.password;
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

    },
    save: (req,res)=>{
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
		
		let filePath = path.resolve(__dirname,'../public/img/users/' + req.file.filename);
        fs.unlinkSync(filePath);

			return res.render('users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
			
		}
        let userInDB = users.find( usuario => usuario.email == req.body.email)
        if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
        let userName = users.find( usuario => usuario.user == req.body.user)
        if (userName) {
			return res.render('users/register', {
				errors: {
					user: {
						msg: 'Este nombre de usuario ya existe'
					}
				},
				oldData: req.body
			});
		}
        let usuarioAgregar = {
			id: users.length == 0 ? 1 : users[users.length -1].id +1,
			name: req.body.name,
            lastName:req.body.lastName ,
            user:req.body.user ,
            email:req.body.email ,
			addres: req.body.addres,
            admi : false,
            birth_date: req.body.birth_date,
            pass: bcryptjs.hashSync(req.body.pass, 10),
			avatar: req.file.filename

			
		};
		users.push(usuarioAgregar);
        let usuarioSubir = JSON.stringify(users, null , 2);
		fs.writeFileSync(userFilePath ,usuarioSubir)
    
		return res.redirect("/usuario/ingresar")

    },
    profile: (req,res)=>{
		res.render("users/profile", {
			user: req.session.userLogged
		})
    },
    edit: (req,res)=>{

    },
    update: (req,res)=>{

    },
    disable: (req,res)=>{

    },
	logout:  (req,res)=>{
		res.clearCookie('user');
		req.session.destroy();
		return res.redirect('/');
    }
}
    
    
    
    module.exports = controller;