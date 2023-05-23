import React from "react";
import TrackOrder from "./TrackOrder";
import TopNavBar from "../Components/TopNavBar";
import BottomNavBar from "../Components/BottomNavBar";
import Carousel from "./Carousel";
import AdvancedSearch from "./AdvancedSearch";

const Welcome = () => {
  return (
    <>
      <TrackOrder />
      <TopNavBar />
      <BottomNavBar />
      <hr />
      <h3 className="text-3xl py-2 font-medium">Robert Anderson</h3>
      <div className="bg-gray-100 ">
        <h1>Popular Items</h1>
        <Carousel />
      </div>
      <br />
      <AdvancedSearch />
    </>
  );
};

export default Welcome;
