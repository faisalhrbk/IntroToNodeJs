const express = require("express");
const path = require("path");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
