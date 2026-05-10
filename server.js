import dotenv from "dotenv";
dotenv.config();
import express from "express";
import taskRouter from "./routes/taskRoutes.js";
import { connectToDB } from "./config/db.js";

const app = express();
app.use(express.json());
connectToDB();

app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
