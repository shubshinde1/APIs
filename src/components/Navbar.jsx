import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbSmartHome } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { SiAlltrails } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-2 w-screen items-center z-50 fixed bottom-2">
      <nav className="list-none flex flex-row gap-3 justify-items-center backdrop-blur-lg bg-neutral-700/40 p-4 rounded-xl">
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center ">
              <TbSmartHome fontSize={25} />
              {isActive && <h2>Posts</h2>}
            </li>
          )}
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/about"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center">
              <RiUserSmileLine fontSize={25} />
              {isActive && <h2>Users</h2>}
            </li>
          )}
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/profile"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center">
              <RiUserSmileLine fontSize={25} />
              {isActive && <h2>Profile</h2>}
            </li>
          )}
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/movies"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center">
              <BiCameraMovie fontSize={25} />
              {isActive && <h2>Movies</h2>}
            </li>
          )}
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/account"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center">
              <LuUser fontSize={25} />
              {isActive && <h2>Login</h2>}
            </li>
          )}
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-xl" : "")}
          to="/demo"
        >
          {({ isActive }) => (
            <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-xl flex gap-2 items-center">
              <SiAlltrails fontSize={25} />
              {isActive && <h2>Demo</h2>}
            </li>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
