// const express = require("express");
import express from "express";
import userRoute from "./router/userRoute.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use("/", userRoute); // http://localhost:5000/post-user

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});


