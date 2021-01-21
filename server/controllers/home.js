module.exports = {
  get: (_, res) => {
    res.status(200).json({ message: "api loaded successfully" });
  },
};
