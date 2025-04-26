const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is Required!"],
	},
	lastName: String,
	email: {
		type: String,
		require: [true, "Email is required"],
		unique: [true, "Email is already registered"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	userType: {
		type: String,
		enum: ["guest", "host"],
		default: "guest",
	},
});

module.exports = mongoose.model("user", userSchema);
