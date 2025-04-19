//Core Modules
const path = require("path");

//External Module
const express = require("express");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const  hostRouter  = require("./routes/hostRouter");
const view = require("./utils/viewsPath");
const rootDir = require("./utils/rootDir");
const errorController = require('./controllers/error');

//Middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//todo ROUTES GO HERE!
app.use("/", storeRouter);
app.use("/host", hostRouter);

app.use(errorController.pageNotFound);

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
