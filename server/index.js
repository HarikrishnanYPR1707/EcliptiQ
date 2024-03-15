const express = require("express");
const cors = require("cors");
const userResumeData = require("./routes/user.routes.js");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userResumeData);

app.use("/", (req, res) => {
  res.send("Server is Up and Running!!");
});

app.listen(port, () => console.log("SERVER STARTED!!"));
