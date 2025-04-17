// core modules
const path = require('path');

//external modules
// local modules
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/contact-us", (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views' , 'contact-us.html'));
});
app.use(contactUsRouter);
app.post("/contact-us", (req, res, next) => {
	res.send("<p>Thanks for contact us!</p>");
});

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
