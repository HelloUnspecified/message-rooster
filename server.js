const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sms", (req, res) => {
  console.log(`Incoming message from ${req.body.From}: ${req.body.Body}`);
  const twiml = new MessagingResponse();

  twiml.message("Thanks for reaching out to Unspecified! We ❤️ connecting with people and making awesome happen! What can we help you with today?");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});