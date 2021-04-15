function admiMiddleware(req, res, next) {

	if (!req.session.userLogged || req.session.userLogged.admi != 1) {
		return res.redirect('/');
	}
	next();
}

module.exports = admiMiddleware;