import { check, validationResult } from "express-validator";

const registerValidator = [
	check("name")
		.trim()
		.escape()
		.notEmpty()
		.withMessage("Name is Required")
		.isLength({ min: 3 })
		.withMessage("name must be atleast 3 char long")
		.isLength({ max: 20 })
		.withMessage("name must be less than 20 chars")
		.matches([a - zA - z])
		.withMessage("name should not include numbers"),
	check(),
];

export default registerValidator;
