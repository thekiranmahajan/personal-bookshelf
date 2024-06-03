import React, { useState } from "react";
import useBookSearch from "../hooks/useBookSearch";
import { BookSearchInput } from "../components";

const Home = () => {
  const [query, setQuery] = useState("");
  const { books, loading, error } = useBookSearch(query);
  console.log(books);
  return (
    <div>
      <h1 className="p-4 text-xl font-bold">Search Book by its name</h1>
      <BookSearchInput query={query} setQuery={setQuery} />
    </div>
  );
};

export default Home;
