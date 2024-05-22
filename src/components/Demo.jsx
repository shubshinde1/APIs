import React from "react";
import States from "./demojsx/States";
import Bgchanger from "./demojsx/Bgchanger";
import Passwordgenerator from "./demojsx/Passwordgenerator";

const Demo = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* usestate */}
      <States />

      {/* background changer */}
      <Bgchanger />

      {/* Password generator */}
      <Passwordgenerator />
    </div>
  );
};

export default Demo;
