// core modules
const path = require("path");
//external modules
const express = require("express");

// local modules
const view = require("./utils/pathUtil");
const UserRouter = require("./routes/UserRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
	res.sendFile(view("index.html"));
});
app.use(UserRouter);

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
