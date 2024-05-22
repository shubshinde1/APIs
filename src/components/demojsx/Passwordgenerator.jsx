import { useState, useCallback, useEffect, useRef } from "react";

const Passwordgenerator = () => {
  const [length, setLength] = useState(8);
  const [numallowed, setNumAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const Passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) str += "0123456789";
    if (charallowed) str += "!@#$%&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numallowed, charallowed, setPassword]);

  const copyPasstoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    Passwordgenerator();
  }, [length, numallowed, charallowed, Passwordgenerator]);

  return (
    <div>
      This is Password Generator
      <div className="flex gap-2">
        <input
          type="text"
          value={password}
          placeholder="Password"
          className="px-2 py-1 outline-none rounded-md text-black"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-red-400 px-2 py-1 rounded-md"
          onClick={copyPasstoclipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex flex-row items-center gap-4 mt-2">
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <label>Length - {length}</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={numallowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            defaultChecked={charallowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Chars</label>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenerator;
