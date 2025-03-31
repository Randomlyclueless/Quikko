import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import loginImage from "../assets/login.jpg"; // Adjust path if needed

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogin = (e) => {
    e.preventDefault();

    // Fake authentication check
    if (email === "alice@example.com" && password === "test123") {
      console.log("Login successful!");
      navigate("/home"); // Redirect to homepage
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "70%",
          maxWidth: "900px",
          backgroundColor: "white",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Image */}{" "}
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <img
            src={loginImage}
            alt="Login"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />{" "}
        </div>{" "}
        {/* Right Side - Login Form */}{" "}
        <div
          style={{
            flex: 1,
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
            Login{" "}
          </h2>{" "}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />{" "}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />{" "}
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "10px",
              }}
            >
              Login{" "}
            </button>{" "}
          </form>{" "}
          <a
            href="/signup"
            style={{
              color: "#007bff",
              textDecoration: "none",
              marginTop: "15px",
              textAlign: "center",
            }}
          >
            Sign up here{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default LoginPage;
