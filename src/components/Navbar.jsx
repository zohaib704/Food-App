import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between mx-6 py-6 mb-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold py-2">Food-App</h1>
      </div>
      <div>
        <input
          type="text"
          name="search"
          className="p-3 border border-gray-400 rounded-lg w-full md:w-[25vw]"
          placeholder="Serch Here"
        />
      </div>
    </nav>
  );
};

export default Navbar;
