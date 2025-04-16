const http = require("http");

http
	.createServer((req, res) => {
		console.log(req.url);
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>My Page</title></head>");
		res.write("<body><h1>Hello World</h1></body>");
		res.write("</html>");

		res.end();
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
