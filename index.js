import Express from "express";
import cors from "cors";
import todoitems  from "./routes/todoitems.js";

const app = Express();
const port = 3000;
app.use("/api/vi/todos", todoitems);
app.use(Express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World!");
} );
    
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


