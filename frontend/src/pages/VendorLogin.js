import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/login.jpg";

const VendorLoginPage = () => {
  const [vendorId, setVendorId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleVendorLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Fake authentication logic
    setTimeout(() => {
      if (
        vendorId === "vendor123" &&
        email === "vendor@example.com" &&
        password === "password"
      ) {
        console.log("Vendor login successful!");
        navigate("/vendor/dashboard");
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 1000);
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
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <img
            src={loginImage}
            alt="Vendor Login"
            style={{ width: "100%", height: "500px", objectFit: "cover" }}
          />{" "}
        </div>{" "}
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
            Vendor Login{" "}
          </h2>{" "}
          <form onSubmit={handleVendorLogin}>
            <input
              type="text"
              placeholder="Enter vendor ID"
              value={vendorId}
              onChange={(e) => setVendorId(e.target.value)}
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
              type="email"
              placeholder="Enter vendor email"
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
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter vendor password"
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
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  background: "none",
                  border: "none",
                  color: "#666",
                  cursor: "pointer",
                }}
              >
                {showPassword ? "Hide" : "Show"}{" "}
              </button>{" "}
            </div>{" "}
            {error && (
              <p style={{ color: "red", marginBottom: "15px" }}> {error} </p>
            )}{" "}
            <button
              type="submit"
              disabled={loading}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                marginTop: "10px",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Logging in..." : "Login"}{" "}
            </button>{" "}
          </form>{" "}
          <p
            onClick={() => navigate("/vendor/signup")}
            style={{
              color: "#28a745",
              textDecoration: "underline",
              marginTop: "15px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            Vendor Sign up here{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default VendorLoginPage;
