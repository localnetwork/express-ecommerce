const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "Hello World!" });
});

module.exports = router;
