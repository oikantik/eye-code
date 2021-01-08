const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8800;
app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
