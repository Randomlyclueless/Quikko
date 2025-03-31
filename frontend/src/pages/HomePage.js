import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/HomePage.css";

const categories = [
  { name: "Art & Craft", image: "art_craft.jpg", path: "/art-craft" },
  { name: "School Bags", image: "school_bags.jpg", path: "/school-bags" },
  {
    name: "Tiffin & Water Bottles",
    image: "tiffin_bottles.jpg",
    path: "/tiffin-bottles",
  },
  {
    name: "Pens, Pencils & Erasers",
    image: "pens_pencils.jpg",
    path: "/pens-pencils",
  },
  {
    name: "iPad/Kindle Section",
    image: "ipad_kindle.jpg",
    path: "/ipad-kindle",
  },
  { name: "Notebooks & Registers", image: "notebooks.jpg", path: "/notebooks" },
  {
    name: "Sticky Notes & Memo Pads",
    image: "sticky_notes.jpg",
    path: "/sticky-notes",
  },
  { name: "Markers & Highlighters", image: "markers.jpg", path: "/markers" },
  {
    name: "Files & Folders",
    image: "files_folders.jpg",
    path: "/files-folders",
  },
  {
    name: "Staplers & Punch Machines",
    image: "staplers.jpg",
    path: "/staplers",
  },
  {
    name: "Rulers & Geometry Sets",
    image: "geometry_sets.jpg",
    path: "/geometry",
  },
  {
    name: "Whiteboards & Chalkboards",
    image: "whiteboards.jpg",
    path: "/whiteboards",
  },
  {
    name: "Office Essentials",
    image: "office_essentials.jpg",
    path: "/office-essentials",
  },
  {
    name: "Calculators & Electronics",
    image: "calculators.jpg",
    path: "/calculators",
  },
  { name: "Gift & Wrapping Supplies", image: "gifts.jpg", path: "/gifts" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "#333",
        color: "#fff",
        minHeight: "100vh",
        paddingBottom: "50px",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#d63384",
        }}
      >
        <h1 style={{ color: "#fff" }}> Quikko Stationery </h1>{" "}
        <FaShoppingCart
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        />{" "}
      </nav>{" "}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 style={{ color: "#ff85a2" }}> Explore Our Categories </h2>{" "}
      </div>{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {" "}
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#444",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => navigate(category.path)}
          >
            <img
              src={`/assets/${category.image}`}
              alt={category.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />{" "}
            <h3 style={{ color: "#ff85a2", marginTop: "10px" }}>
              {" "}
              {category.name}{" "}
            </h3>{" "}
            <button
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#ff85a2",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Explore{" "}
            </button>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default HomePage;
