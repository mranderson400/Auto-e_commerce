import React from 'react'
import TrackOrder from '../Components/TrackOrder'
import TopNavBar from '../Components/TopNavBar'
import BottomNavBar from '../Components/BottomNavBar'

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
import TrackOrder from '../Components/TrackOrder';

const NavBar = () => {
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
    <div>
      <div>
        <TrackOrder />
      </div>
      <div>
        <TopNavBar />
      </div>
      <div>
        <BottomNavBar />
      </div>
    </div>
  )
}

export default NavBar