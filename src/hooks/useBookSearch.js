import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useBookSearch = (query) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      setIsLoading(false);
      return;
    }

    const fetchBooks = async () => {
      setIsLoading(true);
      setBooks(null);
      setError(null);

      try {
        const response = await fetch(
          `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=10&page=1`,
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data?.docs || []);
      } catch (err) {
        toast.error("Failed to load Books 😵");
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, isLoading, error };
};

export default useBookSearch;
