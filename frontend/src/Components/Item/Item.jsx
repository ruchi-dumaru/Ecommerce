import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="group rounded-2xl bg-white p-3 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className="overflow-hidden rounded-xl">
            <img
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={props.image}
              alt={props.name}
            />
          </div>
        </Link>
        <p className="mt-3 min-h-12 text-base font-medium text-slate-700">
          {props.name}
        </p>
        <div className="mt-2 flex gap-4">
          <p className="font-semibold text-slate-900">${props.new_price}</p>
          <p className="text-slate-400 line-through">${props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
