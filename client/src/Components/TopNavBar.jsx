import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Popover, Button, Box } from "@mui/material";

const TopNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const className = open ? "language-popover" : undefined;

  return (
    <Box sx={{ backgroundColor: "#f0f0f0" }}>
      <Box sx={{ padding: "10px", textAlign: "right" }}>
        <a href="#" style={{ color: "#333" }}>
          Track order
        </a>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          flexWrap: "wrap",
        }}
      >
        <MenuIcon sx={{ marginRight: "10px", color: "#333" }} />
        <h1 sx={{ fontSize: "24px", color: "#333", marginRight: "auto" }}>
          Carparts
        </h1>
        <Box sx={{ margin: "auto", minWidth: "50%" }}>
          <TextField
            placeholder="Search by Part Name, Part Number, Vehicle or Brand"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon style={{ color: "#999" }} />
                </InputAdornment>
              ),
              style: { borderRadius: "50px" },
            }}
            sx={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
          <TextField
            placeholder="EN"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LanguageIcon style={{ color: "#999" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowDropDownIcon style={{ color: "#999" }} />
                </InputAdornment>
              ),
            }}
            sx={{ marginRight: "10px" }}
          />
          <Box
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <TextField
              variant="outlined"
              placeholder="Hello, sign-in"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ArrowDropDownIcon style={{ color: "#999" }} />
                  </InputAdornment>
                ),
              }}
            />
            <Popover
              className={className}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 370, left: 1350 }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFFF00",
                    color: "black",
                    marginBottom: "10px",
                  }}
                >
                  Sign in
                </Button>
                <p sx={{ fontSize: "14px", color: "#999" }}>
                  New Customer?{" "}
                  <a href="#" style={{ color: "red" }}>
                    Start here
                  </a>
                </p>
                <hr sx={{ width: "100%", margin: "10px 0" }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href="#"
                    sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                  >
                    Your List |
                  </a>
                  <a
                    href="#"
                    sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                  >
                    Create a list
                  </a>
                  <Box
                    sx={{
                      height: "10rem",
                      width: "1px",
                      backgroundColor: "#999",
                      margin: "0 10px",
                    }}
                  ></Box>
                  <Box>
                    <h3
                      style={{
                        fontSize: "15px",
                        color: "#333",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      Your Account
                    </h3>
                    <Box>
                      <a
                        href="#"
                        sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                      >
                        Account
                      </a>
                    </Box>
                    <Box>
                      <a
                        href="#"
                        sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                      >
                        Orders
                      </a>
                    </Box>
                    <Box>
                      <a
                        href="#"
                        sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                      >
                        Watch List
                      </a>
                    </Box>
                    <Box>
                      <a
                        href="#"
                        sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                      >
                        Address
                      </a>
                    </Box>
                    <Box>
                      <a
                        href="#"
                        sx={{ fontSize: "14px", color: "#333", margin: "5px" }}
                      >
                        Browsing History
                      </a>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Popover>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNavBar;
