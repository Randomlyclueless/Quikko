import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItemForm = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleImageChange = (e) => {
    setItem({ ...item, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the item (e.g., to local storage or an API)
    const storedItems = JSON.parse(localStorage.getItem("vendorItems")) || [];
    localStorage.setItem("vendorItems", JSON.stringify([...storedItems, item]));

    // Navigate back to the dashboard
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {" "}
        Add New Item{" "}
      </h2>{" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={item.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />{" "}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={item.price}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />{" "}
        <textarea
          name="description"
          placeholder="Product Description"
          value={item.description}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            height: "100px",
          }}
        />{" "}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: "10px" }}
        />{" "}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Add Item{" "}
        </button>{" "}
      </form>{" "}
    </div>
  );
};

export default AddItemForm;
