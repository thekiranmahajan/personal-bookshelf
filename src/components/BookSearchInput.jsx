import React from "react";

const BookSearchInput = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      onChange={handleChange}
      value={query}
      placeholder="e.g. Rich Dad Poor Dad"
      className="w-full max-w-96 rounded-lg border-2 bg-transparent p-2 outline-none placeholder:text-sm"
      type="text"
    />
  );
};

export default BookSearchInput;
