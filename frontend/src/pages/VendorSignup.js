import React, { useState } from "react";
import axios from "axios";
import "../styles/VendorSignup.css";

function VendorSignup() {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vendorData = {
      email,
      password,
      business_name: businessName,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/vendor/auth/register", // ✅ corrected
        vendorData
      );

      if (response.status === 201) {
        setMessage("✅ Vendor registered successfully!");
      } else {
        setMessage("⚠️ Unexpected response from server.");
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
    <div className="vendor-signup">
      <h2> Vendor Signup </h2>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Business Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"> Register </button>{" "}
      </form>{" "}
      {message && <p style={{ marginTop: "15px" }}> {message} </p>}{" "}
    </div>
  );
}

export default VendorSignup;
