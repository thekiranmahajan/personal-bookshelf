import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-[#5BC0BE] px-5">
      <NavLink to="/" className="font-Pacifico text-xl font-medium">
        BookNation.
      </NavLink>
      <NavLink to="/my-bookshelf">
        <Button btnText={"My Bookshelf"} />
      </NavLink>
    </div>
  );
};

export default Navbar;
