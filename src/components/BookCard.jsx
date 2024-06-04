import React from "react";
import Button from "./Button";
import { toast } from "react-toastify";

const BookCard = ({ book, isAddButton }) => {
  const { title, author_name, publisher, publish_year, edition_count, key } =
    book;

  const handleAddToBookshelf = () => {
    let personalBookshelf =
      JSON.parse(localStorage.getItem("personal-bookshelf")) || [];

    const isDuplicateBook = personalBookshelf.some(
      (storedBook) => storedBook?.key === key,
    );

    if (!isDuplicateBook) {
      personalBookshelf.push(book);
      localStorage.setItem(
        "personal-bookshelf",
        JSON.stringify(personalBookshelf),
      );
      toast.success("Book added successfully!📔");
      console.log(personalBookshelf);
    } else {
      toast.error("Book is already added 😵");

      console.log("book is alreay added to your Personal Bookshelf");
    }
  };

  return (
    <div className="relative m-3 flex min-h-52 w-72 flex-col items-start justify-center rounded-lg bg-[#AEF78E] px-3 py-4 pb-7 font-bold text-gray-800 shadow-lg transition-all duration-300 hover:scale-105">
      <h2>
        Book Title:{" "}
        <span className="text-sm font-medium text-gray-600">
          {title || "N/A"}
        </span>
      </h2>
      <h2>
        Author Name:{" "}
        <span className="text-sm font-medium text-gray-600">
          {author_name ? author_name.join(", ") : "N/A"}
        </span>
      </h2>
      <h2>
        Publisher:{" "}
        <span className="text-sm font-medium text-gray-600">
          {publisher && publish_year
            ? `${publisher[publisher.length - 1]} (${publish_year[publish_year.length - 1]})`
            : "N/A"}
        </span>
      </h2>
      <h2>
        Edition Count:{" "}
        <span className="text-sm font-medium text-gray-600">
          {edition_count || "N/A"}
        </span>
      </h2>
      {isAddButton && (
        <Button
          styles="absolute -bottom-4 left-1/2 -translate-x-1/2 transform mt-2"
          btnText={"Add to Bookshelf"}
          handleBtnClick={handleAddToBookshelf}
        />
      )}
    </div>
  );
};

export default BookCard;
