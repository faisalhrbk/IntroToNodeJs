const fs = require("fs");

const userRequestHandler = (req, res) => {
	console.log(req.url);
	res.setHeader("Content-Type", "text/html");

	if (req.url === "/") {
		res.write("<html>");
		res.write("<head><title>My Page</title></head>");
		res.write("<body>");
		res.write('<form action="/submit", method="POST">');
		res.write('<input type="text" name="name" placeholder="enter your name">');
		res.write(
			'<input type="text" name="email" placeholder="enter YOUr email">'
		);
		res.write('<input type="submit" value="submit">');
		res.write("</form>");

		res.write("</body>");
		res.write("</html>");
	} else if (req.url === "/submit" && req.method == "POST") {
		const body = [];
		req.on("data", (chunk) => body.push(chunk));
		req.on("end", () => {
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			// Parsing Request;
			// const bodyObj = {};
			const params = new URLSearchParams(parsedBody);
			// for (const [key, val] of params.entries()) {
			// 	bodyObj[key] = val;
			// }

			//todo easiest way to do this
			const bodyObj = Object.fromEntries(params);
			console.log(bodyObj);
			fs.writeFileSync("user.txt", JSON.stringify(bodyObj));
		});
	}
	res.end();
};

module.exports = userRequestHandler;
