exports.getLogin = (req, res, next) => {
	res.render("auth/login", {
		pageTitle: "Login to airbnb",
		currentPage: "login",
		editing: "true",
	});
};
