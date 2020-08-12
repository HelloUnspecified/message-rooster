const sendSms = require('../sendSms');

jest.mock('twilio');

const mockMessageBody = 'this is a sample message';

xtest('sendSms.notifyAdmins', () => {
  const response = sendSms.notifyAdmins({ messageBody: mockMessageBody });
  expect(response).toBe(true);
});
