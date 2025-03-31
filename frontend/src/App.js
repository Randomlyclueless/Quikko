import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import Vendor from "./pages/Vendor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />{" "}
        <Route path="/signup" element={<SignupPage />} />{" "}
        <Route path="/home" element={<HomePage />} />{" "}
        <Route path="/vendorsignup" element={<Vendor />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
