import express from "express";
import { check, validationResult } from "express-validator";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res, next) => res.send("sit back relax and enjoy the show"));
app.listen(3000, () =>
	console.log("server running on port http://localhost:3000")
);
