import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/BreadCrumbs/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <div className="px-4 py-16 text-center text-slate-600">
        Product not found.
      </div>
    );
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />
    </div>
  );
};

export default Product;
