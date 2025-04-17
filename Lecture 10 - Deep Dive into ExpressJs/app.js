//external module
const express = require("express");
//local modules
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();
//middleware
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use(hostRouter);

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
