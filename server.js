// server/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = 5000;

// Dummy JSON data (you can also create a separate data.json file)
// const colleges = [
//   {
//     name: "College A",
//     rating: 4.5,
//     fees: 100000,
//     userRating: 4.3,
//     featured: true,
//   },
//   {
//     name: "College B",
//     rating: 3.9,
//     fees: 120000,
//     userRating: 3.8,
//     featured: false,
//   },
//   {
//     name: "College C",
//     rating: 4.2,
//     fees: 150000,
//     userRating: 4.1,
//     featured: true,
//   },
//   {
//     name: "College D",
//     rating: 4.8,
//     fees: 90000,
//     userRating: 4.5,
//     featured: false,
//   },
//   // Add more entries here...
// ];
//we can either use  to create dummy datas
// const fs = require('fs');

// const colleges = [];
// const locations = ["Cambridge, MA", "Stanford, CA", "Chicago, IL", "New York, NY", "Pasadena, CA", "Princeton, NJ", "Philadelphia, PA", "Durham, NC", "Los Angeles, CA", "Berkeley, CA"];

// for (let i = 1; i <= 200; i++) {
//   colleges.push({
//     name: `College ${i}`,
//     location: locations[Math.floor(Math.random() * locations.length)],
//     ranking: i
//   });
// }

// fs.writeFileSync('data.json', JSON.stringify(colleges, null, 2));
// console.log('data.json has been created with 200 college entries.');

// Enable CORS for React
app.use(cors());

// Serve the JSON data as an API endpoint

app.get("/api/colleges", (req, res) => {
  fs.readFile("dummy.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
