require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Message Rooster",
    from: process.env.TWILIO_FROM_NUMBER,
    to: "+15558675309"
  })
  .then(message => console.log(message.sid));
