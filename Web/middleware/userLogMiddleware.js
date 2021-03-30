const path = require('path');
const fs = require('fs');


const userFilePath = path.resolve(__dirname, '../data/users.json');
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	
	let userCookie = req.cookies.user
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