import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/CartSlices";
const FoodCart = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-white  w-[250px] p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto hover:scale-105 transition-all cursor-grab duration-300 ease-in-out "
      />
      <div className="flex justify-between font-bold">
        <h2>{name}</h2>
        <span className="text-green-600">{price}</span>
      </div>
      <p>{desc.slice(0, 50)}</p>
      <div className="font-bold flex justify-between">
        <span className="flex text-center justify-center items-center">
          <FaStar className="mr-1 text-yellow-300 hover:text-green-500" />{" "}
          {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, img, name, price, rating, qty: 1 }));
            handleToast(name);
          }}
          className="bg-gray-500 text-white hover:bg-green-500 text-sm rounded-lg px-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
