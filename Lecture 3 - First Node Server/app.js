const http = require("http");

http
	.createServer((req, res) => {
		console.log("URL:", req);
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
