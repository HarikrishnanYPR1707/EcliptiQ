const express = require("express");
const router = express.Router();
const {
  addUserData,
  getUserData,
  getUserSingleData,
} = require("../controllers/userResume.controller.js");

router.post("/addData", addUserData);
router.get("/getSingleData", getUserSingleData);
router.get("/getAllData", getUserData);

module.exports = router;
