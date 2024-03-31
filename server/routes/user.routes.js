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
router.put("/updateSingleData", updateUserSingleData);

module.exports = router;
