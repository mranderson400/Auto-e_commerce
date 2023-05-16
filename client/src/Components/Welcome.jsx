import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Carousel from "./Carousel";
import NavBar from "./NavBar";

const Welcome = () => {
  return (
    <>
      <NavBar />
      <hr />
      <h3 className="text-3xl py-2 font-medium">Robert Anderson</h3>
      <div className="bg-gray-100 w-[159vh] h-[50vh]">
        <h1>Popular Items</h1>
        <Carousel />
      </div>
    </>
  );
};

export default Welcome;
