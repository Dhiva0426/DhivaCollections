import React from 'react';
import { MdShoppingCart } from "react-icons/md";
import hoodieImage from "../Components/product img/hoodie.jpg";
import suitImage from "../Components/product img/suit.jpg";
import blacktsImage from "../Components/product img/whitets.webp";
import shirtcImage from "../Components/product img/shirtc.webp";
import watchImage from "../Components/product img/watch.jpg";
import slipper from "../Components/footwears/slipper.webp";
import angle from '../Components/jeansimg/angle.jpg'
import greenshirt from '../Components/shirtimg/green.webp'
import slippers from '../Components/footwears/trendyslipper.avif'
import blueDenimJ from '../Components/jimage/blue.jpg'
import wallet from '../Components/accessimg/wallet.jpg'
import saree from '../Components/womens/sarees/saree1.jpg'
import chudi from '../Components/womens/chudi/churidar1.webp'
import lipstick from '../Components/womens/beauty/lipstick.jpg'
import wslipper from '../Components/womens/footwear/sandalStrap.jpg'
import handbag from '../Components/womens/access/handbag.jpg'
import lehenka from '../Components/womens/lehenka/lehenka1.jpg'
import boy1 from '../Components/kids/boys/boy1.webp'
import girl1 from '../Components/kids/girls/tshirtPant.jpg'
import wshirt from '../Components/womens/img/wshirt.jpg'
import lehenka2 from '../Components/womens/img/Lehenga.webp'
import girl2 from '../Components/kids/girls/kidschudi.jpg'
import boy2 from '../Components/kids/boys/boy2.webp'
import perfume from '../Components/womens/beauty/perfume.jpg'
import { Link } from 'react-router-dom';
const Collections = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6 md:px-8 lg:px-16 pt-32">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-600 font-bold">
        New Arrivals
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mt-8">
        {[
          {
            image: hoodieImage,
            alt: "Hoodie",
            Description:"This hoodie is made of high-quality materials that will keep you warm and comfortable all season long",
            ProductName: "Hoodie",
            price: "500",
          },
          {
            image: suitImage,
            alt: "Blue Jacket",
            Description:"This stylish blue jacket combines functionality and fashion, making it a perfect addition to your wardrobe.",
            ProductName: "Blue Jacket",
            price: "2000",
          },
          {
            image: greenshirt,
            alt: "Green Stripe Shirt",
            Description:"This classic green stripe shirt offers a perfect balance of sophistication and casual charm, making it an essential piece for any wardrobe. ",
            ProductName: "Green Stripe Shirt",
            price: "800",
          },
          {
            image: slipper,
            alt: "Slipper",
            Description:" Made with soft and durable materials, featuring a cushioned sole that ensures maximum comfort and long-lasting wear.",
            ProductName: "Slipper",
            price: "1200",
          },
          
          {
            image: shirtcImage,
            alt: "Casual Shirt",
            Description:" Made from high-quality, breathable fabric like cotton or a cotton-blend to keep you cool and comfortable throughout the day.",
            ProductName: "Casual Shirt",
            price: "500",
          },
          {
            image: blacktsImage,
            alt: "Round Neck White Tshirt",
            Description:"Keep it simple, stylish, and comfortable with this classic round neck white t-shirt, a wardrobe essential for any occasion. ",
            ProductName: "Round Neck White Tshirt",
            price: "300",
          },
          {
            image: angle,
            alt: "Angle fit jean",
            Description:"These Angle Fit Jeans combine contemporary style with a flattering fit, designed to enhance your look and provide all-day comfort.",
            ProductName: "Angle fit jean",
            price: "1000",
          },
          {
            image: blueDenimJ,
            alt: "Blue Denim Jacket",
            Description:"This Blue Denim Jacket is a timeless wardrobe staple that combines rugged appeal with versatile style, perfect for layering and enhancing any outfit. ",
            ProductName: "Blue Denim Jacket",
            price: "1400",
          },
          {
            image: saree,
            alt: "Saree",
            Description:"DhivaA Traditional Saree is the epitome of elegance, grace, and timeless beauty. This classic garment is a symbol of rich culture and heritage, known for its ability to blend style and tradition in a stunning fashion. ",
            ProductName: "Saree",
            price: "1000",
          },
          {
            image: lipstick,
            alt: "Red lipstick",
            Description:"Red Lipstick is a timeless and bold beauty essential that adds an instant touch of glamour, confidence, and sophistication to any look.",
            ProductName: "Red lipstick",
            price: "2500",
          },
          
          {
            image: wslipper,
            alt: "Women Slipper",
            Description:"Women’s Slipper Heels are the perfect fusion of comfort and style, offering an elegant footwear option for a variety of occasions.",
            ProductName: "Women Slipper",
            price: "500",
          },
          {
            image: chudi,
            alt: "Yellow Chudithar",
            Description:"Bright and elegant, this yellow chudithar is the perfect addition to your traditional wardrobe. Crafted from soft, breathable fabric, it offers both comfort and style. ",
            ProductName: "Yellow Chudithar",
            price: "2000",
          },
          {
            image: handbag,
            alt: "Handbag",
            Description:"Elevate your fashion game with this chic and functional handbag. Designed to complement any outfit, this versatile accessory is perfect for both casual outings and formal events. ",
            ProductName: "Handbag",
            price: "800",
          },
          {
            image: slippers,
            alt: "Combo Slipper",
            Description:"Step into comfort with our exclusive Combo Slipper Offer! Get two pairs of premium slippers at a special price and enjoy unbeatable comfort for every occasion. ",
            ProductName: "Combo Slipper",
            price: "900",
          },
          {
            image: wallet,
            alt: "Mens Wallet",
            Description:"Elevate your accessory game with our Men's Wallet – the perfect blend of style, practicality, and durability. ",
            ProductName: "Mens Wallet",
            price: "300",
          },
          
          {
            image: boy1,
            alt: "Boys Suit",
            Description:"Get your little one dressed to impress with our Boys Suit, designed to offer both style and comfort for every special occasion.",
            ProductName: "Boys Suit",
            price: "300",
          },
          {
            image: girl1,
            alt: "Girl Casual Dress",
            Description:"This Girl Casual Dress is perfect for your little fashionista who loves to look stylish while staying comfortable. ",
            ProductName: "Girl Casual Dress",
            price: "1000",
          },
          {
            image: lehenka,
            alt: "Lehenka",
            Description:"A Lehenga is the epitome of elegance and grace, making it the perfect choice for weddings, festivals, and other special occasions. ",
            ProductName: "Lehenka",
            price: "400",
          },
          {
            image: wshirt,
            alt: "Womens Shirt",
            Description:"A Women’s Shirt is a wardrobe essential that seamlessly combines style and comfort, making it perfect for both professional settings and casual outings.",
            ProductName: "Womens Shirt",
            price: "1000",
          },
          {
            image: watchImage,
            alt: "Smart Watch",
            Description:"The Smartwatch is a perfect blend of style, convenience, and technology. Designed to enhance your daily life, this wearable gadget offers more than just the time—it connects you to everything that matters, all from your wrist.",
            ProductName: "Smart Watch",
            price: "2500",
          },
          {
            image: lehenka2,
            alt: "Lehenka",
            Description:"A Lehenga is the epitome of elegance and grace, making it the perfect choice for weddings, festivals, and other special occasions. ",
            ProductName: "Lehenka",
            price: "2400",
          },
          {
            image: girl2,
            alt: "Girls Chudi",
            Description:"The Girls Chudi is a timeless piece of traditional wear that combines elegance and comfort, perfect for any festive or casual occasion.",
            ProductName: "Girls Chudi",
            price: "1000",
          },
          {
            image: boy2,
            alt: "Boys Casual Dress",
            Description:"The Boys Casual Dress is a versatile and comfortable outfit designed for everyday wear, offering both style and ease.",
            ProductName: "Boys Casual Dress",
            price: "2500",
          },
          {
            image: perfume,
            alt: "Perfume",
            Description:"Indulge in a luxurious sensory experience with our Perfume, a timeless fragrance designed to captivate the senses and leave a lasting impression.",
            ProductName: "Perfume",
            price: "2500",
          },
          
        ].map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.alt}
              className="w-full h-64 sm:h-80 md:h-86 object-cover rounded-lg mx-auto"
            />
            <h1 className="text-gray-300 font-bold mt-4 text-sm sm:text-xl">{product.ProductName}</h1>
            <h1 className="text-white font-bold text-lg sm:text-xl">&#8377;{product.price}</h1>
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

export default Collections;
