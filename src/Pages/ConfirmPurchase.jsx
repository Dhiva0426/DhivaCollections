import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmPurchase = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from the previous page (BuyNow)
  const { product, size, count, shippingDetails, total } = location.state || {};

  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);

    // Simulate a delay for confirmation
    setTimeout(() => {
      // Redirect to home or another page after confirmation
      navigate("/");
    }, 3000);
  };

  if (!product || !shippingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-xl font-bold text-gray-800">
          No purchase details found.
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-orange-600 text-white text-center py-6">
        <h1 className="text-3xl font-bold">Confirm Purchase</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        {/* Order Summary */}
        <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">Product Name:</p>
            <p className="font-bold text-gray-800">{product.ProductName}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Size:</p>
            <p className="font-bold text-gray-800">{size}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Quantity:</p>
            <p className="font-bold text-gray-800">{count}</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Subtotal:</p>
            <p className="font-bold text-gray-800">
              &#8377; {product.price * count}
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">Shipping:</p>
            <p className="font-bold text-gray-800">&#8377; 50</p>
          </div>
          <div className="flex justify-between items-center mt-4 border-t pt-4">
            <p className="text-lg font-bold text-gray-800">Total:</p>
            <p className="text-orange-600 font-bold text-xl">&#8377; {total}</p>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800">Shipping Details</h2>
          <div className="mt-4">
            <p className="text-gray-600">
              <span className="font-bold">Full Name:</span> {shippingDetails.name}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Phone:</span> {shippingDetails.phone}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Address:</span> {shippingDetails.address}
            </p>
          </div>
        </div>

        {/* Confirm Button */}
        {!confirmed ? (
          <div className="text-center mt-10">
            <button
              onClick={handleConfirm}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700"
            >
              Confirm Purchase
            </button>
          </div>
        ) : (
          <div className="text-center mt-10">
            <p className="text-lg text-green-600 font-bold">
              Purchase Confirmed! Redirecting to Home...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmPurchase;
