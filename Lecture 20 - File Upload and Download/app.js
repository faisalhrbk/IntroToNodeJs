//Core Modules
const path = require("path");

//External Module
const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const multer = require("multer");

//Local Modules
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/rootDir");
const errorController = require("./controllers/error");

//express project packages
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//multer codes goes here
const uniqueName =
	Date.now().toString() + "-" + Math.floor(Math.random() * 1000000).toString();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, uniqueName + file.originalname);
	},
});
const fileFilter = (req, file, cb) => {
	if (
		file.mimetype === "image/png" ||
		file.mimetype === "image/jpg" ||
		file.mimetype === "image/jpeg"
	) {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const multerOptions = {
	storage,
	fileFilter,
};
app.use(multer(multerOptions).single("photo"));

//todo----ROUTES n MIDDLEWARES GO HERE!
//link
const local_db = "mongodb://localhost:27017/airbnb";
const store = new MongoDBStore({
	uri: local_db,
	collection: "session",
});
app.use(
	session({
		secret: "!411sfav",
		resave: false,
		saveUninitialized: true,
		store,
	})
);
//sessions
app.use((req, res, next) => {
	req.isLoggedIn = req.session.isLoggedIn;
	next();
});

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
mongoose
	.connect(local_db)
	.then(() => {
		console.log("connected to mongoDB...");
		app.listen(3004, () =>
			console.log("server running on address http://localhost:3004")
		);
	})
	.catch((err) => console.log("err while connecting to mongoDB", err));
