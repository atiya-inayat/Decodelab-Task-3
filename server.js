import express from "express";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
app.use(express.json());

app.use("/api/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Server running on PORT 3000...");
});
