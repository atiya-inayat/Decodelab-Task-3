import data from "../data/task.js";

export const addTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    data.push({ id: data.length + 1, title });
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
    return res
      .status(200)
      .json({ success: true, message: "Tasks fetched successfully", data });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error..." });
  }
};
