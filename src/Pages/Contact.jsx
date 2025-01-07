import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black items-center justify-center p-5 gap-5 pt-32">
      {/* Left Section (Map and Store Information) */}
      <div className="lg:w-1/2 w-full flex flex-col items-center mb-8 lg:mb-0">
        <div className="w-full h-80 md:h-80 lg:w-[455px] lg:h-[450px] xl:w-full xl:h-[400px] object-cover">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.4776919472204!2d78.16173965875771!3d11.636063539559315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babef2d4c4e42f7%3A0x22e29d76e9a2d0d1!2sKaruppasamy%20Kovil!5e0!3m2!1sen!2sin!4v1732863270245!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-gray-900 text-white w-full shadow-lg p-5 mt-4 lg:mt-0">
          <h3 className="text-xl font-semibold mb-3 text-center">Our Store</h3>
          <p className="text-center">46.A Nethaji Street, Kalarampatty, Salem-636015.</p>
          <p className="text-center mt-2">
            Call Us:{" "}
            <a href="tel:+917540063351" className="text-red-500">
              +91 75400 63351
            </a>
          </p>
          <p className="text-center mt-2">
            Email:{" "}
            <a href="mailto:dhiva3078@gmail.com" className="text-red-500">
              dhiva3078@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Right Section (Contact Form) */}
      <div className="lg:w-1/2 w-full px-4 md:px-8">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold bg-aqua p-2 rounded-lg">
            Contact Us
          </h1>
        </div>
        <div className="p-2 bg-white rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch with Us</h2>
          <p className="text-center text-gray-600 mb-6">
            Have questions or inquiries about our exclusive menswear collections? Let us know!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white font-bold px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
