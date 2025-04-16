// this chapter is more of theory!
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
		} else if (req.url === "/submit" && req.method === "POST") {
			const body = [];
			req.on("data", (chunk) => body.push(chunk));
			req.on("end", () => {
				const parsedBody = Buffer.concat(body).toString();
				console.log(parsedBody);
				// Parsing Request;
				const bodyObj = {};

				const params = URLSearchParams(parsedBody);
				for (const [key, val] of params.entries()) {
					bodyObj[key] = val;
				}
			});
		}

		res.end();
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
