import React, { useState } from "react";
import useBookSearch from "../hooks/useBookSearch";
import { BookCard, BookSearchInput, BookWarning } from "../components";
import useDebounce from "../hooks/useDebounce";
import BookCardShimmer from "../shimmers/BookCardShimmer";

const BookSearchPage = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 700);
  const { books, isLoading, error } = useBookSearch(debouncedQuery);

  return (
    <div className="flex flex-col items-center justify-center px-10">
      <h1 className="p-3 text-xl font-bold">Search Book by its Name:</h1>
      <BookSearchInput query={query} setQuery={setQuery} />

      <div className="mt-4 flex min-h-screen flex-wrap items-start justify-center gap-2">
        {error && !books && (
          <h1>
            Something went wrong while fetching Openlibrary API 😵 Please try
            again later...
          </h1>
        )}
        {isLoading ? (
          <BookCardShimmer />
        ) : (
          <>
            {books?.length > 0 ? (
              books.map((book) => (
                <BookCard isAddButton={true} key={book?.key} book={book} />
              ))
            ) : debouncedQuery && !isLoading && !error ? (
              <BookWarning warnText={"No books found"} />
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default BookSearchPage;
