import React, { useState, useEffect } from "react";
import Login from "../../src/assets/images/login.svg";
import cred from "../userdb/userlogin.json";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const [signupFirstName, setSignupFirstName] = useState("");
  const [signupLastName, setSignupLastName] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    let isValid = false;
    for (let key in cred) {
      if (cred[key].username === username && cred[key].password === password) {
        console.log(
          `valid info\nUsername: ${username}\nPassword: Don't Worry It's Encrypted`
        );
        setIsLoggedIn(true);
        setFirstname(cred[key].firstname);
        isValid = true;
        break;
      }
    }
    if (!isValid) {
      console.log("Please Enter valid Login Details");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (signupPassword !== confirmPassword) {
      console.log("Passwords do not match!");
      return;
    }
    // Here you would normally handle saving the new user credentials.
    console.log(
      `New user info\nFirst Name: ${signupFirstName}\nLast Name: ${signupLastName}\nUsername: ${signupUsername}`
    );
    setIsSignUpModalOpen(false);
  };

  return (
    <div className="bg-neutral-900 w-full h-fit md:h-[97vh] p-2 rounded-md gap-2 grid grid-cols-12 items-center">
      {isLoggedIn ? (
        <div className="col-span-12 text-center text-white">
          <h2 className="text-3xl">
            Welcome Back
            <span className="text-[#6C63FF] font-bold"> {firstname}</span>
          </h2>
        </div>
      ) : (
        <div className="col-span-12 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 order-1  bg-neutral-950 m-5 p-5 rounded-md">
            <form className="flex flex-col gap-5" onSubmit={handleLogin}>
              <div className="flex flex-col">
                <label>User Name</label>
                <input
                  type="text"
                  name="username"
                  className="text-black p-2 rounded-md"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="text-black p-2 rounded-md"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-5">
                <input
                  id="btn"
                  type="button"
                  className="bg-neutral-900 cursor-pointer py-2 rounded-md w-full"
                  value="Create Account"
                  onClick={() => setIsSignUpModalOpen(true)}
                />
                <input
                  id="btn"
                  type="submit"
                  className="bg-[#6C63FF] cursor-pointer py-2 rounded-md w-full"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <div className="col-span-12 md:col-span-6 md:order-2 m-5 flex justify-center">
            <img src={Login} width={400} alt="Login Illustration" />
          </div>
        </div>
      )}
      {isSignUpModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-neutral-900 p-8 rounded-md shadow-md w-96">
            <h2 className="text-2xl mb-4 text-white">Sign Up</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  className="p-2 rounded-md border text-black"
                  value={signupFirstName}
                  onChange={(e) => setSignupFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  className="p-2 rounded-md border text-black"
                  value={signupLastName}
                  onChange={(e) => setSignupLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Username</label>
                <input
                  type="text"
                  className="p-2 rounded-md border text-black"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  className="p-2 rounded-md border text-black"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="p-2 rounded-md border text-black"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  type="button"
                  className="bg-gray-500 text-white py-2 px-4 rounded-md"
                  onClick={() => setIsSignUpModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#6C63FF] text-white py-2 px-4 rounded-md"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
