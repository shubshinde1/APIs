import React, { useState } from "react";
import User from "./User";

const About = () => {
  return (
    <div className="bg-neutral-900 w-full h-full rounded-md overflow-y-scroll sbar">
      <User />
    </div>
  );
};

export default About;
