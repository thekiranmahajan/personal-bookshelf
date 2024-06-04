import React from "react";
import warning from "../images/warning.svg";

const BookWarning = ({ warnText }) => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <img className="h-44" src={warning} alt="warning" />
      <h2 className="text-xl font-bold">{warnText}</h2>
    </div>
  );
};

export default BookWarning;
