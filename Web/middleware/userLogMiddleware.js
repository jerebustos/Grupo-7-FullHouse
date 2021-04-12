const path = require('path');
const fs = require('fs');
const db = require("../database/models");

const Users = db.User //Para usar la base User




 async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	
	let userCookie = req.cookies.user;
	let users = await Users.findAll();

    let userFromCookie = users.find( oneUser => oneUser.user == userCookie);

	if (userFromCookie) {
		req.session.userLogged = userFromCookie;
	}

	if (req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;