import React, { useState } from 'react'
import logo from "../../assets/cartLogo.png"
import cart from "../../assets/cart.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  return (
    <div className="flex ml-10 justify-between">
      <div className="flex items-center justify-center text-xl font-semibold">
        <img className="h-20 " src={logo}/>
      <p>Shooper</p>
      </div>
      <div className="flex justify-between items-center gap-8 decoration-none cursor-pointer mr-10  ">
          <ul onClick={(()=>setMenu("shop"))}><Link to="/">Shop</Link></ul>
          <ul onClick={(()=>setMenu("mens"))}><Link to="/mens">Men</Link></ul>
          <ul onClick={(()=>setMenu("womens"))}><Link to="/womens">Women</Link></ul>
          <ul onClick={(()=>setMenu("kids"))}><Link to="/kids">Kids</Link></ul>
     
       <Link to="/login"> <button className="bg-blue-800 p-3 cursor-pointer  text-white rounded-xl">Login</button></Link>
        <Link to="/cart"><img className="h-15" src={cart}/></Link>
      </div>
    </div>
  )
}

export default Navbar
