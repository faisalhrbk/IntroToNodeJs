//external module
const express = require("express");
const app = express();
//local module

app.use((req, res, next) => {
	console.log("came in first middleware");
	res.send("hello world");
	next();
});
app.use((req, res, next) => {
	console.log("came in 2 middleware");
	next();
});
app.use((req, res, next) => {
	console.log("came in 3 middleware");
});

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
