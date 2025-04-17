//external module
const express = require("express");
//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
	res
		.status(404)
		.send(`<h1> Page 404 Can't get it! </h1> <a href="/">go back bitch</a>`);
});

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
