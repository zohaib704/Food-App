import React from "react";

const CategoryMenu = ({ category }) => {
  return (
    <div className="ml-6">
      <h3>Find The Best Food List</h3>
      <div className="py-4 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={category}
          className="py-3 px-3 bg-gray-400 rounded-lg hover:bg-green-500 hover:text-white  "
        >
          All
        </button>
        <button
          onClick={category}
          className="py-3 px-3 bg-gray-400 rounded-lg hover:bg-green-500 hover:text-white  "
        >
          Lunch
        </button>
        <button className="py-3 px-3 bg-gray-400 rounded-lg hover:bg-green-500 hover:text-white  ">
          BrakeFast
        </button>
        <button className="py-3 px-3 bg-gray-400 rounded-lg hover:bg-green-500 hover:text-white  ">
          Dinner
        </button>
        <button className="py-3 px-3 bg-gray-400 rounded-lg hover:bg-green-500 hover:text-white  ">
          Snaks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
