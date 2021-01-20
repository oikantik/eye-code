const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8800;
const vision = require("@google-cloud/vision");
const dotenv = require("dotenv");
dotenv.config({ silent: true });
const Upload = require("./library/s3");
const multer = require("multer");
const upload = multer({});

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("code"), async (req, res) => {
  try {
    const { Location } = await Upload(req.file);
    console.log(Location);
    res.status(200).json({ file_url: Location });
    // res.status(200).json({
    //   response: `while tue:
    // Do Something`,
    // });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "error, see console" });
  }
});

app.post("/ocr", async (req, res) => {
  try {
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(req.body.file_url);
    const detections = result.textAnnotations;
    const [text, ...others] = detections;
    console.log(text.description);
    res.status(200).json({ response: text.description });
    // res.status(200).json({
    //   response: `while tue:
    // Do Something`,
    // });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "error, see console" });
  }
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
