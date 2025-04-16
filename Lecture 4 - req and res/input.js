const http = require("http");

const fs = require("fs");

http
	.createServer((req, res) => {
		console.log(req.url);
		res.setHeader("Content-Type", "text/html");

		if (req.url === "/") {
			res.write("<html>");
			res.write("<head><title>My Page</title></head>");
			res.write("<body>");
			res.write('<form action="/submit", method="post">');
			res.write(
				'<input type="text" name="name" placeholder="enter your name">'
			);
			res.write(
				'<input type="text" name="email" placeholder="enter YOUr email">'
			);
			res.write('<input type="submit" value="submit">');
			res.write("</form>");

			res.write("</body>");
			res.write("</html>");
		} else if (req.url === "/submit-details" && req.method === "POST") {
			fs.writeFileSync("user.txt", "faisal unzai");
			res.statusCode = 302;
			res.setHeader("Location", "/");
		}

		res.end();
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
