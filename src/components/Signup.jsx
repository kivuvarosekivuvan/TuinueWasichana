import React, { useState } from "react";

function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = document.getElementById("role").value;

    if (authenticateUser(email, password)) {
      alert("Login successful! Redirecting to the main page...");

      // Redirect to the home page 
      window.location.href = '/';
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    if (registerUser(username, email, password)) {
      alert("Account registered successfully. You can now log in.");
      setIsLoginForm(true);
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  async function authenticateUser(email, password) {
    try {
      // Make an API request to your server to authenticate the user
      const response = await fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Authentication successful
        return true;
      } else {
        // Authentication failed
        return false;
      }
    } catch (error) {
      console.error("Authentication error:", error);
      return false;
    }
  }

  async function registerUser(username, email, password) {
    try {
      // Make an API request to your server to register the user
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.ok) {
        // Registration successful
        return true;
      } else {
        // Registration failed
        return false;
      }
    } catch (error) {
      console.error("Registration error:", error);
      return false;
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gray-300 flex justify-center items-center md:p-4">
      <div className="bg-gray-700 sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-1/2 p-4 rounded-lg">
        <h1 className="text-2xl font-semibold bg-dark bg-pink-700 flex justify-center align-center">
          {isLoginForm ? 'Login' : 'Sign Up'}
        </h1>
        {isLoginForm ? (
          <form className="text-left" onSubmit={handleSubmit}>
            {/* Input fields and labels for login */}
            {/* You can use JSX to avoid selecting elements by ID */}
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <div className="input-container">
            <label htmlFor="purpose">Purpose</label>
            <select
              id="role"
              required
              className="w-full p-2 border rounded border-blue-200 mb-2"
            >
              <option value="admin">Admin</option>
              <option value="doner">Doner</option>
              <option value="others">Others</option>
            </select>
            </div>

            <button
              className="bg-blue-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="submit"
            >
              Login
            </button>
          </form>
        ) : (
          <form className="text-left" onSubmit={handleRegistration}>
            {/* Input fields and labels for registration */}
            <div className="input-container">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <div className="input-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              className="w-full p-2 border rounded border-blue-200 mb-2"
            />
            </div>
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <div className="input-container">
              <label htmlFor="signup-email">Email</label>
              <input
                type="text"
                id="signup-email"
                placeholder="Email"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <div className="input-container">
            <label htmlFor="purpose">Purpose</label>
            <select
              id="role"
              required
              className="w-full p-2 border rounded border-blue-200 mb-2"
            >
              <option value="doner">Doner</option>
              <option value="admin">Admin</option>
              <option value="others">Others</option>
            </select>
            </div>
            <div className="input-container">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                placeholder="Password"
                required
                className="w-full p-2 border rounded border-blue-200 mb-2"
              />
            </div>
            <button
              className=" bg-gray-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        )}
        <p>
          {isLoginForm ? "Don't have an account? " : "Already have an account? "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={toggleForm}
          >
            Sign {isLoginForm ? 'up' : 'in'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Authorization;