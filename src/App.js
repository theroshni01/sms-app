// In your React component (e.g., SendMessageForm.js)
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server
      await axios.post('http://localhost:3000/sendSMS', { phoneNumber, message });

      // Reset the form
      setPhoneNumber('');
      setMessage('');
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <br />
      <button type="submit">Send SMS</button>
    </form>
  );
};

export default App;
