const saltRounds = process.env.SALT_ROUNDS || 10;
const bcrypt = require("bcrypt");
const { query } = require("../config/db");
const { v4: uuidv4 } = require("uuid");
const addUserModel = async (data) => {
  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  const uuid = uuidv4();

  const results = await query({
    sql: "INSERT INTO users (uuid, email, password) VALUES (?, ?, ?)",
    values: [uuid, data.email, hashedPassword],
  });
};

module.exports = { addUserModel };
