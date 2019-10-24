// Require Request Module
const request = require("request");
// Require File System module
const fs = require("fs");
// Create a variable for the node input in order to pass into functions
const arg = process.argv.slice(2).join(" ");
request(arg, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Example homepage.
  // Write the body of www.example.com/ into our local index.html file; if error, throw error
  fs.writeFile("index.html", body, function(err) {
    if (err) throw err;
    // If no error print the below log to terminal
    console.log("Downloaded and saved 3261 bytes to ./index.html");
  });
});
