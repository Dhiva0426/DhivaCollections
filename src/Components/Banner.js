import React from 'react';

const Banner = () => {
  return (
    <div className="bg-cover bg-top w-full h-[70vh] bg-[url('../src/Components/bannerImg/home.jpg')]">
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-end items-center text-center text-white">
        <h1 className="text-6xl font-bold mb-4 text-yellow-600 font-serif">ALL YOUR FASHION</h1>
        <p className="mb-6 text-5xl font-serif text-gray-200">Need At One Place</p>
        <div className='mb-5'>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4">
            Read More
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;



// import React from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import banner1 from "../Components/bannerImg/home.jpg"
// import banner2 from "../Components/bannerImg/home3.jpg"

// const Banner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const banners = [
//     {
//       id: 1,
//       image: banner1,
//       text: "Discover the Latest Trends",
//     },
//     {
//       id: 2,
//       image: banner2,
//       text: "Unmatched Quality & Style",
//     },
//     {
//       id: 3,
//       image: banner1,
//       text: "Seasonal Offers are Here",
//     },
//     {
//       id: 4,
//       image: banner2,
//       text: "Shop Your Favorites Now!",
//     },
//   ];

//   return (
//     <div className="max-w-screen-xl mx-auto mt-8">
//       <Slider {...settings}>
//         {banners.map((banner) => (
//           <div key={banner.id} className="relative">
//             <img
//               src={banner.image}
//               alt={`Banner ${banner.id}`}
//               className="w-full h-[400px] object-cover rounded-lg shadow-md"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <h2 className="text-white text-3xl font-bold">{banner.text}</h2>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Banner;
