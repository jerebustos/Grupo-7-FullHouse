const fs = require('fs');
const path = require('path')
const db = require("../database/models");
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');


const Users = db.User //Para usar la base User

const controller = {
    login: (req, res) => {
        res.render("users/login")
    },
    register: (req, res) => {
        res.render("users/register")
    },
    access: async (req, res) => {
        let userToLogin = await Users.findOne({
            where: {
                user: req.body.user
            }
        });

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.pass, userToLogin.pass);
            if (isOkThePassword) {
                delete userToLogin.pass;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie('user', req.body.user, {
                        maxAge: (1000 * 60) * 60
                    })
                }

                return res.redirect('/usuario/perfil');
            }
            return res.render('users/login', {
                errors: {
                    user: {
                        msg: 'Credenciales invalidas'
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

    save: async (req, res) => {

        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            if(req.file){
            let filePath = path.resolve(__dirname, '../public/img/users/' + req.file.filename);
            fs.unlinkSync(filePath)};

            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });

        }
        let userInDB = await Users.findOne({
            where: {
                email: req.body.email
            }
        })
        if (userInDB) {
            let filePath = path.resolve(__dirname, '../public/img/users/' + req.file.filename);
            fs.unlinkSync(filePath);
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body
            });
        }
        let userName = await Users.findOne({
            where: {
                user: req.body.user
            }
        })
        if (userName) {
            let filePath = path.resolve(__dirname, '../public/img/users/' + req.file.filename);
            fs.unlinkSync(filePath)
            return res.render('users/register', {
                errors: {
                    user: {
                        msg: 'Este nombre de usuario ya existe'
                    }
                },
                oldData: req.body
            });
        }
        await Users.create({
            ...req.body,
            admi: false,
            pass: bcryptjs.hashSync(req.body.pass, 10),
            avatar: req.file.filename


        });


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
    disable: async (req,res)=>{
        let usuario = await Users.findOne({
            where: {
                id: req.params.id
            } })

        await Users.destroy({where: {id: req.params.id}, force: true})

		let filePath = path.resolve(__dirname,'../public/img/users/' + usuario.avatar);

		fs.unlinkSync(filePath);
		
        res.clearCookie('user');
		req.session.destroy();
		res.redirect("/")

    },
	logout:  (req,res)=>{
		res.clearCookie('user');
		req.session.destroy();
		return res.redirect('/');
    }
}


module.exports = controller;