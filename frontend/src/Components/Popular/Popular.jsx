import { useEffect, useState } from "react";
import Item from "../Item/Item.jsx";

const Popular = () => {
  const [popularProducts,setPopularProducts]=useState([]);

useEffect(()=>{
  fetch('http://localhost:4000/popularinwomen')
  .then((response)=>response.json())
  .then((data)=>setPopularProducts(data));
},[])



  return (
    <div className="px-4 py-10 sm:px-8 lg:px-12">
      <h1 className="text-3xl font-bold mb-4 text-center">Popular in women</h1>

      <hr className="w-24 h-1 bg-black mx-auto rounded-full mt-2 mb-6" />

      <div className="mx-auto flex w-full max-w-6xl gap-5 overflow-x-auto px-2 no-scrollbar snap-x snap-mandatory">
        {popularProducts.map((item) => (
          <div key={item.id} className="w-72 flex-shrink-0 snap-center">
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

export default Popular;
