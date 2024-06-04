import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 flex h-20 w-full items-center justify-center bg-slate-300 text-center font-semibold">
      <span>© {currentYear} Made with &#10084; by </span>
      <a
        href="https://github.com/thekiranmahajan/personal-bookshelf"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 hover:underline"
      >
        Kiran Mahajan
      </a>
    </footer>
  );
};

export default Footer;
