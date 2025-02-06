const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const userRouter = require("./routes/user-routes");
const taskRouter = require("./routes/Task-routes");
require("dotenv").config();

require("./DataBase/DataBase");
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieparser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/tasks", taskRouter);

app.use("/api", (req, res) => {
  res.status(200).json({ message: "hello Express" }); // typing mistake 2000
});

app.listen(5000, () => {
  console.log("app is running now in my server");
});
