import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VendorLoginPage from "./pages/VendorLogin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import VendorSignup from "./pages/VendorSignup";
import VendorDashboard from "./pages/vendorDashboard";
import NewProduct from "./pages/NewProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vlogin" element={<VendorLoginPage />} />{" "}
        <Route path="/vsignup" element={<VendorSignup />} />{" "}
        <Route path="/vhomepage" element={<VendorDashboard />} />{" "}
        <Route path="/newp" element={<NewProduct />} />{" "}
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/signup" element={<SignupPage />} />{" "}
        {/* Add other routes here */}{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
