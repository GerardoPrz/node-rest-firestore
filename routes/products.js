const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const response = {
    mesagge: "Hello from home",
  };

  return res.status(200).json(response);
});

module.exports = router;
