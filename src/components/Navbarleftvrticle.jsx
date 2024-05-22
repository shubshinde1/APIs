import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidTachometer } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";

const Navbarleftvrticle = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-neutral-800 rounded-md p-2 flex flex-col gap-2 justify-between ${
        isCollapsed ? "w-fit" : "w-44 "
      }`}
    >
      <nav className="list-none flex flex-col gap-2 justify-items-center">
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <TbSmartHome fontSize={20} />
            {!isCollapsed && <span>Home Posts</span>}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/about"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <RiUserSmileLine fontSize={20} />
            {!isCollapsed && <span>About Users</span>}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/profile"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <RiUserSmileLine fontSize={20} />
            {!isCollapsed && <span>Profiles</span>}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/movies"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <BiCameraMovie fontSize={20} />
            {!isCollapsed && <span>Movies</span>}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/account"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <LuUser fontSize={20} />
            {!isCollapsed && <span>Account</span>}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/demo"
        >
          <li
            className={`hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            }`}
          >
            <LuUser fontSize={20} />
            {!isCollapsed && <span>Demo JS</span>}
          </li>
        </NavLink>
      </nav>
      <div className="items-end">
        <button
          className="bg-neutral-800 hover:bg-neutral-950 p-2 rounded-md "
          onClick={handleSidebarToggle}
        >
          {isCollapsed ? (
            <TbLayoutSidebarRightCollapseFilled fontSize={25} />
          ) : (
            <TbLayoutSidebarLeftCollapseFilled fontSize={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbarleftvrticle;
