import React from 'react'

const Item = (props) => {
  return (
    <div className="">
      <div>
        <img src={props.image} alt="image"/>
      <p>{props.name}</p>
      <div className="flex gap-5">
        <p>${props.new_price}</p>
         <p className="text-gray-300 line-through">${props.old_price}</p>
      </div>
      </div>
    </div>
  )
}

export default Item

