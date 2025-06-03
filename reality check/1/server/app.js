import express from "express";

const app = express();

app.use("/", (_, res) => {
	res.send("hello world");
});
app.listen(3000, () => {
	console.log("server running at port http://localhost:3000");
});
