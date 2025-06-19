import express from "express";
import { getUser, postData } from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);

route.post("/post-user", postData);

export default route;
