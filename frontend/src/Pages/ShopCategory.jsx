import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from "../assets/dropdown_icon.png"
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div >
      <div className="flex item-center justify-center mt-5">
        <img className="mb-10" src={props.banner}/>
      </div>
      
      <div  className="ml-40 mr-40 flex justify-between ">
        <p>
          <span><b>Showing 1-12</b></span> out of 36 products
        </p>
       <div className="flex items-center gap-2 border-2 border-gray-500 rounded-md px-3 py-2 w-fit mb-4">
  Sort by
  <i class="fa-solid fa-chevron-down"></i>
</div>
      </div>
      <div className="grid grid-cols-4 gap-5 ml-40 mr-40 ">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item 
            key={i}
        id={item.id} 
        name={item.name} 
        image={item.image} 
        new_price={item.new_price} 
        old_price={item.old_price}
      />
          }else{
            return null;
          }
        })}
      </div>
      <div className="flex items-center justify-center "><button className="border-2 mt-20  border-gray-500 p-4 rounded-3xl">Explore More</button></div>
    </div>
  )
}

export default ShopCategory
