const express = require("express");
const app = express();

// app.use((req, res, next) => {
// 	console.log(req.url);
//     next();
// });
// app.use((req, res, next) => {
// 	console.log(req.url);
//     next();
// });

app.get("/contact-us", (req, res, next) => {
	res.send(`<p> this is contact us page!</p> 
    <form action="/contact-us", method="POST">
    <input type="text" name="name" placeholder="Type Your Name" />
    <input type="email" placeholder="Type Your Email" />
    <input type="submit"/> 
    </form>`);
});
app.post("/contact-us", (req, res, next) => {
	res.send("<p>Thanks for contact us!</p>");
});

app.listen(3000, () =>
	console.log("server running on address http://localhost:3000")
);
