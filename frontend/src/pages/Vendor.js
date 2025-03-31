import React, { useState } from "react";

const VendorSignup = () => {
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    email: "",
    phone: "",
    businessCategory: "",
    address: "",
    password: "",
    confirmPassword: "",
    shopLogo: null,
    businessLicense: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Vendor Signup Data:", formData);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      {/* Left Side Image */}{" "}
      <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
        <img
          src="/assets/vendorsignin.jpg" // ✅ Image from `public/assets/`
          alt="Vendor Signup"
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />{" "}
      </div>
      {/* Right Side Form */}{" "}
      <div
        style={{
          flex: 1,
          padding: "30px",
          maxWidth: "450px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#d63384" }}>
          {" "}
          Vendor Signup{" "}
        </h2>{" "}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="shopName"
            placeholder="Shop Name"
            value={formData.shopName}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <input
            type="text"
            name="ownerName"
            placeholder="Owner's Name"
            value={formData.ownerName}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <select
            name="businessCategory"
            value={formData.businessCategory}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value=""> Select Business Category </option>{" "}
            <option value="Art & Craft"> Art & Craft </option>{" "}
            <option value="Stationery"> Stationery </option>{" "}
            <option value="School Supplies"> School Supplies </option>{" "}
            <option value="Office Supplies"> Office Supplies </option>{" "}
            <option value="Custom Printing"> Custom Printing </option>{" "}
          </select>{" "}
          <textarea
            name="address"
            placeholder="Business Address"
            value={formData.address}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={inputStyle}
          />{" "}
          <label style={labelStyle}> Shop Logo: </label>{" "}
          <input
            type="file"
            name="shopLogo"
            onChange={handleFileChange}
            style={inputStyle}
          />{" "}
          <label style={labelStyle}> Business License: </label>{" "}
          <input
            type="file"
            name="businessLicense"
            onChange={handleFileChange}
            style={inputStyle}
          />{" "}
          <button type="submit" style={buttonStyle}>
            {" "}
            Sign Up{" "}
          </button>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

// Inline Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#d63384",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  marginBottom: "5px",
  fontWeight: "bold",
};

export default VendorSignup;
