const express = require("express");
const taskRouter = express.Router();

const {
  getAllTask,
  addNewTask,
  deleteTask,
  updateTask,
} = require("../controllers/Task-controller");

taskRouter.post("/add-new-task", addNewTask);
taskRouter.get("/get-all-tasks/:id", getAllTask);
taskRouter.delete("/delete-tasks/:id", deleteTask);
taskRouter.put("/update-tasks", updateTask);

module.exports = taskRouter;
