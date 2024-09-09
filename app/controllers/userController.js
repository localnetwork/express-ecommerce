const { addUserModel } = require("../models/userModel");

const { query } = require("../config/db");
const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  const data = { email, password };

  try {
    const results = await addUserModel(data);

    return res.status(200).json({ message: "User added successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addUser };
