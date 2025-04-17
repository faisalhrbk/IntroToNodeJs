//core modules
const http = require("http");
//external module
const express = require("express");
const app = express();
//local module

app.use((req, res, next) => {
	console.log("came in first middleware");
    next();
});
app.use((req, res, next) => {
	console.log("came in 2 middleware");
});
app.use((req, res, next) => {
	console.log("came in 3 middleware");
});
http
	.createServer(app)
	.listen(3000, () =>
		console.log("server running on address http://localhost:3000")
	);
