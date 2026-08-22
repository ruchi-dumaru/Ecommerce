import React, { useContext, useMemo } from "react";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = ({ currentProductId, category }) => {
  const { all_product } = useContext(ShopContext);

  const relatedItems = useMemo(() => {
    return all_product
      .filter(
        (item) => item.category === category && item.id !== currentProductId,
      )
      .slice(0, 4);
  }, [all_product, category, currentProductId]);

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-10">
      <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
        Related Products
      </h1>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {relatedItems.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
