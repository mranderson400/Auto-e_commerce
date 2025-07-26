import React, { useState } from "react";
import { ArrowDropDown } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const AdvancedSearch = () => {
  const [options, setOptions] = useState([
    { id: 1, label: "Year", value: "Year", anchorEl: null },
    { id: 2, label: "Make", value: "Make", anchorEl: null },
    { id: 3, label: "Model", value: "Model", anchorEl: null },
    { id: 4, label: "Submodel", value: "Submodel", anchorEl: null },
    { id: 5, label: "Engine", value: "Engine", anchorEl: null },
  ]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleClick = (id, event) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, anchorEl: event.currentTarget } : option
      )
    );
    setIsPopoverOpen(true);
  };

  const handleClose = (id, event) => {
    if (event?.target) {
      setOptions((prevOptions) =>
        prevOptions.map((option) => {
          if (option.id === id) {
            return {
              ...option,
              anchorEl: null,
              value: event.target.textContent || option.value,
            };
          }
          return option;
        })
      );
    }
    setIsPopoverOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        overflowX: "auto",
        justifyContent:"center"
      }}
    >
      <img
        src="https://cdn.dribbble.com/userupload/3261442/file/original-79302dac2eb04d0f9aecac39e67b596b.png?resize=400x0"
        alt="Description"
        style={{
          width: "40px",
          height: "40px",
          objectFit: "cover",
          borderRadius:'50%'
        }}
      />
      <span
        className="input-text"
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Select your Vehicle
      </span>
      {isPopoverOpen && <div className="overlay" />}
      {options.map((option) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "5px",
            borderRadius: "4px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          key={option.id}
          onClick={(event) => handleClick(option.id, event)}
        >
          <p
            style={{
              fontSize: "14px",
              color: "#333",
            }}
          >
            {option.value}
          </p>
          <ArrowDropDown />
          <Popover
            open={Boolean(option.anchorEl)}
            anchorEl={option.anchorEl}
            onClose={(event) => handleClose(option.id, event)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: 640, left: 477 }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            style={{ paper: { maxHeight: "200px", overflowY: "auto" } }}
          >
            {option.label === "Year" ? (
              <>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2000">
                  2000
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2001">
                  2001
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2002">
                  2002
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2003">
                  2003
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2004">
                  2004
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2005">
                  2005
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2006">
                  2006
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2007">
                  2007
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2008">
                  2008
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2009">
                  2009
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2010">
                  2010
                </MenuItem>
              </>
            ) : option.label === "Make" ? (
              <>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="Honda">
                  Honda
                </MenuItem>
              </>
            ) : option.label === "Model" ? (
              <>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="49er">
                  49er
                </MenuItem>
              </>
            ) : option.label === "Submodel" ? (
              <>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="Gs">
                  Gs
                </MenuItem>
              </>
            ) : option.label === "Engine" ? (
              <>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2">
                  2
                </MenuItem>
                <MenuItem onClick={(event) => handleClose(option.id, event)} value="2">
                  3
                </MenuItem>
              </>
            ) : null}
          </Popover>
        </div>
      ))}
      <Link to="/some-path" style={{ textDecoration: "none" }}>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          GO
        </button>
      </Link>
    </div>
  );
};

export default AdvancedSearch;
