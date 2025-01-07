import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import blacksuitImage from '../suitsimg/blacksuit.jpg';
import bluesuitImage from '../suitsimg/bluesuit.webp';
import brownsuitImage from '../suitsimg/brownsuit.webp';
import creamsuitImage from '../suitsimg/creamsuit.jpeg';
import graysuitImage from '../suitsimg/graysuit.avif';
import greensuitImage from '../suitsimg/greensuit.webp';
import pinksuitImage from '../suitsimg/pinksuit.jpg';
import redsuitImage from '../suitsimg/redsuit.webp';
import skybluesuitImage from '../suitsimg/skybluesuit.webp';
import whitesuitImage from '../suitsimg/whitesuit.webp';
import yellowsuitImage from '../suitsimg/yellowsuit.webp';
import { Link } from 'react-router-dom';

const Suits = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center w-full  md:h-[75vh] h-[50vh] bg-[url('../src/Components/suitsimg/suitbg.jpeg')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white">
            Suit Collections
          </h1>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6">
          {[
            {
              image: blacksuitImage,
              alt: "Black Suit",
              name: "Black Suit",
              price: "2000",
            },
            {
              image: bluesuitImage,
              alt: "Blue Suit",
              name: "Blue Suit",
              price: "2000",
            },
            {
              image: greensuitImage,
              alt: "Blue Suit",
              name: "Blue Suit",
              price: "2000",
            },
            {
              image: brownsuitImage,
              alt: "Brown Suit",
              name: "Brown Suit",
              price: "2000",
            },
            {
              image: creamsuitImage,
              alt: "Wedding Cream Suit",
              name: "Wedding Cream Suit",
              price: "2500",
            },
            {
              image: graysuitImage,
              alt: "Gray Suit",
              name: "Gray Suit",
              price: "1700",
            },
            {
              image: redsuitImage,
              alt: "Marron Suit",
              name: "Marron Suit",
              price: "2000",
            },
            {
              image: skybluesuitImage,
              alt: "Sky Blue Suit",
              name: "Sky Blue Suit",
              price: "2000",
            },
            {
              image: whitesuitImage,
              alt: "Wedding White Suit",
              name: "Wedding White Suit",
              price: "2000",
            },
            {
              image: yellowsuitImage,
              alt: "Yellow Suit",
              name: "Yellow Suit",
              price: "2000",
            },
            {
              image: pinksuitImage,
              alt: "Wedding Pink Suit",
              name: "Wedding Pink Suit",
              price: "2500",
            },
            {
              image: blacksuitImage,
              alt: "Black Suit",
              name: "Black Suit",
              price: "2000",
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
      </div>
  );
};

export default Suits;
