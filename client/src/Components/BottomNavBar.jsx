import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BottomNavBar = () => {
  return (
    <div className="container">
      <div className="locationdiv">
        <a href="#">
          <span className="hello">Hello</span> <br /> <LocationOnIcon /> Select
          you're address
        </a>
      </div>
      <div className="container">
        <a className="navbar2" href="#">
          All Parts
        </a>
        <a className="navbar2" href="#">
          Breaks
        </a>

        <a className="navbar2" href="#">
          Engine & Drivetrain
        </a>
        <a className="navbar2" href="#">
          Suspension
        </a>
        <a className="navbar2" href="#">
          Exhaust
        </a>
        <a className="navbar2" href="#">
          Wheels & Tires
        </a>
        <a className="navbar2" href="#">
          Interior
        </a>
        <a className="navbar2" href="#">
          Exterior
        </a>
        <a className="navbar2" href="#">
          Lights
        </a>
      </div>
    </div>
  );
};

export default BottomNavBar;
