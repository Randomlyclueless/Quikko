import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from local storage or API
    const storedReviews =
      JSON.parse(localStorage.getItem("vendorReviews")) || [];
    setReviews(storedReviews);
  }, []);

  const salesData = {
    labels:
      items.length > 0
        ? items.map((item) => item.name)
        : ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Sales (units)",
        data:
          items.length > 0
            ? items.map((item) => Math.floor(Math.random() * 300) + 50) // Random sales data
            : [150, 200, 90, 300],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Product Sales Performance",
      },
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Vendor Dashboard{" "}
      </h2>{" "}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Add Item Section */}{" "}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#f8f9fa",
          }}
          onClick={() => navigate("/add-item")}
        >
          <h3 style={{ color: "#007bff" }}> Add a New Item </h3>{" "}
        </div>{" "}
        {/* My Products Section */}{" "}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <h3> My Products </h3>{" "}
          {items.length > 0 ? (
            <ul>
              {" "}
              {items.map((item, index) => (
                <li key={index} style={{ marginBottom: "5px" }}>
                  {" "}
                  {item.name} - $ {item.price}{" "}
                </li>
              ))}{" "}
            </ul>
          ) : (
            <p> No products added yet. </p>
          )}{" "}
        </div>{" "}
      </div>{" "}
      {/* Customer Reviews Section */}{" "}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h3> Customer Reviews </h3>{" "}
        {reviews.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {" "}
            {reviews.map((review, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "4px",
                }}
              >
                <strong> {review.customer} </strong>: {review.comment}{" "}
              </li>
            ))}{" "}
          </ul>
        ) : (
          <p> No reviews available yet. </p>
        )}{" "}
      </div>{" "}
      {/* Sales Chart Section */}{" "}
      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <h3> Sales Performance </h3>{" "}
        <div style={{ height: "400px" }}>
          <Bar data={salesData} options={chartOptions} />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default VendorDashboard;
