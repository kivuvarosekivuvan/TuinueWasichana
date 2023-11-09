import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [isDonationSubmitted, setDonationSubmitted] = useState(false);

  const handleDonate = (event) => {
    event.preventDefault();

    if (isAnonymous || (name && email && phoneNumber && amount > 0)) {
      fetch('https://charities-donor.onrender.com/api/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: isAnonymous ? 'Anonymous' : name,
          email,
          phoneNumber,
          amount,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Reset the form and provide feedback to the user upon successful donation
            setIsAnonymous(false);
            setName("");
            setEmail("");
            setPhoneNumber("");
            setAmount(0);
            setDonationSubmitted(true);
          } else {
            throw new Error('Failed to submit donation');
          }
        })
        .catch((error) => {
          alert(`Failed to submit donation: ${error.message}`);
        });
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <div>
      <h2>Donate Page</h2>
      {isDonationSubmitted && (
        <p>Thank you for your donation!</p>
      )}
      <form onSubmit={handleDonate}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
            />
            Donate Anonymously
          </label>
        </div>

        {!isAnonymous && (
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>
            <br />

            <label>
              Amount to Donate:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </label>
            <br />
          </div>
        )}

        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
