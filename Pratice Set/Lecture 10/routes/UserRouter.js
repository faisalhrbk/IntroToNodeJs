const express = require("express");
const path = require("path");
const UserRouter = express.Router();

UserRouter.get("/contact-us", (req, res, next) => {
	res.sendFile(
            path.join(path.dirname(require.main.filename), "views", "contactUs.html")
        );
});
UserRouter.post("/contact-us", (req, res, next) => {
	res.send("<p>Thanks for contact us!</p>");
});

module.exports = UserRouter;
