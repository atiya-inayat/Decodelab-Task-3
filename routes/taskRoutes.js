import express from "express";

import {
  addTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controller/taskController.js";

const router = express.Router();

router.post("/newTask", addTask);
router.get("/allTasks", getTasks);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;
