const express = require("express");
const router = express.Router();
const {
  addUserData,
  // getUserData,
} = require("../controllers/userResume.controller.js");

// router.route("/api/add/userResumeData").post(userResumeDataController);
router.post("/addData", addUserData);
// router.get("/getData", getUserData);

module.exports = router;
