exports.pageNotFound = (req, res, next) => {
	res.status(404).render("404", {
		pageTitle: "404 Page Not Found",
		currentPage: "404",
		isLoggedIn: false,
		user: req.session.user,
	});
};