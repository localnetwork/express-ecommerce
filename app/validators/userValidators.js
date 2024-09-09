const addUserValidator = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];
  if (!email) {
    errors.push({ email: "Email is required." });
  }
  if (!password) {
    errors.push({ password: "Password is required." });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  next();
};

module.exports = { addUserValidator };
