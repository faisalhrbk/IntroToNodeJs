import {check, validationResult} from "express-validator"

//register validator
const registerValidator = [
 check("name").not().isEmpty().withMessage("Name is required").trim().isLength({min: 2, max: 50}).withMessage("Name must be between 2-50 characters").isAlpha('en-US', {ignore: ' '}).withMessage("Name can only contain letters and spaces"),
 check("email").not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid email format").normalizeEmail(),
 check("password").isLength({min: 8}).withMessage("Password must be at least 8 characters long").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/).withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"),
 check("role").isIn(['admin', 'user']).withMessage("Role must be either 'admin' or 'user'")
]

const loginValidator = [
 check("email").not().isEmpty().withMessage('Email is required').isEmail().withMessage("Invalid email format").normalizeEmail(),
 check("password").not().isEmpty().withMessage("Password is required")
]

const validate = (req, res, next) => {
 const errors = validationResult(req);
 if (!errors.isEmpty()) {
 return res.status(400).json({
   success: false,
   message: "Validation failed",
   errors: errors.array()
 });
 }
 next();
}

export { registerValidator, loginValidator, validate };