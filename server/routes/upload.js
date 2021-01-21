const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({});
const uploadControllers = require("../controllers/upload");

router.post("/", upload.single("code"), uploadControllers.upload);

module.exports = router;
