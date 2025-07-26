import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BottomNavBar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "10px",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      >
        <LocationOnIcon style={{ marginRight: "5px" }} />
        <span>Select your address</span>
      </div>

      <div
        className="linksContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          All Parts
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Brakes
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Engine &amp; Drivetrain
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Suspension
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Exhaust
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Wheels &amp; Tires
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Interior
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Exterior
        </a>
        <a
          style={{
            padding: "10px",
            margin: "5px",
            color: "#333",
            textDecoration: "none",
            backgroundColor: "lightblue",
            borderRadius: "8px",
          }}
          href="#"
        >
          Lights
        </a>
        </div>
    </div>
  );
};

export default BottomNavBar;