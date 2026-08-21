
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';
import LoginSignup from './Pages/loginSignup';
import Cart from './Pages/Cart';

const App = () => {
  return (<>
<Navbar />
   <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/mens" element={<ShopCategory  category= "men"/>} />
      <Route path="/womens" element={<ShopCategory category="women"/>} />
      <Route path="/kids" element={<ShopCategory category="kid"/>} />
      <Route path="/product" element={<Product/>}> 
      <Route path=":productId" element={<Product/>}></Route>
      </Route>
      <Route path="/login" element={<LoginSignup/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
     
    </Routes>

  </>
  
  )
}

export default App
