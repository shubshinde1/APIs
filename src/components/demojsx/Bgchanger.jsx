import { useState } from "react";

const Bgchanger = () => {
  const [color, setColor] = useState("gray");
  return (
    <div>
      This is Background color changer
      <div
        className=" flex flex-col justify-end  items-center rounded-md p-2 mt-2"
        style={{ backgroundColor: color }}
      >
        <div className="bg-neutral-800 rounded-md ">
          <div className=" flex gap-2 p-2">
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-md"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-500 text-white px-4 py-1 rounded-md"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-md"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="bg-orange-500 text-white px-4 py-1 rounded-md"
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className="bg-black text-white px-4 py-1 rounded-md"
              onClick={() => setColor("black")}
            >
              Black
            </button>
            <button
              className="bg-white text-black px-4 py-1 rounded-md"
              onClick={() => setColor("white")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgchanger;
