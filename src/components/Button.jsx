import React from "react";

const Button = ({ btnText, handleBtnClick }) => {
  return (
    <button
      onClick={handleBtnClick}
      className="absolute -bottom-4 left-1/2 mt-2 h-10 w-44 -translate-x-1/2 transform cursor-pointer rounded-lg bg-[#3A506B] px-4 py-2 text-sm text-white shadow-lg ring-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95 active:ring-2"
    >
      {btnText}
    </button>
  );
};

export default Button;
