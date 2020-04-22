const express = require("express");
const app = express();
var cors = require("cors");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

app.get("/", (req, res) => res.send("Working!!!"));

app.post("/sms", (req, res) => {
  console.log(`Incoming message from ${req}: ${res}`);
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end("BACON");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000", "");
});