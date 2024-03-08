const express = require("express");
const cors = require("cors");
const port = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});
app.post("/api/add/userResume", (req, res) => {
  try {
    const data = req.body;

    console.clear();

    console.log(data);

    res.send("done");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(port, () => console.log("SERVER STARTED!!"));
