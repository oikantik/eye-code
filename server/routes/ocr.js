const express = require("express");
const router = express.Router();
const ocrControllers = require("../controllers/ocr");

router.post("/", ocrControllers.get);

module.exports = router;
