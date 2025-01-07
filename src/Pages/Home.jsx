// Carousel.jsx
import React from "react";
import Shop from '../Pages/Shop';
import About from '../Pages/About';
import Collections from '../Pages/Collections';
import Contact from '../Pages/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../Components/bannerImg/home.jpg";
import banner2 from "../Components/bannerImg/banner2.jpg";
import banner3 from "../Components/bannerImg/home3.jpg";
import banner4 from "../Components/bannerImg/home4.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const banners = [
    {
      id: 1,
      image: banner1,
      text: "ALL YOUR FASHION",
      text2: "Need At One Place",
    },
    {
      id: 2,
      image: banner2,
      title: "MENS...",
      text: "YOUR FASHION YOUR RULES",
      text2: "Up to 50% Off",
    },
    {
      id: 3,
      image: banner3,
      title: "WOMENS...",
      text: "TRENDY FASHION CLOTHES",
      text2: "Up to 50% Off",
    },
    {
      id: 4,
      image: banner4,
      title: "KIDS...",
      text: "STYLE FOR LITTLE ONES",
      text2: "Up to 50% Off",
    },
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="w-full mt-8">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              {/* Responsive Image */}
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] object-cover object-top rounded-lg shadow-md"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center lg:justify-end text-center px-4">
                {/* Title */}
                {banner.title && (
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-300 font-serif underline decoration-transparent decoration-2">
                    {banner.title}
                  </h1>
                )}
                {/* Text */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-yellow-600 font-serif">
                  {banner.text}
                </h1>
                {/* Subtext */}
                <p className="mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-200">
                  {banner.text2}
                </p>
                {/* Buttons */}
                <div className="mb-5 flex flex-wrap justify-center gap-4">
                 <a href="/Shop">
                 <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    Read More
                  </button>
                 </a>
                  <a href="/Contact">
                  <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                    Contact Us
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Other Sections */}
      <div className="mt-12 px-4 md:px-8 lg:px-16">
        <Shop />
        <Collections />
        <Contact />
        <About />
      </div>
    </div>
  );
};

export default Home;
