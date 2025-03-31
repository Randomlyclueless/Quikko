import React, { useState } from "react";
import axios from "axios";
import signup from "../assets/signup.jpg";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, email, contact, address, password, confirmPassword } =
      formData;

    if (
      !name ||
      !email ||
      !contact ||
      !address ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      setLoading(false);
      return;
    }

    if (!/^\d+$/.test(contact)) {
      setError("Contact number should contain only digits");
      setLoading(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "/signup",
        { name, email, contact, address, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Signup successful! Redirecting to homepage...");
        navigate("/home"); // ✅ Redirect to Homepage
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Signup failed");
      } else if (err.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError("Error signing up. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={{ flex: 1 }}>
          <img
            src={signup}
            alt="Signup"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />{" "}
        </div>{" "}
        <div style={formStyle}>
          <h2 style={titleStyle}> Create Account </h2>{" "}
          {error && <p style={errorStyle}> {error} </p>}{" "}
          <form onSubmit={handleSignup}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Phone Number"
              value={formData.contact}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              style={{ ...inputStyle, height: "80px" }}
              required
            />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (min 6 characters)"
                value={formData.password}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={togglePasswordStyle}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}{" "}
              </button>{" "}
            </div>{" "}
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <button type="submit" style={buttonStyle} disabled={loading}>
              {" "}
              {loading ? "Creating Account..." : "Sign Up"}{" "}
            </button>{" "}
          </form>{" "}
          <p style={loginTextStyle}>
            Already have an account ?{" "}
            <Link to="/login" style={linkStyle}>
              Log in here{" "}
            </Link>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
  padding: "20px",
};

const formContainerStyle = {
  display: "flex",
  width: "100%",
  maxWidth: "1000px",
  backgroundColor: "white",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  overflow: "hidden",
};

const formStyle = {
  flex: 1,
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const titleStyle = {
  fontSize: "2rem",
  marginBottom: "20px",
  color: "#333",
  textAlign: "center",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "12px",
  width: "100%",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1rem",
  marginTop: "10px",
  transition: "background-color 0.3s",
  hover: {
    backgroundColor: "#0056b3",
  },
};

const linkStyle = {
  color: "#007bff",
  textDecoration: "none",
  fontWeight: "500",
};

const loginTextStyle = {
  textAlign: "center",
  marginTop: "20px",
  color: "#666",
};

const errorStyle = {
  color: "#dc3545",
  backgroundColor: "#f8d7da",
  padding: "10px",
  borderRadius: "5px",
  marginBottom: "15px",
  textAlign: "center",
};

const togglePasswordStyle = {
  position: "absolute",
  right: "10px",
  top: "10px",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
};

export default SignupPage;
