require("dotenv").config();

const http = require("http");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const { MessagingResponse } = require("twilio").twiml;
const cors = require("cors");

// TODO: beginnings of connecting to fauna to use as data source
const faunadb = require("faunadb");
const q = faunadb.query;

const sendSms = require("./sendSms");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.options("*", cors());

app.get("/", (req, res) => res.send("Working!!!"));

/**
 * This is the end point that gets fired when a new message comes into Twilio.
 * Twilio will then call this function with the received message.
 */
app.post("/sms", (req, res) => {
  // TODO: lots needs to happen in here. The steps I'm thinking of are:
  // 1. connect number message sent to, to our client (or have urls for each separate client so that we can possibly get client id from url)
  // 2. look up in that client's customer base for a match to who message is from
  // 3. send specific response based on is user is existing or new
  const messageBody = req.body.Body;

  console.log(`Incoming message from ${req.body.From}: ${messageBody}`);
  const twiml = new MessagingResponse();

  twiml.message(
    "Thanks for reaching out to Unspecified! We ❤️ connecting with people and making awesome happen! What can we help you with today?"
  );

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());

  sendSms.notifyAdmins({ messageBody });
});

http.createServer(app).listen(process.env.PORT || 3000, () => {
  console.log("server running on port 3000", "");
});
