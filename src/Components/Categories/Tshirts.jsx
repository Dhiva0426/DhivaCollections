import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import blackImage from '../tshirt/black.webp';
import whiteImage from '../tshirt/white.webp';
import comboImage from '../tshirt/combo.webp';
import roundedImage from '../tshirt/rounded.webp';
import { Link } from 'react-router-dom';

const Tshirts = () => {
  return (
    <header>
      {/* Hero Section */}
      <div className="bg-[url('../src/Components/tshirt/tshirtbg.jpg')] bg-cover bg-center w-full md:h-[75vh] h-[50vh] lg:h-[75vh] flex items-center justify-center">
      <div className="bg-black bg-opacity-50 h-full w-full flex items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-serif font-bold text-white">
            T Shirts
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <h1 className="text-center font-bold font-serif text-2xl sm:text-4xl lg:text-5xl mt-6 underline">
        New Arrivals
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        {[
          {
            image: blackImage,
            alt: "Black T Shirt",
            name: "Black T Shirt",
            price: "500",
          },
          {
            image: whiteImage,
            alt: "White T Shirt",
            name: "White T Shirt",
            price: "500",
          },
          {
            image: comboImage,
            alt: "Combo",
            name: "Combo",
            price: "500",
          },
          {
            image: roundedImage,
            alt: "Rounded Brown",
            name: "Rounded Brown",
            price: "500",
          },
          {
            image: blackImage,
            alt: "Black T Shirt",
            name: "Black T Shirt",
            price: "500",
          },
          {
            image: whiteImage,
            alt: "White T Shirt",
            name: "White T Shirt",
            price: "500",
          },
          {
            image: comboImage,
            alt: "Combo",
            name: "Combo",
            price: "500",
          },
          {
            image: roundedImage,
            alt: "Rounded Brown",
            name: "Rounded Brown",
            price: "500",
          },
          {
            image: blackImage,
            alt: "Black T Shirt",
            name: "Black T Shirt",
            price: "500",
          },
          {
            image: whiteImage,
            alt: "White T Shirt",
            name: "White T Shirt",
            price: "500",
          },
          {
            image: comboImage,
            alt: "Combo",
            name: "Combo",
            price: "500",
          },
          {
            image: roundedImage,
            alt: "Rounded Brown",
            name: "Rounded Brown",
            price: "500",
          },
        ].map((product, index) => (
          <div key={index} className="text-center bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-[300px] object-cover rounded-lg mx-auto transform group-hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-black font-bold mt-4 text-sm sm:text-base md:text-lg">{product.name}</h1>
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
    </header>
  );
};

export default Tshirts;
