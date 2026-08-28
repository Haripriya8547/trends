
import Header from "./assets/components/Header"
import HomeCarousel from "./assets/components/HomeCarousel"
import Cards1 from "./assets/components/Cards1"

import Footer from "./assets/components/Footer"
import About from "./assets/pages/About"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./assets/pages/ProductDetails"
import Login from "./assets/components/Login"
function App() {
  const products = [
    {
      id: 1,
      productName: "Rabbit",
      productPrice: 1200,
      productDiscripption: "A cute and soft musical rabbit toy designed for children. Its adorable appearance and playful design make it a perfect companion for kids. Great for playtime, gifting, and developing a child’s imagination.",
      productImage: "https://rukminim1.flixcart.com/image/1536/1536/xif0q/musical-toy/c/e/r/cute-white-musical-rabbit-toy-plush-bunny-with-music-for-kids-original-imahnpssxbrbxpfy.jpeg?q=90"
    },
    {
      id: 2,
      productName: "pool",
      productPrice: 1300,
      productDiscripption: "A spacious inflatable swimming pool perfect for family fun and outdoor activities. It is suitable for children and adults, making it a great choice for summer days, backyard play, and relaxing with family.",
      productImage: "https://rukminim1.flixcart.com/image/1536/1536/ktd9mkw0/bath-tub/e/z/v/best-kids-children-swimming-pool-inflatable-bath-tubs-for-adults-original-imag6q4nfaag3qdp.jpeg?q=90"
    },
    {
      id: 3,
      productName: "slide",
      productPrice: 1500,
      productDiscripption: "A fun and safe indoor/outdoor slide and swing set designed for young children. It helps encourage active play, balance, coordination, and physical development while providing hours of entertainment. Suitable for ages 2–4 years.",
      productImage: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/outdoor-toy/v/h/d/3-slide-for-kids-2-4-years-old-indoor-outdoor-weight-capacity-of-original-imahpfzbfjcgxnxp.jpeg?q=90"
    }

  ]
 

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeCarousel />} />       
          <Route path="/products" element={<Cards1 products={products} />} />        
          <Route path="/About" element={<About/> } />
          <Route  path="/product/:id" element={<ProductDetails products={products}/>}/>
           <Route  path="/login"  element={<Login />}                  
        />
        </Routes>
       
      </BrowserRouter>   
      
      <Footer />
    </>
  )
}

export default App
