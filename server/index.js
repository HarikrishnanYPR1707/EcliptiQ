const express = require("express");

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});

app.listen(port, () => console.log("SERVER STARTED!!"));
