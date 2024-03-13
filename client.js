// client.js
const axios = require("axios");

const baseURL = "http://localhost:3000/api/issues";

async function createIssue(issue) {
  try {
    const response = await axios.post(baseURL, issue);
    console.log("Create Issue Response:", response.data);
  } catch (error) {
    console.error("Error creating issue:", error.response.data);
  }
}

// Example usage
const newIssue = {
  id: 1,
  title: "First Issue",
  description: "Issue for testing purposes",
};

createIssue(newIssue);
