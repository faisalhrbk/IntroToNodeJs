//core modules
const path = require("path");

//external module
const express = require("express");

//local modules
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const view = require("./utils/viewsPath");
const rootDir = require("./utils/rootDir");

//middlewares
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

//todo ROUTES GO HERE!

app.use("/", userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
	res.status(404).render("404", {
		pageTitle: "404 Page Not Found",
		currentPage: "404",
	});
});

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
