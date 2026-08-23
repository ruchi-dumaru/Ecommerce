import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const AddProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success ? alert("ProductAdded") : alert("Failed");
        });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Add Product
        </h1>

        <p className="text-gray-500 mt-1">Add a new product to your store</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 sm:p-8">
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Product Title
          </p>

          <input
            value={productDetails.name}
            onChange={changeHandler}
            type="text"
            name="name"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none  transition"
            placeholder="Type the product name"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Price</p>

            <input
              value={productDetails.old_price}
              onChange={changeHandler}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none transition"
              type="text"
              name="old_price"
              placeholder="Type here"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Offer Price
            </p>

            <input
              value={productDetails.new_price}
              onChange={changeHandler}
              className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl outline-none transition"
              type="text"
              name="new_price"
              placeholder="Type here"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Product Category
          </p>

          <select
            value={productDetails.category}
            onChange={changeHandler}
            className="w-full sm:w-1/2 p-3 sm:p-4 border border-gray-300 rounded-xl outline-none  bg-white"
            name="category"
          >
            <option value="select">Select</option>

            <option value="women">Women</option>

            <option value="men">Men</option>

            <option value="kid">Kid</option>
          </select>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Product Image
          </p>

          <label
            htmlFor="file-input"
            className="w-36 h-36 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center cursor-pointer  transition overflow-hidden"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Product preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <i className="text-5xl text-gray-400 fa-solid fa-folder-plus"></i>
            )}
          </label>

          <input
            id="file-input"
            onChange={imageHandler}
            type="file"
            className="hidden"
          />
        </div>

       
        <button
          onClick={() => {
            AddProduct();
          }}
          className="w-full sm:w-auto px-8 py-3 bg-blue-600  text-white font-medium rounded-xl transition"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
