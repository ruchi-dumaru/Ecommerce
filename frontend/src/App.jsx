
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import m_banner from "../src/assets/m_banner.jpg";
import kido_banner from "../src/assets/kido_banner.png";
import women_banner from "../src/assets/women_banner.jpg"
const App = () => {
  return (<>
<Navbar />
   <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/mens" element={<ShopCategory banner={m_banner} category= "men"/>} />
      <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>} />
      <Route path="/kids" element={<ShopCategory banner={kido_banner} category="kid"/>} />
      <Route path="/product" element={<Product/>}> 
      <Route path=":productId" element={<Product/>}></Route>
      </Route>
      <Route path="/login" element={<LoginSignup/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
     
    </Routes>
    <Footer/>

  </>
  
  )
}

export default App
