import express from "express";
import { addTask, getTasks } from "../controller/taskController.js";

const router = express.Router();

router.post("/newTask", addTask);
router.get("/allTasks", getTasks);

export default router;
