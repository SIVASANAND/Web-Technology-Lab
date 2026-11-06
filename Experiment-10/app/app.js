// Experiment 10 - HTML form request handling using Node.js and MongoDB
const http = require("http");
const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
const PORT = process.env.PORT || 6000;

// escape text before putting it into HTML
function esc(text) {
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const server = http.createServer(function (req, res) {
  if (req.url === "/" && req.method === "GET") {
    // show the registration form
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(path.join(__dirname, "home.html")).pipe(res);
  } else if (req.url === "/server" && req.method === "POST") {
    let rawData = "";
    req.on("data", function (data) {
      rawData += data;
    });
    req.on("end", async function () {
      const input = new URLSearchParams(rawData);
      const user = {
        name: input.get("name"),
        password: input.get("password"),
        age: input.get("age"),
        mobile: input.get("mobile"),
        email: input.get("email"),
        gender: input.get("gender"),
        state: input.get("state"),
        skills: input.getAll("skills").join(", ")
      };

      try {
        // store the form data in MongoDB, then read it back from the database
        const users = client.db("mydb").collection("users");
        const result = await users.insertOne(user);
        const saved = await users.findOne({ _id: result.insertedId });

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1 style='text-align:center;color:blue'><u>User Submitted Details</u></h1>");
        res.write("<table border='1' cellpadding='10' style='margin:auto;border-collapse:collapse;color:blue'>");
        res.write("<tr><td>Name</td><td>" + esc(saved.name) + "</td></tr>");
        res.write("<tr><td>Password</td><td>" + esc(saved.password) + "</td></tr>");
        res.write("<tr><td>Age</td><td>" + esc(saved.age) + "</td></tr>");
        res.write("<tr><td>Mobile Number</td><td>" + esc(saved.mobile) + "</td></tr>");
        res.write("<tr><td>Email</td><td>" + esc(saved.email) + "</td></tr>");
        res.write("<tr><td>Gender</td><td>" + esc(saved.gender) + "</td></tr>");
        res.write("<tr><td>State</td><td>" + esc(saved.state) + "</td></tr>");
        res.write("<tr><td>Skills</td><td>" + esc(saved.skills) + "</td></tr>");
        res.write("</table>");
        res.end();
      } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Database error: " + err.message);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

client.connect().then(function () {
  server.listen(PORT, function () {
    console.log("Connected to MongoDB. Server running at http://localhost:" + PORT);
  });
}).catch(function (err) {
  console.log("Could not connect to MongoDB: " + err.message);
});
