// Require Request Module
const request = require("request");
// Require File System module
const fs = require("fs");
// Create variable to pass the given URL
const url = process.argv[2];
// Create a variable to pass the local file
const file = process.argv[3];
// Create a variabe to obtain the size of the index.hmtl file
const stats = fs.statSync("index.html");
// Convert size into bytes
const sizeBytes = stats.size;
// Test to confirm variables are correct
console.log(url);
console.log(file);
request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Example homepage.
  // Write the body of www.example.com/ into our local index.html file; if error, throw error
  fs.writeFile(file, body, function(err) {
    if (err) throw err;
    // If no error print the below log to terminal
    console.log(`Downloaded and saved ${sizeBytes} bytes to ${file}`);
  });
});

// find the size of the response (property)
