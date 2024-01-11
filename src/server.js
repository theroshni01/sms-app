// In your Express.js server (e.g., server.js)
const express = require('express');
const bodyParser = require('body-parser');
const open = require('open');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Route to handle SMS requests
app.post('http://localhost:3000/sendSMS', (req, res) => {
  const { phoneNumber, message } = req.body;

  // TODO: Implement the logic to send SMS from your phone
  // You might need to trigger an SMS intent or use some other method depending on your phone and OS
  const smsUri = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

  // Open the SMS URI, prompting the user to send an SMS
  open(smsUri);

  console.log(`Sending SMS to ${phoneNumber} with message: ${message}`);

  // For simplicity, we'll just open a new tab with a success message
  // open(`http://localhost:${port}/sms-success`);

  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
