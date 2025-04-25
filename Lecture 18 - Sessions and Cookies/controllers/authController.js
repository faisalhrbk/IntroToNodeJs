exports.getLogin = (req, res, next) => {
	res.render("auth/login", {
		pageTitle: "Login to airbnb",
		currentPage: "login",
		editing: "true",
		isLoggedIn: false,
	});
};

exports.postLogin = (req, res, next) => {
	// res.cookie("req.isLoggedIn", true);
	req.session.isLoggedIn = true;
	res.redirect("/");
};

exports.postLogout = (req, res, next) => {
	// res.cookie("req.isLoggedIn", false);
	res.session.destroy(() => {
		res.redirect("/login");
	});
};
