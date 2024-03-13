// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
