import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    business_name: "",
    business_email: "",
    phone: "",
    tax_id: "",
    password: "",
    confirmPassword: "",
    owner_name: "",
    business_category: "",
    address: "",
  });

  // Initialize fake vendors in localStorage if not exists
  if (!localStorage.getItem("fakeVendors")) {
    localStorage.setItem(
      "fakeVendors",
      JSON.stringify([
        {
          id: 1,
          user_id: 1001,
          business_name: "Demo Vendor",
          business_email: "demo@vendor.com",
          phone: "1234567890",
          tax_id: "TAX001",
          password: "demo123",
          is_approved: true,
          created_at: new Date().toISOString(),
          owner_name: "Demo Owner",
          business_category: "General Supplies",
          address: "123 Demo St",
        },
      ])
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Create new fake vendor
    const fakeVendors = JSON.parse(localStorage.getItem("fakeVendors"));
    const newVendor = {
      id: fakeVendors.length + 1,
      user_id: Math.floor(1000 + Math.random() * 9000), // Random 4-digit ID
      ...formData,
      is_approved: false,
      created_at: new Date().toISOString(),
    };

    // Save to fake storage
    const updatedVendors = [...fakeVendors, newVendor];
    localStorage.setItem("fakeVendors", JSON.stringify(updatedVendors));

    // Set auth session
    localStorage.setItem(
      "fakeVendorAuth",
      JSON.stringify({
        vendor_id: newVendor.id,
        business_email: newVendor.business_email,
        business_name: newVendor.business_name,
        isAuthenticated: true,
      })
    );

    alert("Fake vendor account created! You can now login.");
    navigate("/vendor/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.header}> Vendor Registration </h2>{" "}
        <div style={styles.demoAlert}>
          <p> DEMO MODE - Using fake authentication </p>{" "}
        </div>{" "}
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label> Business Name * </label>{" "}
            <input
              type="text"
              name="business_name"
              value={formData.business_name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your business name"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Business Email * </label>{" "}
            <input
              type="email"
              name="business_email"
              value={formData.business_email}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your business email"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Phone Number * </label>{" "}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter your phone number"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Tax ID </label>{" "}
            <input
              type="text"
              name="tax_id"
              value={formData.tax_id}
              onChange={handleChange}
              style={styles.input}
              placeholder="Enter your tax identification number"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Owner Name * </label>{" "}
            <input
              type="text"
              name="owner_name"
              value={formData.owner_name}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Enter the owner's name"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Business Category * </label>{" "}
            <select
              name="business_category"
              value={formData.business_category}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value=""> Select Stationery Category </option>{" "}
              <option value="art_and_craft"> Art and Craft Supplies </option>{" "}
              <option value="office_stationery"> Office Stationery </option>{" "}
              <option value="school_supplies"> School Bags & Supplies </option>{" "}
              <option value="tech_accessories"> Tech Accessories </option>{" "}
              <option value="writing_instruments"> Pens & Pencils </option>{" "}
            </select>{" "}
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Business Address * </label>{" "}
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ ...styles.input, height: "80px" }}
              placeholder="Enter your business address"
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
              placeholder="Create a password"
            />
          </div>{" "}
          <div style={styles.formGroup}>
            <label> Confirm Password * </label>{" "}
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={styles.input}
              placeholder="Confirm your password"
            />
          </div>{" "}
          <button type="submit" style={styles.submitButton}>
            Register Vendor{" "}
          </button>{" "}
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
    maxWidth: "600px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    padding: "30px",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  demoAlert: {
    backgroundColor: "#fff3cd",
    color: "#856404",
    padding: "15px",
    borderRadius: "4px",
    marginBottom: "20px",
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
  },
};

export default VendorSignup;
