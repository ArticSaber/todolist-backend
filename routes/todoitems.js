import express from "express";
const route = express.Router();
import getlistitems from "../controller/todoitems.js";

route.route("/").get(getlistitems);

export default route;
