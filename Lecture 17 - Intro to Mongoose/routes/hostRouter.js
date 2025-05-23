//core modules

//external modules
const express = require("express");
const hostRouter = express.Router();

//local modules
const hostController = require("../controllers/hostController");

//routes go here
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);
hostRouter.get("/home-list", hostController.getHostHomes);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/edit-home", hostController.postEditHome);
hostRouter.post('/delete-home/:homeId', hostController.postDeleteHome);

module.exports = hostRouter;
