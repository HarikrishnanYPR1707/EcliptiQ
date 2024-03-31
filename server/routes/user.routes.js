const express = require("express");
const router = express.Router();
const {
  addUserData,
  getUserData,
  getUserSingleData,
  updateUserSingleData,
} = require("../controllers/userResume.controller.js");

router.post("/addData", addUserData);
router.get("/getSingleData", getUserSingleData);
router.get("/getAllData", getUserData);
router.get("/updateSingleData", updateUserSingleData);

module.exports = router;
