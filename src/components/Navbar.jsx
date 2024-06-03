import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-[#5BC0BE] px-5">
      <h2 className="font-mono text-lg font-bold">BookNation.</h2>
      <NavLink
        to="/my-bookshelf"
        className="cursor-pointer rounded-lg bg-[#3A506B] px-4 py-2 text-sm text-white"
      >
        My Bookshelf
      </NavLink>
    </div>
  );
};

export default Navbar;
