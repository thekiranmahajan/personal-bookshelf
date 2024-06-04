import React, { useEffect, useState } from "react";
import { BookCard, BookWarning } from "../components";

const MyBookshelf = () => {
  const [myBookshelf, setMyBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf =
      JSON.parse(localStorage.getItem("personal-bookshelf")) || [];
    setMyBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-10">
      <h1 className="p-3 text-xl font-bold">My Bookshelf</h1>

      <div className="mt-4 flex min-h-screen flex-wrap items-start justify-center gap-2">
        {myBookshelf?.length > 0 ? (
          myBookshelf.map((book) => (
            <BookCard isAddButton={false} key={book?.key} book={book} />
          ))
        ) : (
          <BookWarning warnText={"No books in Personal Bookshelf..."} />
        )}
      </div>
    </div>
  );
};

export default MyBookshelf;
