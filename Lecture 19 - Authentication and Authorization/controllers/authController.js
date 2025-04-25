const { check } = require("express-validator");
import isEmpty from "./../node_modules/validator/es/lib/isEmpty";

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
	check("email")
		.isEmail()
		.withMessage("please enter a valid email")
		.normalizeEmail(),
	check("password")
		.isLength({ min: 8 })
		.withMessage("password must bhe at least 8 characters long")
		.matches(/[a-z]/)
		.withMessage("password must contain atleast one uppercase letter")
		.matches(/[A-Z]/)
		.withMessage("password must contain at least one uppercase letter")
		.matches(/[!@#$%^&*()_+<>,.:;'']/)
		.withMessage("password contain atleast one special character")
		.matches(/[0-9]/)
		.withMessage("password must contain one number")
		.check("confirmPassword")
		.trim()
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error("password did not match");
			} else {
				return true;
			}
		}),
	check("userType")
		.notEmpty()
		.withMessage("please slect a user type bhrwe")
		.isIn(["guest", "host"])
		.withMessage("invalid user type"),
	check("terms")
		.notEmpty()
		.withMessage("accept terms and conditions before proceed")
		.custom((value, { req }) => {
			if (value !== "on") {
				throw new console.error("lwde terms and conditions accept kr");
			}
			return true;
		}),
	(req, res, next) => {
		const { firstName, lastName, email, password, userType } = req.body;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).render("auth/signup", {
				pageTitle: "signup to airbnb",
				currentPage: "signup",
				isLoggedIn: false,
				errors: errors.array().map((err) => err.msg),
				oldInput: { firstName, lastName, email, password, userType },
			});
		}

		res.redirect("/login");
	},
];
