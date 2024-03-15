const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userResumeData = require("./routes/user.routes.js");
const connectDatabase = require("./config/database.js");
dotenv.config();

const app = express();

// Connecting to Database
connectDatabase();

app.use(cors());
app.use(express.json());

app.use("/api", userResumeData);

app.use("/", (req, res) => {
  res.send("Server is Up and Running!!");
});

// Listening to PORT
PORT = process.env.PORT;
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
