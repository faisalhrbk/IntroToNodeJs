//core modules

//External Modules
const express = require("express");
const storeRouter = express.Router();

//Local Modules
const storeController = require("../controllers/storeController");

//routes go here
storeRouter.get("/", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);

module.exports = storeRouter;
