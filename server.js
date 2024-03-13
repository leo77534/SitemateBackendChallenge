// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

app.get("/api/issues", (req, res) => {
  res.json(issue);
});

app.post("/api/issues", (req, res) => {
  issue = req.body;
  console.log("Created Issue:", issue);
  res.json({ message: "Issue created successfully", issue });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
