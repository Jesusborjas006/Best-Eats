import { useState } from "react";
import { data } from "../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  return (
    <div className="m-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap max-w-[490px] w-full">
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              All
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              Burgers
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              Pizza
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              Salads
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              Chicken
            </button>
          </div>
        </div>
        <div>
          <p>Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              $
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              $$
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              $$$
            </button>
            <button className="py-1 px-5 m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-full">
              $$$$
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
