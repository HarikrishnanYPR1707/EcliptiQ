const express = require("express");
const router = express.Router();
const {
  addUserData,
  // getUserData,
} = require("../controllers/userResume.controller.js");

router.post("/addData", addUserData);
// router.get("/getData", getUserData);

module.exports = router;
