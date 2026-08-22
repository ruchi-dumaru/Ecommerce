import React, { useContext } from "react";
import logo from "../../assets/cartLogo.png";
import cart from "../../assets/cart.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);

  const navItems = [
    { label: "Shop", path: "/" },
    { label: "Men", path: "/mens" },
    { label: "Women", path: "/womens" },
    { label: "Kids", path: "/kids" },
  ];

  const isActivePath = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 py-3">
        <div className="flex items-center justify-center text-xl font-semibold">
          <img className="h-16 sm:h-20" src={logo} alt="Shooper logo" />
          <p>Shooper</p>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative pb-1 text-sm sm:text-base"
            >
              <span className="font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  isActivePath(item.path) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}

          <Link to="/login">
            <button className="rounded-xl bg-blue-700 px-4 py-2 text-white transition hover:bg-blue-800">
              Login
            </button>
          </Link>

          <Link to="/cart" className="relative">
            <img className="h-10 w-10 object-contain" src={cart} alt="Cart" />
            {getTotalCartItems() > 0 && (
              <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-semibold text-white">
                {getTotalCartItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
