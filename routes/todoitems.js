import express from "express";
const route = express.Router();

route.get("/", (req, res) => {
  res.send("hello world from todoitems");
});

export default route;
