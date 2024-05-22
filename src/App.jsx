import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import Movies from "./components/Movies";
import Account from "./components/Account";
import Demo from "./components/Demo";

function App() {
  return (
    <Router>
      <div className="flex gap-2  h-[99vh]">
        <div className="w-full p-2 flex gap-2">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/account" element={<Account />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
