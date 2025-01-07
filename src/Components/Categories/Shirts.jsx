import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import denimImage from '../shirtimg/denim.jpg';
import blackImage from '../shirtimg/black.jpg';
import blueImage from '../shirtimg/blue.avif';
import checkedImage from '../shirtimg/checked.jpeg';
import comboImage from '../shirtimg/combo.jpg';
import stripImage from '../shirtimg/strip.webp';
import whiteImage from '../shirtimg/white.webp';
import halfstripImage from '../shirtimg/halfstrip.jpeg';
import halfbrownImage from '../shirtimg/halfbrown.webp';
import skyblueImage from '../shirtimg/skyblue.jpg';
import threestripImage from '../shirtimg/threestrip.webp';
import greenImage from '../shirtimg/green.webp';
import { Link } from 'react-router-dom';

const Shirts = () => {
  return (
    <header>
      {/* Background Image */}
      <div className="relative bg-cover bg-top w-full h-[50vh] md:h-[75vh] bg-[url('../src/Components/shirtimg/shirtbg.jpg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white">
          Shirt Collections
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <h1 className="text-center font-bold font-serif text-3xl sm:text-4xl md:text-5xl mt-6 underline">
        New Arrivals
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        {[
          { image: denimImage, alt: "Denim Black",Description:"Dhiva", ProductName: "Denim Black", price: "500" },
          { image: checkedImage, alt: "Checked Shirt",Description:"Dhiva", ProductName: "Checked Shirt", price: "500" },
          { image: blackImage, alt: "Black Shirt",Description:"Dhiva", ProductName: "Black Shirt", price: "500" },
          { image: halfbrownImage, alt: "Half Sleeve Brown",Description:"Dhiva", ProductName: "Half Sleeve Brown", price: "500" },
          { image: halfstripImage, alt: "Half Hand Strip",Description:"Dhiva", ProductName: "Half Hand Strip", price: "500" },
          { image: comboImage, alt: "Combo",Description:"Dhiva", ProductName: "Combo", price: "500" },
          { image: whiteImage, alt: "White Shirt",Description:"Dhiva", ProductName: "White Shirt", price: "500" },
          { image: stripImage, alt: "Strip",Description:"Dhiva", ProductName: "Strip", price: "500" },
          { image: blueImage, alt: "NavyBlue Shirt",Description:"Dhiva", ProductName: "NavyBlue Shirt", price: "500" },
          { image: skyblueImage, alt: "Sky Blue Shirt",Description:"Dhiva", ProductName: "Sky Blue Shirt", price: "500" },
          { image: threestripImage, alt: "Three Line Strip",Description:"Dhiva", ProductName: "Three Line Strip", price: "500" },
          { image: greenImage, alt: "White and Green Strip",Description:"Dhiva", ProductName: "Green Strip", price: "500" },
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
          }} 
          >
            
          <button className="flex items-center justify-center bg-[#ff5100] px-6 py-2 mt-3 rounded-lg font-bold text-white mx-auto">
            <MdShoppingCart className="mr-2" /> Add
          </button>
          </Link>
        </div>
        ))}
      </div>
    </header>
  );
};

export default Shirts;
