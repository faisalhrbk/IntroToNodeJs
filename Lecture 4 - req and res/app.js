const http = require("http");

http
	.createServer((req, res) => {
		console.log(req.url, req.method, );
		res.setHeader('Content-Type', 'text/html');
		
		
	})
	.listen(3001, () => {
		console.log("Server running on http://localhost:3001");
	});
