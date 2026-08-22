import React from "react";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="px-4 pt-6 text-sm font-medium text-slate-500 sm:px-6 lg:px-10">
      HOME <i className="fa-solid fa-arrow-right-long mx-2"></i> SHOP{" "}
      <i className="fa-solid fa-arrow-right-long mx-2"></i>{" "}
      <span className="text-slate-800">{product.name}</span>
    </div>
  );
};

export default Breadcrum;
