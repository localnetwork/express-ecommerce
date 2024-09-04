require("dotenv").config();
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Path to the routes directory
const routesPath = path.join(__dirname, "./app/routes");

// Read all files in the routes directory
fs.readdirSync(routesPath).forEach((file) => {
  const route = require(path.join(routesPath, file));
  // Assuming each route file exports a router and is used under its own endpoint
  app.use("/api", route);
});

app.listen(process.env.APP_PORT || 1000, () => {
  console.log(`Running http://localhost:${process.env.APP_PORT || 1000}`);
});
