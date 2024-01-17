import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Redux/slices/CartSlices";

const CartItem = ({ img, name, id, rating, price, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
        <MdDelete
          onClick={() =>
            dispatch(removeFromCart({ id, img, name, price, qty }))
          }
          className="absolute right-7 text-red-600 cursor-pointer"
        />
        <img src={img} alt=" image" className="w-[50px] h-[50px]" />
        <div>
          <h2>{name}</h2>
          <div className="flex justify-between">
            <span className="text-green-400 font-bold">{price}</span>
            <div className="flex justify-between items-center gap-2 absolute right-7">
              <FaMinus
                onClick={() =>
                  qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
                }
                className="border-2 border-teal-600 hover:border-red-500 hover:bg-green-400 cursor-pointer rounded-md"
              />
              <span>{qty}</span>
              <FaPlus
                onClick={() => dispatch(incrementQty({ id }))}
                className="border-2 border-teal-600 hover:border-red-500 hover:bg-green-400 cursor-pointer rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
