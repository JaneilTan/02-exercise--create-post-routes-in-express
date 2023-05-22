const express = require("express");
const app = express();

// Use this function to get a random id
// eg: `const id = generateId();`
const generateId = require("./generateId");

app.use(express.json());

module.exports = app;
