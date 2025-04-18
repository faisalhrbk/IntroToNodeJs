const express = require("express");
const view = require("../utils/pathUtil");
const UserRouter = express.Router();

UserRouter.get("/contact-us", (req, res, next) => {
	res.sendFile(view("contactUs.html"));
});
UserRouter.post("/contact-us", (req, res, next) => {
	res.send("<p>Thanks for contact us!</p>");
});

module.exports = UserRouter;
