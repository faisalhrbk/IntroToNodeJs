import express from "express";
import { userLogin, userRegister } from "../controllers/user.controller";
const route = express.Router();

route.post("/login", userLogin);
route.post("/register", userRegister);
