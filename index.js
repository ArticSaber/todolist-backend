import Express from "express";
import cors from "cors";
import todoitems from "./routes/todoitems.js";
const app = Express();
app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use("/api/v1/todos", todoitems);

const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
