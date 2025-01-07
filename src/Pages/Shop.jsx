import React from 'react'
import Mens from "../Pages/img/mensbg.avif"; 
import Womens from "../Pages/img/Womens.webp"; 
import kids from "../Pages/img/kids.jpg"; 


const Shop = () => {
    
  return (
    <div className="bg-black text-center p-8 pt-32">
      <h1 className="text-[2rem] text-center text-yellow-500 underline md:text-[2rem] font-serif">CATEGORIES</h1>
  <h1 className="text-[1.5rem] md:text-[2rem] text-white font-serif">
    Just the way you are is just the way you should be
  </h1>


  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4 text-center ">
 
    {[
      {
        image:Mens,
        alt: "Mens",
        name: "Mens",
        button: "View More",
        navigate:"/Mens"
      },
      
      {
        image: Womens,
        alt: "Womens",
        name: "Womens",
        button: "View More",
        navigate:"/Womens"
      },
      {
        image: kids,
        alt: "Kids",
        name: "Kids",
        button: "View More",
        navigate:"/Kids"

      },
      
    ].map((product,index) => (
      <div
            key={index}
            className="relative group py-4 sm:w-full md:w-auto "
          >
            <a href={product.navigate}>
              {/* Image */}
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-96 object-cover object-center rounded-full  transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100  duration-300 flex justify-center items-center rounded-lg">
                <h1 className="text-white text-lg sm:text-xl md:text-5xl font-bold text-center">
                  {product.name}
                </h1>
              </div>
            </a>
          </div>
    ))}
  </div>
</div>

  )
}

export default Shop

