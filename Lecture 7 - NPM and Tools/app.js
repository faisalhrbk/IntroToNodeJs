const http = require("http");
http
	.createServer((req, res) => {
		console.log(req);
	})
	.listen(3000, () =>
		console.log("Server Running on address http://localhost:3000")
	);
