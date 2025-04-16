const http = require("http");

http
	.createServer((req, res) => {
		res.setHeader("Content-Type", "text/html");

		if (req.url.toLowerCase() === "/") {
			res.write("<h1>Home Page</h1>");
		} else if (req.url.toLowerCase() === "/men") {
			res.write("<h1>Men Page</h1>");
		} else if (req.url.toLowerCase() === "/women") {
			res.write("<h1>Women Page</h1>");
		} else if (req.url.toLowerCase() === "/kids") {
			res.write("<h1>Kids Page</h1>");
		} else if (req.url.toLowerCase() === "/cart") {
			res.write("<h1>Cart Page</h1>");
		} else {
			res.write("<h1>404 Page Not Found</h1>");
		}

		res.end(); 
	})
	.listen(3000, () => {
		console.log("Server running at http://localhost:3000");
	});
