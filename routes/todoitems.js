import express from "express";
const route = express.Router();
import {
  getListItems,
  createTodo,
  getId,
  deleteId,
  updateId,
} from "../controller/todoitems.js";

route.route("/").get(getListItems);
route.route("/create").post(createTodo);
route.route("/:id").get(getId).delete(deleteId).put(updateId);

export default route;
