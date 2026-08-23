import React from "react";
import cartLogo from "../../assets/cartLogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-5">
          <img className="h-20 w-20" src={cartLogo} />
          <div>
            <p className="text-xl font-bold">Favshop</p>
            <p className="text-blue-800">Admin Panel</p>
          </div>
        </div>
        <div>
          <i className="text-4xl mr-5  text-blue-800 fa-solid fa-circle-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
