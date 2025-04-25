const { check } = require("express-validator");

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
	req.session.destroy(() => {
		res.redirect("/login");
	});
};

exports.getSignup = (req, res, next) => {
	res.render("auth/signup", {
		pageTitle: "signup to airbnb",
		currentPage: "signup",
		editing: "true",
		isLoggedIn: false,
	});
};

exports.postSignup = [
	check("firstName")
		.notEmpty.trim()
		.isLength({ min: 2 })
		.withMessage("First name should be atleast 2 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("First Name should contain only alphabets"),
	check("lastName")
		.notEmpty.trim()
		.isLength({ min: 2 })
		.withMessage("Last name should be atleast 2 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("Last Name should contain only alphabets"),
	(req, res, next) => {
		res.redirect("/login");
	},
];
