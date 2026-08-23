// import React from 'react'
// import { Link } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div>
     
//        <Link to={'/addproduct'}>
//        <div className="flex gap-4  w-60 m-5 bg-gray-200 rounded-2xl p-3 items-center">
//       <i class="text-purple-700 text-3xl fa-solid fa-cart-shopping"></i>
//       <p>Add product</p>
//       </div>
//       </Link>
    

//       <Link to={'/listproduct'}>
//       <div className="flex gap-4 m-5 w-60 bg-gray-200 rounded-2xl p-3 items-center">
//         <i className="text-3xl text-amber-300 fa-brands fa-product-hunt"></i>
//       <p>Product List</p>
//       </div>
//       </Link>

//     </div>
//   )
// }

// export default Sidebar


import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   <aside className="w-64 shrink-0 min-h-screen bg-white border-r border-gray-200 px-4 py-6">

  
      {/* Add Product */}
      <Link to="/addproduct">
        <div className="flex gap-4 w-full mb-4 bg-gray-100 hover:bg-gray-200 rounded-xl p-4 items-center transition cursor-pointer">
          <i className="text-purple-700 text-2xl fa-solid fa-cart-shopping"></i>

          <p className="text-base font-medium text-gray-800">
            Add product
          </p>
        </div>
      </Link>

      {/* Product List */}
      <Link to="/listproduct">
        <div className="flex gap-4 w-full bg-gray-100 hover:bg-gray-200 rounded-xl p-4 items-center transition cursor-pointer">
          <i className="text-2xl text-amber-400 fa-brands fa-product-hunt"></i>

          <p className="text-base font-medium text-gray-800">
            Product List
          </p>
        </div>
      </Link>

    </aside>
  )
}

export default Sidebar