import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    business_email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Check if fake vendors exist in localStorage
    const fakeVendors = JSON.parse(localStorage.getItem("fakeVendors") || "[]");

    // Find vendor by email
    const vendor = fakeVendors.find(
      (v) => v.business_email === formData.business_email
    );

    if (!vendor) {
      setError("No vendor found with this email");
      return;
    }

    if (vendor.password !== formData.password) {
      setError("Incorrect password");
      return;
    }

    if (!vendor.is_approved) {
      setError("Your account is pending approval");
      return;
    }

    // Set auth session
    localStorage.setItem(
      "fakeVendorAuth",
      JSON.stringify({
        vendor_id: vendor.id,
        business_email: vendor.business_email,
        business_name: vendor.business_name,
        isAuthenticated: true,
      })
    );

    navigate("/vendor/dashboard");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}> Vendor Login </h2>{" "}
        {error && <div style={styles.error}> {error} </div>}{" "}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label> Business Email * </label>{" "}
            <input
              type="email"
              name="business_email"
              value={formData.business_email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your registered email"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Password * </label>{" "}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>{" "}
          <button type="submit" style={styles.submitButton}>
            Login{" "}
          </button>{" "}
          <div style={styles.linkContainer}>
            <p>
              Don 't have an account?{" "}
              <span
                style={styles.link}
                onClick={() => navigate("/vendor/signup")}
              >
                Register here{" "}
              </span>{" "}
            </p>{" "}
            <p>
              <span
                style={styles.link}
                onClick={() =>
                  alert("Password reset functionality would go here")
                }
              >
                Forgot password ?
              </span>{" "}
            </p>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "30px",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "600",
  },
  error: {
    color: "#d32f2f",
    backgroundColor: "#fde8e8",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "15px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "16px",
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "600",
  },
  linkContainer: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
    color: "#666",
  },
  link: {
    color: "#1976d2",
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "500",
  },
};

export default VendorLogin;
