import React from "react";

const BookCardShimmer = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="relative m-3 flex min-h-52 w-72 animate-pulse flex-col items-start justify-center gap-3 rounded-lg bg-gray-300 px-3 py-4 pb-7 font-bold shadow-lg"
        >
          <span className="h-5 w-3/4 rounded-md bg-gray-400"></span>
          <span className="h-5 w-1/2 rounded-md bg-gray-400"></span>
          <span className="h-5 w-1/3 rounded-md bg-gray-400"></span>
          <span className="h-5 w-2/3 rounded-md bg-gray-400"></span>

          <span className="absolute -bottom-4 left-1/2 mt-2 h-10 w-44 -translate-x-1/2 transform cursor-pointer rounded-lg bg-gray-400 px-4 py-2 shadow-lg"></span>
        </div>
      ))}
    </>
  );
};

export default BookCardShimmer;
