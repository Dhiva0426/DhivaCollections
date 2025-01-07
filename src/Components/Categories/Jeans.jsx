import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import angleImage from '../jeansimg/angle.jpg';
import bagyblackImage from '../jeansimg/bagyblack.jpeg';
import toneblueImage from '../jeansimg/toneblue.jpg';
import blackImage from '../jeansimg/black.jpg';
import bluegrayImage from '../jeansimg/bluegray.webp';
import cargoImage from '../jeansimg/cargo.jpeg';
import comboImage from '../jeansimg/combo.webp';
import greenImage from '../jeansimg/green.jpeg';
import combocargoImage from '../jeansimg/combocargo.webp';
import kneecutImage from '../jeansimg/kneecut.jpeg';
import toneImage from '../jeansimg/tone.jpg';
import whiteImage from '../jeansimg/white.jpg';
import { Link } from 'react-router-dom';

const Jeans = () => {
  return (
    <header>
      <div className='bg-[url("../src/Components/jeansimg/jeanbg.webp")] bg-cover bg-center w-full h-[50vh] md:h-[75vh]'>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-serif font-bold text-white">
            Jeans
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-5 mt-2">
        {[
          { image: angleImage, alt: "Angle Fit Jean", name: "Angle Fit Jean", price: "700" },
          { image: bagyblackImage, alt: "Baggy Black Jean", name: "Baggy Black Jean", price: "800" },
          { image: toneblueImage, alt: "Tone Blue Jean", name: "Tone Blue Jean", price: "1000" },
          { image: blackImage, alt: "Black Jean", name: "Black Jean", price: "600" },
          { image: bluegrayImage, alt: "Bluegray Jean", name: "Bluegray Jean", price: "500" },
          { image: cargoImage, alt: "Cargo Jean", name: "Cargo Jean", price: "900" },
          { image: comboImage, alt: "Combo Jean", name: "Combo Jean", price: "1200" },
          { image: greenImage, alt: "Green Jean", name: "Green Jean", price: "700" },
          { image: kneecutImage, alt: "Knee Cut Jean", name: "Knee Cut Jean", price: "800" },
          { image: combocargoImage, alt: "Combo Cargo Jean", name: "Combo Cargo Jean", price: "1500" },
          { image: toneImage, alt: "Tone Jean", name: "Tone Jean", price: "800" },
          { image: whiteImage, alt: "White Jean", name: "White Jean", price: "750" },
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

export default Jeans;
