//core modules
const http = require("http");
//external module
const express = require("express");
const app = express();
//local module

app.use(()=>{

});
http
	.createServer(app)
	.listen(3000, () =>
		console.log("server running on address http://localhost:3000")
	);
