import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import blackwatchImage from '../accessimg/blackwatch.jpg';
import sunglassImage from '../accessimg/sunglass.webp';
import glassImage from '../accessimg/glass.webp';
import smartwatchImage from '../accessimg/smartwatch.webp';
import blackglassImage from '../accessimg/blackglass.webp';
import walletImage from '../accessimg/wallet.jpg';
import { Link } from 'react-router-dom';

const Accessories = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center w-full md:h-[75vh] h-[50vh] lg:h-[75vh] bg-[url('../src/Components/accessimg/accessbg.jpg')]">
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-serif font-bold text-white">
            Accessories
          </h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        {[
          {
            image: blackwatchImage,
            alt: "Black Watch",
            Description:"Dhiva",
            ProductName: "Black Watch",
            price: "2000",
          },
          {
            image: smartwatchImage,
            alt: "Smart Watch",
            Description:"Dhiva",
            ProductName: "Smart Watch",
            price: "4000",
          },
          {
            image: glassImage,
            alt: "Reading Glass",
            Description:"Dhiva",
            ProductName: "Reading Glass",
            price: "1500",
          },
          {
            image: walletImage,
            alt: "Leather Wallet",
            Description:"Dhiva",
            ProductName: "Leather Wallet",
            price: "1200",
          },
          {
            image: blackglassImage,
            alt: "Black Glass",
            Description:"Dhiva",
            ProductName: "Black Glass",
            price: "1800",
          },
          {
            image: sunglassImage,
            alt: "Sunglasses",
            Description:"Dhiva",
            ProductName: "Sunglasses",
            price: "2500",
          },
          {
            image: blackwatchImage,
            alt: "Black Watch",
            Description:"Dhiva",
            ProductName: "Black Watch",
            price: "2000",
          },
          {
            image: smartwatchImage,
            alt: "Smart Watch",
            Description:"Dhiva",
            ProductName: "Smart Watch",
            price: "4000",
          },
          {
            image: glassImage,
            alt: "Reading Glass",
            Description:"Dhiva",
            ProductName: "Reading Glass",
            price: "1500",
          },
          {
            image: walletImage,
            alt: "Leather Wallet",
            Description:"Dhiva",
            ProductName: "Leather Wallet",
            price: "1200",
          },
          {
            image: blackglassImage,
            alt: "Black Glass",
            Description:"Dhiva",
            ProductName: "Black Glass",
            price: "1800",
          },
          {
            image: sunglassImage,
            alt: "Sunglasses",
            Description:"Dhiva",
            ProductName: "Sunglasses",
            price: "2500",
          },
        ].map((product, index) => (
          <div key={index} className="text-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-[300px] object-cover rounded-lg mx-auto transform group-hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-black font-bold mt-4 text-sm sm:text-base md:text-lg">{product.ProductName}</h1>
          <h1 className="text-gray-700 font-bold">&#8377;{product.price}</h1>
          <Link to="/BuyNow"
            state={{
              product:product,
            }} >
            <button className="flex items-center justify-center bg-[#ff5100] px-4 sm:px-6 py-2 mt-3 rounded-lg font-bold text-white mx-auto hover:bg-orange-700">
              <MdShoppingCart className="mr-2" /> Add
            </button>
            </Link>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
