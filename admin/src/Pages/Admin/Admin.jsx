import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
const Admin = () => {
 return (
  <div className="min-h-screen flex bg-gray-50">
    
    <Sidebar />

    <main className="flex-1 min-w-0 p-6">
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </main>

  </div>
)
};

export default Admin;
