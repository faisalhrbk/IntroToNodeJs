Common Express-Validator Validations



Validator
Description
Example
Error Message (Example)



.notEmpty()
Ensures field is not empty
check("username").notEmpty()
"Username cannot be empty"


.trim()
Removes leading/trailing spaces
check("name").trim()
(Sanitizes input, no error)


.isLength({ min, max })
Checks string length
check("password").isLength({ min: 8, max: 50 })
"Password must be 8-50 characters"


.isEmail()
Validates email format
check("email").isEmail()
"Please enter a valid email"


.normalizeEmail()
Standardizes email (e.g., lowercase)
check("email").normalizeEmail()
(Sanitizes input, no error)


.matches(regex)
Matches input against regex
check("name").matches(/^[A-Za-z\s]+$/)
"Name can only contain letters and spaces"


.isNumeric()
Ensures input is numeric
check("age").isNumeric()
"Age must be a number"


.isInt({ min, max })
Ensures input is an integer within range
check("quantity").isInt({ min: 1, max: 100 })
"Quantity must be between 1 and 100"


.isFloat({ min, max })
Ensures input is a float within range
check("price").isFloat({ min: 0.01 })
"Price must be at least 0.01"


.isAlpha()
Ensures only alphabetic characters
check("firstName").isAlpha()
"First name can only contain letters"


.isAlphanumeric()
Ensures only letters and numbers
check("username").isAlphanumeric()
"Username can only contain letters and numbers"


.isURL()
Validates URL format
check("website").isURL()
"Please enter a valid URL"


.isMobilePhone()
Validates phone number
check("phone").isMobilePhone("any")
"Please enter a valid phone number"


.escape()
Escapes HTML characters (XSS prevention)
check("comment").escape()
(Sanitizes input, no error)


.custom(validator)
Custom validation logic
check("password").custom(value => value !== "password123").withMessage("Password too weak")
"Password too weak"


Usage Example
const { check, validationResult } = require('express-validator');

exports.postSignup = [
  check("username").notEmpty().trim().isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Validation passed!");
  },
];

Notes

Error Handling: Use validationResult(req) to check for errors after validations.
Chaining: Validators can be chained (e.g., .notEmpty().trim().isEmail()).
Sanitization: Use sanitizers like .trim(), .escape(), or .normalizeEmail() to clean input.
Custom Validators: Use .custom() for complex logic (e.g., checking if passwords match).
Test validations with tools like Postman or browser forms.

