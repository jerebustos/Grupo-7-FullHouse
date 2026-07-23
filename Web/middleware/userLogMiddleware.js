const path = require('path');
const fs = require('fs');
const db = require("../database/models");

const Users = db.User //Para usar la base User




 async function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let userCookie = (req.cookies && req.cookies.user) ? req.cookies.user : null;
	let users = [];

	try {
		users = await Users.findAll();
	} catch (e) {
		const jsonPath = path.join(__dirname, '../data/users.json');
		if (fs.existsSync(jsonPath)) {
			try {
				users = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
			} catch (err) {}
		}
	}

	if (userCookie && Array.isArray(users)) {
		let userFromCookie = users.find( oneUser => (oneUser.user || oneUser.email) == userCookie);
		if (userFromCookie) {
			req.session.userLogged = userFromCookie;
		}
	}

	if (req.session && req.session.userLogged) {
		res.locals.isLogged = true;
		res.locals.userLogged = req.session.userLogged;
	}

	next();
}

module.exports = userLoggedMiddleware;