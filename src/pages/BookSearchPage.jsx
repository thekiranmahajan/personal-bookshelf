import React, { useState } from "react";
import useBookSearch from "../hooks/useBookSearch";
import { BookCard, BookSearchInput } from "../components";
import useDebounce from "../hooks/useDebounce";
import BookCardShimmer from "../shimmers/BookCardShimmer";
import warning from "../images/warning.svg";

const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { books, isLoading, error } = useBookSearch(debouncedQuery);

  return (
    <div className="flex flex-col items-center justify-center px-10">
      <h1 className="p-3 text-xl font-bold">Search Book by its Name:</h1>
      <BookSearchInput query={query} setQuery={setQuery} />

      <div className="mt-4 flex min-h-screen flex-wrap items-center justify-center gap-2">
        {error && (
          <h1>
            Something went wrong while fetching Openlibrary API 😵 Please try
            again later...
          </h1>
        )}
        {isLoading ? (
          <BookCardShimmer />
        ) : (
          <>
            {books && books.length > 0 ? (
              books.map((book) => <BookCard key={book?.key} book={book} />)
            ) : (
              <div>
                <img src={warning} alt="warning" />
                <h2 className="text-xl font-bold">No Books found</h2>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
