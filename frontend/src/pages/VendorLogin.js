import React, { useState } from "react";
import axios from "axios";
import "../styles/VendorLogin.css"; // Create a CSS file if needed

function VendorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/vendor/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const { access_token, vendor_id } = response.data;
        localStorage.setItem("vendorToken", access_token);
        localStorage.setItem("vendorId", vendor_id);
        setMessage("✅ Login successful!");
        // Redirect or navigate to vendor dashboard here
      }
    } catch (error) {
      if (error.response) {
        setMessage(`❌ ${error.response.data.error}`);
      } else {
        setMessage("❌ Failed to connect to backend.");
      }
    }
  };

  return (
    <div className="vendor-login">
      <h2> Vendor Login </h2>{" "}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"> Login </button>{" "}
      </form>{" "}
      {message && <p className="message"> {message} </p>}{" "}
    </div>
  );
}

export default VendorLogin;
