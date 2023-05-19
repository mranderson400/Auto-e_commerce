import React from "react";
import NavBar from "./NavBar";
import AdvancedSearch from "./AdvancedSearch";
import Carousel from "./Carousel";
const Welcome = () => {
  return (
    <>
      <NavBar />
      <hr />
      <h3 className="text-3xl py-2 font-medium">Robert Anderson</h3>
      <div className="bg-gray-100 w-[160vh] h-[50vh]">
        <h1>Popular Items</h1>
        <Carousel />
      </div>
      <br />
      <AdvancedSearch />
    </>
  );
};

export default Welcome;
