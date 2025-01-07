import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const BuyNow = () => {
  const [shipping, setShipping] = useState(50);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState(""); // Track selected size
  const [count, setCount] = useState(1); // Track product count

  const location = useLocation();
  const { product } = location.state;

  // Calculate total price based on count and shipping
  const calculateTotal = () => {
    setTotal(parseInt(product.price) * count + shipping);
  };

  // Recalculate total when count changes
  useEffect(() => {
    calculateTotal();
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-orange-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Buy Now</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Product Image */}
          <div className="w-full lg:w-1/3">
            <img
              src={product.image}
              alt="Product"
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-2/3 lg:pl-10">
            <h2 className="text-2xl font-bold text-gray-800">{product.ProductName}</h2>
            <p className="text-gray-600 mt-2">{product.Description}</p>
            <h3 className="text-xl font-bold text-orange-600 mt-4">&#8377; {product.price}</h3>

            {/* Size Selector */}
            <div className="mt-6">
              <label className="block text-gray-600 font-medium">Size</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="" disabled>Select Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>

            {/* Count Selector */}
            <div className="mt-6 flex items-center">
              <label className="block text-gray-600 font-medium mr-4">Quantity</label>
              <button
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l-lg"
                onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </button>
              <input
                type="number"
                value={count}
                min="1"
                className="w-16 text-center border-t border-b border-gray-300"
                onChange={(e) => setCount(Math.max(1, parseInt(e.target.value) || 1))}
              />
              <button
                className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r-lg"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Shipping Form */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Shipping Address</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-gray-600 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-600 font-medium">Address</label>
              <textarea
                placeholder="Enter your address"
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-400"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray-600">Subtotal</p>
            <p className="text-gray-800 font-bold">&#8377; {parseInt(product.price) * count}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Shipping</p>
            <p className="text-gray-800 font-bold">&#8377; 50</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-gray-800 font-bold">Total:</p>
            <p className="text-orange-600 font-bold text-xl">&#8377; {total}</p>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-10">
          <Link to="/ConfirmPurchase"
         >
          <button
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700"
             // Disable button if size is not selected
          >
            Confirm Purchase
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
