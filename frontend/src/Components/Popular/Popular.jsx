import data_product from "../../Data/data.js"
import Item from "../Item/Item.jsx"

const Popular = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Popular in women</h1>
   
      <hr className="w-24 h-1 bg-black mx-auto rounded-full mt-2 mb-6" />
      
   <div className="flex overflow-x-auto gap-10  px-40 ml-40 no-scrollbar snap-x snap-mandatory">
  {data_product.map((item,i)=>(
    <div key={i} className="flex-shrink-0 w-64 snap-center">
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

export default Popular
