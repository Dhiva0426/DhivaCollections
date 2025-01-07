import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import lipstick from './beauty/lipstick.jpg'
import nailPolish from './beauty/nailPolish.jpg'
import perfume from './beauty/perfume.jpg'
import colorPalette from './beauty/colorPalette.jpg'
import { Link } from 'react-router-dom';

const Chudi = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-top w-full h-[50vh] sm:h-[500vh] lg:h-[75vh] xl:[75vh] bg-[url('../src/Components/womens/beauty/beatybg.webp')]">
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-serif font-bold text-white">
            Beauty Products
          </h1>
        </div>
      </div>
      <h1 className="text-center font-serif pt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-600 font-bold">
        NO MORE DULL SKIN...
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
        {[
          {
            image: lipstick,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: nailPolish,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: colorPalette,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: perfume,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: lipstick,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: nailPolish,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: colorPalette,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: perfume,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: lipstick,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: nailPolish,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: colorPalette,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
          },
          {
            image: perfume,
            alt: "Black Shoe",
            Description:"Dhiva",
            ProductName: "Black Shoe",
            price: "2000",
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

export default Chudi;
