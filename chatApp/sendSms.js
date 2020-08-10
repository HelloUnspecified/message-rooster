const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// TODO: the intent here is for this to hold the send functions.
// Sending whatever message corresponds to the client and current state of sender (client's customer)

/**
 * Function to trigger notification to admin that a nes message was received
 */
const notifyAdmins = ({ messageBody }) => {
  console.log("notify admins", process.env.ADMINS);

  // TODO: this will need to be a setting on the client's account, so will have to look that up using the props given

  process.env.ADMINS.split(",").forEach((adminNumber) => {
    client.messages
      .create({
        body: `New message to Unspecified received: '${messageBody}'`,
        from: process.env.TWILIO_FROM_NUMBER,
        to: adminNumber,
      })
      .then((message) => console.log(message.status, message.sid))
      .done();
  });
};

module.exports = {
  notifyAdmins,
};
