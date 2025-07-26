import React from "react";
import TrackOrder from "./TrackOrder";
import TopNavBar from "../Components/TopNavBar";
import BottomNavBar from "../Components/BottomNavBar";
import Carousel from "./Carousel";
import AdvancedSearch from "./AdvancedSearch";

const Welcome = () => {
  return (
    <>
      <TopNavBar />
      <BottomNavBar />
      <hr />
      <h3 className="text-3xl py-2 font-medium"  style={{ marginLeft: "25px"}}>Welcome back, Abrar</h3>
      <div className="bg-gray-100" style={{ marginLeft: "25px" , marginRight: "25px" }}>
        <h1 className="text-2xl">Popular Items</h1>
        <Carousel />
      </div>
      <br />
      <AdvancedSearch />
    </>
  );
};

export default Welcome;
