const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const notifyAdmins = ({ messageBody }) => {
  console.log('notify admins', process.env.ADMINS);

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
