const { buffer } = require("stream/consumers");

const sumRequestHandler = (req, res) => {
	console.log("in sum request handler", req.url);
	const body = [];

	req.on("data", (chunk) => body.push(chunk));
	req.on("end", () => {
		const bodyStr = Buffer.concat(body).toString();
		console.log(bodyStr);
		const params = new URLSearchParams(bodyStr);
		const bodyObj = Object.fromEntries(params);
		const result = Number(bodyObj.first) + Number(bodyObj.second);
		console.log(result);
		res.write(`<h1> your sum is ${result} </h1>`);
		res.write('<a href="/">home</a>');
		return res.end();
	});
};
exports.sumRequestHandler = sumRequestHandler;
