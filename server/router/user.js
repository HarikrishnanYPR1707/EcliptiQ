const express = require("express");
const router = express.Router();
const { userResumeDataController } = require("../controllers/userResume");

router.route("/api/add/userResumeData").post(userResumeDataController);

module.exports = router;
