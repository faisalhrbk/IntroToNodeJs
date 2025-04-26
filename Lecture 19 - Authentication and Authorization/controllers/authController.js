const { check, validationResult } = require("express-validator");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");

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
		errors: [],
		oldInput: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			userType: "",
		},
	});
};

exports.postSignup = [
	check("firstName")
		.notEmpty()
		.trim()
		.isLength({ min: 2 })
		.withMessage("First name should be at least 2 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("First name should contain only alphabets"),
	check("lastName")
		.notEmpty()
		.trim()
		.isLength({ min: 2 })
		.withMessage("Last name should be at least 2 characters long")
		.matches(/^[A-Za-z\s]+$/)
		.withMessage("Last name should contain only alphabets"),
	check("email")
		.isEmail()
		.withMessage("Please enter a valid email")
		.normalizeEmail(),
	check("password")
		.isLength({ min: 8 })
		.withMessage("Password must be at least 8 characters long")
		.matches(/[a-z]/)
		.withMessage("Password must contain at least one lowercase letter")
		.matches(/[A-Z]/)
		.withMessage("Password must contain at least one uppercase letter")
		.matches(/[!@#$%^&*()_+<>,.:;'']/)
		.withMessage("Password must contain at least one special character")
		.matches(/[0-9]/)
		.withMessage("Password must contain at least one number"),
	check("confirmPassword")
		.trim()
		.custom((value, { req }) => {
			if (value !== req.body.password) {
				throw new Error("Passwords do not match");
			}
			return true;
		}),
	check("userType")
		.notEmpty()
		.withMessage("Please select a user type")
		.isIn(["guest", "host"])
		.withMessage("Invalid user type"),
	check("terms")
		.notEmpty()
		.withMessage("Accept terms and conditions before proceeding")
		.custom((value, { req }) => {
			if (value !== "on") {
				throw new Error("Please accept terms and conditions");
			}
			return true;
		}),
	(req, res, next) => {
		const {
			firstName,
			lastName,
			email,
			password,
			userType,
			confirmPassword,
			terms,
		} = req.body;
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).render("auth/signup", {
				pageTitle: "Signup to Airbnb",
				currentPage: "signup",
				isLoggedIn: false,
				errors: errors.array().map((err) => err.msg),
				oldInput: {
					firstName,
					lastName,
					email,
					password,
					confirmPassword,
					userType,
					terms,
				},
			});
		}

		// // Hash password and save user
		// bcrypt.hash(password, 10, (err, hashedPassword) => {
		// 	if (err) return next(err);
		// 	const user = new User({
		// 		firstName,
		// 		lastName,
		// 		email,
		// 		password: hashedPassword,
		// 		userType,
		// 	});
		// 	user
		// 		.save()
		// 		.then(() => res.redirect("/login"))
		// 		.catch((err) => next(err));
		// });
	},
];
