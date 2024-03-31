const express = require("express");
const router = express.Router();
const {
  addUserData,
  getUserData,
  getUserSingleData,
  updateUserSingleData,
  updateResumeTemplateRoute,
} = require("../controllers/userResume.controller.js");

router.post("/addData", addUserData);
router.get("/getSingleData", getUserSingleData);
router.get("/getAllData", getUserData);
router.put("/updateSingleData", updateUserSingleData);
router.put("/updateResumeTemplateRoute", updateResumeTemplateRoute);

module.exports = router;
