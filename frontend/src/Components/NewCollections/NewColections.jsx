import React from "react";
import new_collection from "../../Data/new_collection.js";
import Item from "../Item/Item";

const NewColections = () => {
  return (
    <div className="px-4 py-10 sm:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-4 text-center">New Collections</h1>

      <hr className="w-24 h-1 bg-black mx-auto rounded-full mt-2 mb-6" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {new_collection.map((item, i) => (
          <div
            key={item.id}
            className="fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewColections;
