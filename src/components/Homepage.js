import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      This is the homepage
      <Link to="/">Home</Link>
      <Link to="/pizza">
        <button>Place your order here!</button>
      </Link>
    </div>
  );
};

export default Homepage;
