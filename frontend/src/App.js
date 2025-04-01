import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorLoginPage from "./pages/VendorLogin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Vendor from "./pages/Vendor";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vlogin" element={<VendorLoginPage />} />{" "}
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/vendor" element={<Vendor />} />{" "}
        <Route path="/signup" element={<SignupPage />} />{" "}
        {/* Add other routes here */}{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
