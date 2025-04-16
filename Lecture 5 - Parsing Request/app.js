// this chapter is more of theory!
const http = require("http");

const userRequestHandler = require("./user");

const server = http.createServer(userRequestHandler);

server.listen(3001, () => {
	console.log("Server running on http://localhost:3001");
});
