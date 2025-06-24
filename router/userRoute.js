import express from "express";
import { getUser, postData, updateUser } from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);

route.post("/post-user", postData);
route.post("/update-user/:id", updateUser);

export default route;
