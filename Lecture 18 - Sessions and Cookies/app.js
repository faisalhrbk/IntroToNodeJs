//Core Modules
const path = require("path");

//External Module
const express = require("express");
const { default: mongoose } = require("mongoose");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/error");

//Middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//todo ROUTES GO HERE!
app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
	if (req.isLoggedIn) {
		next();
	} else {
		res.redirect("/login");
	}
});
app.use("/host", hostRouter);
app.use(errorController.pageNotFound);

// Starting server and connecting to mongoose.
const db_path =
	"mongodb+srv://root:root@first-cluster.rtaxwgo.mongodb.net/airbnb?retryWrites=true&w=majority&appName=first-cluster";
const local_db = "mongodb://localhost:27017/airbnb";
mongoose
	.connect(local_db)
	.then(() => {
		console.log("connected to mongoDB...");

		app.listen(3001, () =>
			console.log("server running on address http://localhost:3001")
		);
	})
	.catch((err) => console.log("err while connecting to mongoDB", err));

// sit back relax and enjoy the day!
