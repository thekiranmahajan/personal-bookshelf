import React from "react";

const Button = ({ btnText, handleBtnClick, styles }) => {
  return (
    <button
      onClick={handleBtnClick}
      className={`h-10 w-44 cursor-pointer rounded-lg bg-[#3A506B] px-4 py-2 text-sm text-white shadow-lg ring-yellow-400 transition-all duration-300 hover:scale-105 active:scale-95 active:ring-2 ${styles}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
