
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop, shop } from './pages/shop';

import Product from './pages/Product';
import Cart from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
import { Scategory } from './pages/Scategory';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Scategory banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<Scategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<Scategory banner={kid_banner} category="kid"/>}/>
      

      {/* <Route path='/mens' element={<ShopCategory category="mens"/>}/>
      <Route path='/womens' element={<ShopCategory category="womens"/>}/>
      <Route path='/kids' element={<ShopCategory category="kids"/>}/> */}
      <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
     </Routes>
      <Footer/>

     </BrowserRouter>
    </div>
  );
}

export default App;
