const requestHandler = (req, res) => {
	console.log(req.url, req.method);
	if (req.url === "/") {
		res.setHeader("Content-type", "text/html");
		res.write("<h1> go to calculator click down </h1>");
		res.write('<a href="/calculator">Calculator</a>');
		return res.end();
	} else if (req.url.toLowerCase() === "/calculator") {
		res.setHeader("Content-type", "text/html");
		res.write("<h1> Here Is the Calculator </h1>");
		res.write('<form action="calculate-result" method="post">');
		res.write(
			'<input type="text" placeholder=" enter first no" name="first"/>'
		);

		res.write(
			'<input type="text" placeholder=" enter second no" name="second"/>'
		);
		res.write('<input type="submit" value="calculate" />');
		res.write("</form>");
		return res.end();
	}

	res.write("<h1> 404 Page Not Found! </h1>");
	res.write('<a href="/">home</a>');
	res.end();
};
exports.requestHandler = requestHandler;
