const express = require("express");
const router = express.Router();
const homeControllers = require("../controllers/home");

router.get("/", homeControllers.get);

module.exports = router;
