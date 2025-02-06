const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MogoDB Database connect sucessfully ");
  })
  .catch((error) => console.log(`Error catch: ${error}`));
