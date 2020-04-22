const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));

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
  // console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
  const twiml = new MessagingResponse();

  twiml.message(
    "Thanks for reaching out to Unspecified! We ❤️ connecting with people and making awesome happen! What can we help you with today?"
  );

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(process.env.PORT || 3000, function () {
  console.log("server running on port 3000", "");
});