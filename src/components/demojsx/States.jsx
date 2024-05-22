import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const States = () => {
  let [value, setValue] = useState(0);

  const addValue = () => {
    setValue(value + 1);
    console.log(value);
  };
  const removeValue = () => {
    setValue(value - 1);
    console.log(value);
  };

  return (
    <div className="">
      <div>
        <h1>This is Counter App</h1>

        <div className="flex gap-1 items-center mt-2">
          <button
            className=" bg-neutral-800 p-2 rounded-md"
            onClick={removeValue}
          >
            <FaMinus />
          </button>
          <h2 className=" bg-neutral-800 px-3 py-1 rounded-md">{value}</h2>
          <button className=" bg-neutral-800 p-2 rounded-md" onClick={addValue}>
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default States;
