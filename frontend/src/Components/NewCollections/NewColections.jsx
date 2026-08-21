import React from 'react'
import new_collection from "../../Data/new_collection.js"
import Item from '../Item/Item'
const NewColections = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">New Collections</h1>
   
      <hr className="w-24 h-1 bg-black mx-auto rounded-full mt-2 mb-6" />
      
   <div className="grid grid-cols-4 gap-5 ml-40 mr-40 ">
  {new_collection.map((item,i)=>(
    <div key={i} className="w-64 ">
      <Item 
        id={item.id} 
        name={item.name} 
        image={item.image} 
        new_price={item.new_price} 
        old_price={item.old_price}
      />
    </div>
  ))}
</div>

    </div>
  )
}

export default NewColections
