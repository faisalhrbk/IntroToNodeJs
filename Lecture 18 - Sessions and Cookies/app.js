//Core Modules
const path = require("path");

//External Module
const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/error");

//express middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//todo ROUTES n MIDDLEWARES GO HERE!
app.use(
	session({
		secret: "!411sfav",
		resave: false,
		saveUninitialized: true,
	})
);
//sessions
app.use((req, res, next) => {
	req.isLoggedIn = req.session.isLoggedIn; //one problem with this ye code mai ek line bhe change hoti hai toh session khtm hojata hai qki ye RAM mai store hota hai session hum abhi DB mai store karengy
	next();
});
//for cookies
// app.use((req, res, next) => {
// 	req.isLoggedIn = req.get("Cookie")
// 		? req.get("Cookie").split("=")[1] === "true"
// 		: "false";
// 	next();
// });
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
