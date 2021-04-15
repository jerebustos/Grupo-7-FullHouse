function admiMiddleware(req, res, next) {

	if (!req.session.userLogged ) {
		return res.redirect('/usuario/ingresar');
	}
	
    if (req.session.userLogged.admi != 1) {
        return res.redirect("/")
        
    }
    next();
}

module.exports = admiMiddleware;