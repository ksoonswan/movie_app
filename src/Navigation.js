import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Homepage</Link>
      <Link to="/about">about</Link>
    </div>
  );
}

export default Navigation;