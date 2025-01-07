import React from 'react';
import Saree from '../womens/img/saree.webp'
import Lehenga from '../womens/img/Lehenga.webp';
import Chudi from '../womens/img/chudi.jpg';
import wshirt from '../womens/img/wshirt.jpg';
import Wfootwear from '../womens/img/Wfootwear.jpg';
import Waccess from '../womens/img/Waccess.jpg';
import beautyProdut from '../womens/img/beautyProduct.jpg';


const Mens = () => {

  return (
    <div>
      <div className="bg-cover bg-top w-full h-[50vh] md:h-[75vh] lg:h-[75vh] xl:[75vh] bg-[url('../src/Components/womens/img/bg.jpg')]">
        <div className=" h-full flex items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-8xl font-serif font-bold text-white">
            Womens
          </h1>
        </div>
      </div>

    
    <div className="bg-black text-center p-8">
      <h1 className="text-[3rem] text-center text-yellow-500 underline md:text-[2rem] font-serif">CATEGORIES</h1>
      <h1 className="text-[1.5rem] md:text-[2rem] text-white font-serif">
        TRENDY FASHION CLOTHES
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 p-4 text-center">

        {[
            
            {
              image: Saree,
              alt: "Saree",
              name: "Saree's",
              navigate: "/Saree"
            },
            {
              image: Lehenga,
              alt: "Lehenga",
              name: "Lehenga",
              navigate: "/Lehenka"
  
            },
            {
              image: Chudi,
              alt: "Chudi",
              name: "Chudithar",
              navigate: "/Chudi"
            },
           
            {
              image: wshirt,
              alt: "Modern",
              name: "Modern",
              navigate: "/Modern"
            },
            {
              image: beautyProdut,
              alt: "Beauty Products",
              name: "Beauty Products",
              navigate: "/Beauty"
            },
            
            {
              image: Waccess,
              alt: "Accessories",
              name: "Accessories",
              navigate: "/WomenAccessories"
            },
            {
              image: Wfootwear,
              alt: "Footwear",
              name: "Footwear",
              navigate: "/WomenFootwear"
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
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover object-top rounded-full  transform group-hover:scale-105 transition-transform duration-300"
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