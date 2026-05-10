import Task from "../models/taskModel.js";

export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const newTask = await Task.create({
      title,
      description,
    });

    return res
      .status(201)
      .json({ success: true, message: "Task added successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error..." });
  }
};

export const getTasks = async (req, res) => {
  try {
    const AllTasks = await Task.find();

    return res
      .status(200)
      .json({ success: true, message: "Tasks fetched successfully", AllTasks });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error..." });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updateTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      updatedTask: updateTask,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await Task.findByIdAndDelete(id);

    if (!deleteTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
