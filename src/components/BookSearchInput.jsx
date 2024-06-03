import React from "react";

const BookSearchInput = ({ query, setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div className="flex max-w-72 items-center justify-center gap-4">
      <input
        onChange={handleChange}
        value={query}
        placeholder="Search for books by name e.g. Rich Dad Poor Dad"
        className="w-full rounded-lg border-2 bg-transparent p-2 outline-none"
        type="text"
      />
    </div>
  );
};

export default BookSearchInput;
