const dotenv = require("dotenv");
dotenv.config({ silent: true });
const vision = require("@google-cloud/vision");

module.exports = {
  get: async (file_url) => {
    try {
      const client = new vision.ImageAnnotatorClient();
      const [result] = await client.textDetection(file_url);
      const detections = result.textAnnotations;
      const [text, ...others] = detections;
      return text.description;
    } catch (error) {
      return error;
    }
  },
};
