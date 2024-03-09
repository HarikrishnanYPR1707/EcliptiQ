const express = require("express");
const cors = require("cors");
const sampleHomePage = require("./router/sample");
const userResumeData = require("./router/user");

const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.use(sampleHomePage);
app.use(userResumeData);

app.listen(port, () => console.log("SERVER STARTED!!"));
