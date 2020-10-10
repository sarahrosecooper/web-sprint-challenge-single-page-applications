import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      welcome to your new favorite pizza place!
      <br></br>
      <Link to="/pizza">
        <button>Place your order here!</button>
      </Link>
    </div>
  );
};

export default Homepage;
