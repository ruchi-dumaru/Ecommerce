import React from 'react'
import exclusive from "p_img44.png"
const Offers = () => {
  return (
    <div >
      <div className="offers-left">
 <h1>Exclusive</h1>
 <h1>Offers for You</h1>
 <p>ONLY ON BEST SELLERS PRODUCTS</p>
 <button>Check Now</button>
      </div>

      <div className="offers-right">
<img src={exclusive}/>
      </div>
      
    </div>
  )
}

export default Offers
