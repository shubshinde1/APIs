import React from "react";
import Posts from "./Post";

const Home = () => {
  return (
    <div className="overflow-y-scroll sbar w-full">
      <Posts />
    </div>
  );
};

export default Home;
