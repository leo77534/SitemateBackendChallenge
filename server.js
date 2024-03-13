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

app.put("/api/issues", (req, res) => {
  issue = req.body;
  console.log("Updated Issue:", issue);
  res.json({ message: "Issue updated successfully", issue });
});

app.delete("/api/issues", (req, res) => {
  console.log("Deleted Issue:", issue);
  issue = null;
  res.json({ message: "Issue deleted successfully" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
