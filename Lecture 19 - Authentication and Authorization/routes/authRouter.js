//core modules

//External Modules
const express = require("express");
const authRouter = express.Router();

//Local Modules
const authController = require("../controllers/authController");

//routes go here
authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);
authRouter.post("/logout", authController.postLogout);
authRouter.get("/signup", authController.getSignup);
authRouter.post("/signup", authController.postSignup);

module.exports = authRouter;
