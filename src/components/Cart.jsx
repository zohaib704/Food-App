import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [activeCart, setactiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalqty = cartItems.reduce((totalqty, item) => totalqty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed bg-white right-0 top-0 w-full lg:w-[20vw] p-4 h-full ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-6">
          <span className="text-xl font-bold">My Order</span>
          <IoMdClose
            onClick={() => setactiveCart(!activeCart)}
            className="border-2 text-3xl border-gray-600 hover:border-red-600 p-1 font-bold hover:text-black rounded-md cursor-pointer hover:bg-red-500"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                img={food.img}
                name={food.name}
                price={food.price}
                desc={food.desc}
                qty={food.qty}
                rating={food.rating}
              />
            );
          })
        ) : (
          <h1 className="font-bold text-2xl bg-green-300 hover:bg-green-700 rounded-lg text-center">
            Your Cart is Empty
          </h1>
        )}

        <div className="absolute bottom-0 text-center items-center">
          <h3 className="font-semibold text-gray-800">Items : {totalqty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Ammount : {totalPrice}
          </h3>
          <hr />
          <button className="bg-green-600 rounded-md w-[24vw] lg:w-[18vw] mb-5 font-semibold hover:bg-lime-400 ">
            CheckOut
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setactiveCart(!activeCart)}
        className={`bg-white text-5xl rounded-full shadow-md p-3 fixed bottom-4 right-3 cursor-pointer ${
          totalqty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
