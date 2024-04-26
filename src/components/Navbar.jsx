import React from "react";
import { NavLink } from "react-router-dom";
import { BiSolidTachometer } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="bg-neutral-900 rounded-md p-2 flex flex-col gap-2">
      <nav className="list-none flex flex-col gap-2  w-44">
        <NavLink
          className={(e) => {
            return e.isActive ? "bg-neutral-950 rounded-md" : "";
          }}
          to="/"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center">
            <TbSmartHome fontSize={20} />
            <span>Home Posts</span>
          </li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "bg-neutral-950 rounded-md" : "";
          }}
          to="/about"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center">
            <RiUserSmileLine fontSize={20} />
            <span>About Users</span>
          </li>
        </NavLink>
        <NavLink
          className={(e) => {
            return e.isActive ? "bg-neutral-950 rounded-md" : "";
          }}
          to="/profile"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center">
            <RiUserSmileLine fontSize={20} />
            <span>Profiles</span>
          </li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
