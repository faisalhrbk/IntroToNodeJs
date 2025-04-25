exports.getLogin = (req, res, next) => {
	res.render("auth/login", {
		pageTitle: "Login to airbnb",
		currentPage: "login",
		editing: "true",
        idLoggedIn: false
	});
};

exports.postLogin = (req, res, next) => {
    req.isLoggedIn = true;
	res.redirect("/");
};
