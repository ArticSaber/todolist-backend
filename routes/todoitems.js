import express from "express";
const route = express.Router();
import { getlistitems, createtodo } from "../controller/todoitems.js";

route.route("/").get(getlistitems);
route.route("/create").post(createtodo);

export default route;
