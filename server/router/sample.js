const express = require("express");
const router = express.Router();
const { home } = require("../controllers/sampleController");

router.route("/").get(home);

module.exports = router;
