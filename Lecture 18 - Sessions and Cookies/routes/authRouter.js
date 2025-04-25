//core modules

//External Modules
const express = require("express");
const authRouter = express.Router();

//Local Modules
const authController = require("../controllers/authController");

//routes go here
authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);

module.exports = authRouter;
