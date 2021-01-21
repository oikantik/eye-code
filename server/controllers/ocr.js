const ocrServices = require("../services/ocr");

module.exports = {
  get: async (req, res) => {
    try {
      const response = await ocrServices.get(req.body.file_url);
      res.status(200).json({ response });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "error, see console" });
    }
  },
};
