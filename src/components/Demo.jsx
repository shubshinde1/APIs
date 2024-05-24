import React from "react";
import States from "./demojsx/States";
import Bgchanger from "./demojsx/Bgchanger";
import Passwordgenerator from "./demojsx/Passwordgenerator";
import Currencyconverter from "./demojsx/Currencyconverter";

const Demo = () => {
  return (
    <div className="w-full h-[97.5vh] bg-neutral-900 p-2 rounded-md flex flex-col gap-5">
      {/* usestate */}
      {/* <States /> */}

      {/* background changer */}
      {/* <Bgchanger /> */}

      {/* Password generator */}
      {/* <Passwordgenerator /> */}

      {/* currency converter */}
      <Currencyconverter />
    </div>
  );
};

export default Demo;
