import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handleToast = (name) => {
    toast.success(`Added ${name}`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center">
        {FoodData.map((food) => {
          return (
            <FoodCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
