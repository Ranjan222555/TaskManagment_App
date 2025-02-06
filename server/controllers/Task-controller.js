// add a new task
// get all task by userid
// delete a task
// edis a task

const Task = require("../Models/Task");

const addNewTask = async (req, res) => {
  const { title, description, userId, status, priority } = await req.body;

  // validate schema

  try {
    const newlyCreatedTask = await Task.create({
      title,
      description,
      userId,
      status,
      priority,
    });

    if (newlyCreatedTask) {
      return res.status(200).json({
        success: true,
        message: "Task Added",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something wrong in adding Task",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "something wrong in Task-Controller",
    });
  }
};

const getAllTask = async (req, res) => {
  const { id } = req.params;

  try {
    const extractAllTaskByid = await Task.find({ userId: id });

    if (extractAllTaskByid) {
      return res.status(200).json({
        success: true,
        taskList: extractAllTaskByid,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something wrong in getting all task",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "something wrong in getting all task",
    });
  }
};

const updateTask = async (req, res) => {
  const { title, description, status, userId, _id, priority } = await req.body;

  try {
    const updateTask = await Task.findByIdAndUpdate(
      {
        _id,
      },
      { title, description, status, priority, userId },
      { new: true }
    );
    if (updateTask) {
      return res.status(200).json({
        success: true,
        message: "Task Update Done !!!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something wrong in getting all task",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "something wrong in getting all task",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "task id problem",
      });
    }

    const deleteTask = await Task.findByIdAndDelete(id);

    if (deleteTask) {
      return res.status(200).json({
        success: false,
        message: "Task Delete Done!!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something wrong in Delete task",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "something wrong in Delete task",
    });
  }
};

module.exports = { addNewTask, getAllTask, updateTask, deleteTask };
