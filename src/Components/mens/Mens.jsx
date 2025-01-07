import React from 'react';
import shirt from '../mens/shirt.jpg'
import jeans from '../mens/jeans.jpg';
import tshirt from '../mens/tshirt.jpg';
import suits from '../mens/Suits.jpg';
import jackets from '../mens/jackets.jpg';
import accessories from '../mens/accessories.jpg';
import footwear from '../mens/footwear.jpg';

const Mens = () => {

  return (
    <div>
      <div className="bg-cover bg-top w-full h-[50vh] sm:h-[50vh] lg:h-[75vh] xl:[75vh] bg-[url('../src/Pages/img/mensbg.avif')]">
        <div className=" h-full flex items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-serif font-bold text-white">
            Mens
          </h1>
        </div>
      </div>

    
    <div className="bg-black text-center p-8">
      <h1 className="text-[3rem] text-center text-yellow-500 underline md:text-[2rem] font-serif">CATEGORIES</h1>
      <h1 className="text-[1.5rem] md:text-[2rem] text-white font-serif">
        YOUR FASHION YOUR RULES
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 p-4 text-center">

        {[
          {
            image: shirt,
            alt: "Shirts",
            name: "Shirts",
            button: "View More",
            navigate: "/Shirts"
          },
          {
            image: jeans,
            alt: "Jeans",
            name: "Jeans",
            button: "View More",
            navigate: "/Jeans"

          },
          {
            image: suits,
            alt: "Suits",
            name: "Suits",
            button: "View More",
            navigate: "/Suits"
          },
          {
            image: jackets,
            alt: "Jakcets",
            name: "Jakcets",
            button: "View More",
            navigate: "/Jackets"
          },
          {
            image: tshirt,
            alt: "TShirts",
            name: "T Shirts",
            button: "View More",
            navigate: "/TShirts"
          },
          {
            image: accessories,
            alt: "Accessories",
            name: "Assoccries",
            button: "View More",
            navigate: "/Accessories"
          },
          {
            image: footwear,
            alt: "Footwears",
            name: "Footwears",
            button: "View More",
            navigate: "/Footwears"
          },
        ].map((product, index) => (
          <div
            key={index}
            className="relative group py-4 sm:w-full md:w-auto"
          >
            <a href={product.navigate}>
              {/* Image */}
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-full  transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100  duration-300 flex justify-center items-center rounded-lg">
                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center">
                  {product.name}
                </h1>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Mens