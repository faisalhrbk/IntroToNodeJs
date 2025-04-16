const http = require("http");

http
	.createServer((req, res) => {
		console.log(req.url);
		res.setHeader("Content-Type", "text/html");

		if (req.url === "/") {
				res.write("<html>");
				res.write("<head><title>My Page</title></head>");
				res.write("<body><h1>hello / route</h1></body>");
				res.write("</html>");
		} else if (req.url === "/products") {
				res.write("<html>");
				res.write("<head><title>My Page</title></head>");
				res.write("<body><h1>Hello  /Products route</h1></body>");
				res.write("</html>");

		}
	

		res.end();
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
