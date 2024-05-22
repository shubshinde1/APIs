import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidTachometer } from "react-icons/bi";
import { TbSmartHome } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import { SiAlltrails } from "react-icons/si";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className=" p-2 flex flex-col gap-2 w-full  items-center z-50 fixed bottom-2 ">
      <nav className="list-none flex flex-row gap-4 justify-items-center backdrop-blur-lg bg-neutral-700/40 p-4 rounded-md  ">
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <TbSmartHome fontSize={25} />
            {/* <span>Home Posts</span> */}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/about"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <RiUserSmileLine fontSize={25} />
            {/* <span>About Users</span> */}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/profile"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <RiUserSmileLine fontSize={25} />
            {/* <span>Profiles</span> */}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/movies"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <BiCameraMovie fontSize={25} />
            {/* <span>Movies</span> */}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/account"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <LuUser fontSize={25} />
            {/* <span>Account</span> */}
          </li>
        </NavLink>
        <NavLink
          className={(e) => (e.isActive ? "bg-neutral-950 rounded-md" : "")}
          to="/demo"
        >
          <li className="hover:bg-neutral-950 cursor-pointer p-2 rounded-md flex gap-2 items-center ">
            <SiAlltrails fontSize={25} />
            {/* <span>Demo JS</span> */}
          </li>
        </NavLink>
      </nav>
      {/* <div className="items-end">
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
      </div> */}
    </div>
  );
};

export default Navbar;
