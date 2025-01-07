import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Menswear</h2>
          <p className="text-gray-400">
            Discover the latest trends in men's fashion. Shop from our exclusive
            collection of formal wear, casuals, and accessories.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="/Home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/Shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/Collections" className="hover:text-white">
                Collections
              </a>
            </li>
            <li>
              <a href="/About" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:text-white">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-400 space-y-2">
            <li>46.A Nethaji Street, salem City</li>
            <li>Email: dhiva3078@gmail.com</li>
            <li>Phone: +75400 63351</li>
          </ul>
          
        </div>

        <div className="">
            <h4 className="font-bold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="mailto:dhiva3078@gmail.com" className="hover:text-green-950">
              <SiGmail size={25}/>
              </a>
              <a href="https://wa.me/7540063351" className="hover:text-green-400">
              <FaWhatsapp size={25}/>
              </a>
              <a href="https://www.instagram.com/name_is_dhiva_/" className="hover:text-[red]">
              <RiInstagramFill size={25}/>
              </a>
              <a href="#" className="hover:text-blue-400">
              <FaFacebook size={25}/>
              </a>
              <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={25}/>
              </a>
            </div>
          </div> 
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center">
        <p className="text-gray-400">
          &copy; 2024 Menswear. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
