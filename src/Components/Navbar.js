import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp, FaFacebook, FaHome, FaShoppingCart, FaBook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdAddIcCall, MdOutlineFamilyRestroom } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md">
     
      <div className="bg-red-600 text-white p-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
         
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6">
            <div className="flex items-center">
              <SiGmail className="mr-2 text-2xl text-green-500" />
              <a href="mailto:dhiva3078@gmail.com" className="text-sm hover:text-gray-500">
                dhiva3078@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MdAddIcCall className="mr-2 text-2xl text-green-500" />
              <span className="text-sm hover:text-gray-500">+91 75400 63351</span>
            </div>
          </div>

          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/name_is_dhiva_/"
              className="hover:text-pink-500 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://wa.me/7540063351"
              className="hover:text-green-500 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              className="hover:text-blue-500 text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
           <button className="px-4 py-1 bg-black opacity-90 rounded-full font-bold ">
              <a href="/Login" className="hover:text-gray-300">
                Login
              </a>
              <span> | </span>
              <a href="/Signup" className="hover:text-gray-300">
                Sign Up
              </a>
            </button>
            </div>
        </div>
      </div>

    
      <header className="bg-black  text-white p-3">
        <div className="container mx-auto flex justify-between items-center">
        
          <div className="flex text-center text-2xl font-bold basis-1/3">
            <a href="/" className="text-[#B4121B]">
              <span className="text-[4rem]">D</span>
              <span className="text-[3rem]">h</span>
              <span className="text-[2.5rem]">i</span>
              <span className="text-[2rem]">v</span>
              <span className="text-[1.5rem]">a</span>
              <span> </span>
              <span className="text-[1.5rem]">Fashion</span>
           
            </a>
          </div>

        
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>

         
          <nav className="hidden md:flex justify-around items-center basis-2/3">
            <a href="/Home" className="hover:text-red-500 flex items-center text-white space-x-2">
              <FaHome size={20} />
              <span>Home</span>
            </a>
            <a href="/Shop" className="hover:text-red-500 flex items-center text-white space-x-2">
              <FaShoppingCart size={20} />
              <span>Shop</span>
            </a>
            <a href="/Collections" className="hover:text-red-500 flex items-center text-white space-x-2">
              <MdOutlineFamilyRestroom size={20} />
              <span>Collections</span>
            </a>
            <a href="/About" className="hover:text-red-500 flex items-center text-white space-x-2">
              <FaBook size={20} />
              <span>About Us</span>
            </a>
            <a href="/Contact" className="hover:text-red-500 flex items-center text-white space-x-2">
              <BsPeopleFill size={20} />
              <span>Contact Us</span>
            </a>
           
          </nav>
        </div>

       
        {isOpen && (
          <nav className=" md:hidden bg-black text-white p-4">
            <a href="/Home" className="flex py-2 hover:text-red-500">
            <FaHome size={20} />
            <span>Home</span>
            </a>
            <a href="/Shop" className="flex py-2 hover:text-red-500">
            <FaShoppingCart size={20} />
            <span>Shop</span>
            </a>
            <a href="/Collections" className="flex py-2 hover:text-red-500">
            <MdOutlineFamilyRestroom size={20} />
            <span>Collections</span>
            </a>
            <a href="/About" className="flex py-2 hover:text-red-500">
            <FaBook size={20} />
            <span>About Us</span>
            </a>
            <a href="/Contact" className="flex py-2 hover:text-red-500">
            <BsPeopleFill size={20} />
            <span>Contact Us</span>
            </a>
            {/* <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.instagram.com/name_is_dhiva_/"
                className="hover:text-pink-500 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://wa.me/7540063351"
                className="hover:text-green-500 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://facebook.com"
                className="hover:text-blue-500 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div> */}
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
