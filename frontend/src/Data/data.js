import all_product from "./all_product";

const data_product = all_product
  .filter((item) => item.category === "women")
  .slice(0, 5);

export default data_product;
