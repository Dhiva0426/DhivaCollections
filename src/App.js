import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Collections from './Pages/Collections';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Shirts from './Components/Categories/Shirts';
import Jeans from './Components/Categories/Jeans';
import Suits from './Components/Categories/Suits';
import Jackets from './Components/Categories/Jackets';
import Tshirts from './Components/Categories/Tshirts';
import Accessories from './Components/Categories/Accessories';
import Footwears from './Components/Categories/Footwears';
import Mens from './Components/mens/Mens';
import Womens from './Components/womens/Womens';
import Kids from './Components/kids/Kids';
import Saree from './Components/womens/Saree';
import Lehenka from './Components/womens/Lehenka';
import Chudi from './Components/womens/Chudi';
import Beauty from './Components/womens/Beauty';
import WomenAccessories from './Components/womens/WomenAccessories';
import Modern from './Components/womens/Modern';
import WomenFootwear from './Components/womens/WomenFootwear';
import BuyNow from './Pages/BuyNow';
import ConfirmPurchase from './Pages/ConfirmPurchase';


function App() {
  return (
    <div className="App">

 
    <BrowserRouter>
    {/* <Header/> */}
    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/Shop' element={<Shop/>}/>
        <Route path='/Collections' element={<Collections/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Jeans' element={<Jeans/>}/>
        <Route path='/Shirts' element={<Shirts/>}/>
        <Route path='/Suits' element={<Suits/>}/>
        <Route path='/Jackets' element={<Jackets/>}/>
        <Route path='/Tshirts' element={<Tshirts/>}/>
        <Route path='/Accessories' element={<Accessories/>}/>
        <Route path='/Footwears' element={<Footwears/>}/>
        <Route path='/Mens' element={<Mens/>}/>
        <Route path='/Womens' element={<Womens/>}/>
        <Route path='/Kids' element={<Kids/>}/>
        <Route path='/Saree' element={<Saree/>}/>
        <Route path='/Chudi' element={<Chudi/>}/>
        <Route path='/Lehenka' element={<Lehenka/>}/>
        <Route path='/Beauty' element={<Beauty/>}/>
        <Route path='/WomenAccessories' element={<WomenAccessories/>}/>
        <Route path='/Modern' element={<Modern/>}/>
        <Route path='/WomenFootwear' element={<WomenFootwear/>}/>
        <Route path='/BuyNow' element={<BuyNow/>}/>
        <Route path='/ConfirmPurchase' element={<ConfirmPurchase/>}/>
      </Routes>
     <Footer/>
    </BrowserRouter>    

   
    </div>
  );
}

export default App;
