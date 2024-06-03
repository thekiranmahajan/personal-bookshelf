import React from "react";

const BookCard = ({
  book: { title, author_name, publisher, publish_year, edition_count },
}) => {
  return (
    <div className="mt-2 flex w-72 flex-col items-start justify-center rounded-lg bg-[#AEF78E] px-3 py-4">
      <h2 className="font-bold">
        Book Title: <span className="text-sm text-gray-600">{title}</span>
      </h2>
      <h2 className="font-bold">
        Author Name:
        <span className="text-sm text-gray-600">{author_name?.join(", ")}</span>
      </h2>
      <h2 className="font-bold">
        Publisher:
        <span className="text-sm text-gray-600">
          {publisher[publisher?.length - 1]}(
          {publish_year[publish_year?.length - 1]})
        </span>
      </h2>
      <h2 className="font-bold">
        Edition Count:
        <span className="text-sm text-gray-600">{edition_count}</span>
      </h2>
      <button className="bg-[#66A182]">Add to Bookshelf</button>
    </div>
  );
};

export default BookCard;
