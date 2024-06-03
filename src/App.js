import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
