import React, { useState } from 'react';

const SanitaryTowelsDonationPage = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isDonationComplete, setIsDonationComplete] = useState(false);
  const [error, setError] = useState('');

  const handleDonation = async (e) => {
    e.preventDefault();

    if (!donationAmount || !name || !email || !paymentMethod) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      // Construct the data payload
      const donationData = {
        donationAmount,
        name,
        email,
        paymentMethod
      };

      // Replace 'YOUR_BACKEND_ENDPOINT' with your actual API endpoint for donation processing
      const response = await fetch('https://charities-donor.onrender.com/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add any necessary headers for authentication or other purposes
        },
        body: JSON.stringify(donationData)
      });

      if (response.ok) {
        setIsDonationComplete(true);
        // Further logic upon successful donation completion
      } else {
        // Handle the scenario where the donation processing fails
        // Display an error message or implement a retry mechanism
        setError('Failed to process donation. Please try again.');
      }
    } catch (error) {
      // Handle potential errors in donation submission (e.g., network errors)
      console.error('Error submitting donation:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Donate Sanitary Towels</h1>
      {isDonationComplete ? (
        <div>
          <p>Thank you for your donation!</p>
          {/* Add further instructions or options for sharing about the donation */}
        </div>
      ) : (
        <form onSubmit={handleDonation}>
          <div>
            <label>Donation Amount:</label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              {/* Add other payment options as needed */}
            </select>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Donate</button>
        </form>
      )}
    </div>
  );
};

export default SanitaryTowelsDonationPage;
