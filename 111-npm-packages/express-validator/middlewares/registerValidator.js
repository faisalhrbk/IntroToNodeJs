import { check, validationResult } from "express-validator";

export const addDoctorValidator = [
	check("name")
		.notEmpty()
		.withMessage("Name required")
		.isLength({ min: 3 })
		.withMessage("Name must be 3+ chars")
		.trim() // Remove whitespace
		.escape(), // Prevent XSS
	check("email")
		.notEmpty()
		.withMessage("Email required")
		.isEmail()
		.withMessage("Invalid email")
		.normalizeEmail(), // Standardize email
	check("password")
		.notEmpty()
		.withMessage("Password required")
		.isLength({ min: 6 })
		.withMessage("Password must be 6+ chars")
		.matches(/[A-Za-z]/)
		.withMessage("Password needs a letter")
		.matches(/[0-9]/)
		.withMessage("Password needs a number"),
	check("imageFile").custom((value, { req }) => {
		if (!req.file) throw new Error("Image required");
		if (!["image/jpeg", "image/png", "image/gif"].includes(req.file.mimetype)) {
			throw new Error("Only JPEG, PNG, GIF allowed");
		}
		return true;
	}),
];

export const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty())
		return res.status(400).json({ errors: errors.array() });
	next();
};
