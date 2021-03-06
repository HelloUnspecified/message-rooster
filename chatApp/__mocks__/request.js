const http = require('http');

export default function request(url) {
  return new Promise((resolve) => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({ path: url }, (response) => {
      let data = '';
      response.on('data', (_data) => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}

const sampleSendResponse = {
  account_sid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  address_requirements: 'none',
  address_sid: 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  api_version: '2010-04-01',
  beta: false,
  capabilities: {
    mms: true,
    sms: false,
    voice: true,
  },
  date_created: 'Thu, 30 Jul 2015 23:19:04 +0000',
  date_updated: 'Thu, 30 Jul 2015 23:19:04 +0000',
  emergency_status: 'Active',
  emergency_address_sid: 'ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  friendly_name: '(808) 925-5327',
  identity_sid: 'RIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  origin: 'origin',
  phone_number: '+15005550006',
  sid: 'PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  sms_application_sid: null,
  sms_fallback_method: 'POST',
  sms_fallback_url: '',
  sms_method: 'POST',
  sms_url: '',
  status_callback: '',
  status_callback_method: 'POST',
  trunk_sid: null,
  uri:
    '/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/IncomingPhoneNumbers/PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json',
  voice_application_sid: null,
  voice_caller_id_lookup: false,
  voice_fallback_method: 'POST',
  voice_fallback_url: null,
  voice_method: 'POST',
  voice_url: 'http://demo.twilio.com/docs/voice.xml',
  bundle_sid: 'BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
};
