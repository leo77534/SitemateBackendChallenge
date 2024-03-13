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

async function readIssue() {
  try {
    const response = await axios.get(baseURL);
    console.log("Read Issue:", response.data);
  } catch (error) {
    console.error("Error reading issue:", error.response.data);
  }
}

async function updateIssue(issue) {
  try {
    const response = await axios.put(baseURL, issue);
    console.log("Update Issue Response:", response.data);
  } catch (error) {
    console.error("Error updating issue:", error.response.data);
  }
}

async function deleteIssue() {
  try {
    const response = await axios.delete(baseURL);
    console.log("Delete Issue Response:", response.data);
  } catch (error) {
    console.error("Error deleting issue:", error.response.data);
  }
}

// Example
const newIssue = {
  id: 1,
  title: "First Issue",
  description: "Issue for testing purposes",
};

createIssue(newIssue);
readIssue();
updateIssue({ ...newIssue, description: "This issue is updated" });
deleteIssue();
