import React, { useState } from "react";
import useBookSearch from "../hooks/useBookSearch";
import { BookCard, BookSearchInput } from "../components";

const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const { books, loading, error } = useBookSearch(query);
  console.log(books);
  return (
    <div className="flex flex-col items-center justify-center px-10">
      <h1 className="p-3 text-xl font-bold">Search Book by its Name:</h1>
      <BookSearchInput query={query} setQuery={setQuery} />
      <div className="mt-4 flex gap-2">
        {books?.map((book) => (
          <BookCard key={book?.key} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
