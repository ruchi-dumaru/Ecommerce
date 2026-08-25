import { useEffect, useState } from "react";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("https://ecommerce-pasa.onrender.com/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    await fetch("https://ecommerce-pasa.onrender.com/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          All Products List
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage all products available in your store
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="hidden md:grid grid-cols-6 gap-4 items-center px-6 py-4 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-600">
          <p>Product</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p className="text-center">Remove</p>
        </div>

        <div className="divide-y divide-gray-200">
          {allproducts.map((product, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-4 items-center px-4 sm:px-6 py-5 hover:bg-gray-50 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
                  />

                  <div className="md:hidden">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs text-gray-500 capitalize">
                      {product.category}
                    </p>
                  </div>
                </div>

                <p className="hidden md:block text-sm font-medium text-gray-800 truncate">
                  {product.name}
                </p>

                <p className="text-sm text-gray-500">
                  <span className="md:hidden font-medium text-gray-700">
                    Old Price:{" "}
                  </span>
                  <span className="line-through">${product.old_price}</span>
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  <span className="md:hidden font-medium text-gray-700">
                    New Price:{" "}
                  </span>
                  ${product.new_price}
                </p>

                <p className="hidden md:block text-sm text-gray-600 capitalize">
                  {product.category}
                </p>

                <div className="flex justify-end md:justify-center">
                  <button
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 transition"
                    title="Remove product"
                  >
                    <i className="fa-solid fa-trash text-sm"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {allproducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500 text-sm">No products available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProduct;
