const Upload = require("../library/s3");

module.exports = {
  upload: async (req, res) => {
    try {
      const { Location } = await Upload(req.file);
      res.status(200).json({ file_url: Location });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "error, see console" });
    }
  },
};
