const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8800;
const uploadRoutes = require("./routes/upload");
const ocrRoutes = require("./routes/ocr");
const homeRoutes = require("./routes/home");

app.use(cors());
app.use(express.json());

app.use("/", homeRoutes);
app.use("/upload", uploadRoutes);
app.use("/ocr", ocrRoutes);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
