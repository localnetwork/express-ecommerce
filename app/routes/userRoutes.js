const express = require("express");
const router = express.Router();

const { addUser } = require("../controllers/userController");
const { addUserValidator } = require("../validators/userValidators");

router.post("/users", addUserValidator, addUser);

module.exports = router;
