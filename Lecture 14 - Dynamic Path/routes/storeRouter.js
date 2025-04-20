//core modules

//External Modules
const express = require("express");
const storeRouter = express.Router();

//Local Modules
const storeController = require("../controllers/storeController");

//routes go here
storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);

storeRouter.get("/favorites", storeController.getFavoriteList);
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
module.exports = storeRouter;
