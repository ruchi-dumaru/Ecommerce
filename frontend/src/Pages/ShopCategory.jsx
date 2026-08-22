import React, { useContext, useMemo, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState("default");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProducts = useMemo(() => {
    const categoryItems = all_product.filter(
      (item) => item.category === props.category,
    );

    if (sortBy === "price_low") {
      return [...categoryItems].sort((a, b) => a.new_price - b.new_price);
    }

    if (sortBy === "price_high") {
      return [...categoryItems].sort((a, b) => b.new_price - a.new_price);
    }

    if (sortBy === "name_az") {
      return [...categoryItems].sort((a, b) => a.name.localeCompare(b.name));
    }

    return categoryItems;
  }, [all_product, props.category, sortBy]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleProducts.length < filteredProducts.length;

  return (
    <div className="px-4 pb-12 sm:px-8 lg:px-12">
      <div className="mt-5 flex items-center justify-center">
        <img
          className="mb-8 w-full max-w-6xl rounded-2xl object-cover"
          src={props.banner}
          alt={`${props.category} banner`}
        />
      </div>

      <div className="mx-auto mb-6 flex w-full max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p>
          <span>
            <b>Showing 1-{visibleProducts.length}</b>
          </span>{" "}
          out of {filteredProducts.length} products
        </p>
        <div className="flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2">
          <label htmlFor="sort-products" className="text-sm text-slate-600">
            Sort by
          </label>
          <select
            id="sort-products"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm outline-none"
          >
            <option value="default">Featured</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="name_az">Name: A-Z</option>
          </select>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((item) => (
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

      {hasMore && (
        <div className="mt-10 flex items-center justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="rounded-3xl border border-gray-400 px-6 py-3 transition hover:bg-slate-100"
          >
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
