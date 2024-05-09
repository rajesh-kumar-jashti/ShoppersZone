import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import men_banner from './Components/Assets/product_23.png';
import women_banner from './Components/Assets/product_9.png';
import kids_banner from './Components/Assets/product_28.png';
import Topwear from './Components/TopWear/Topwear';
import AllProducts from './Components/AllProducts/AllProducts';
import WishList from './Components/WishList/WishList';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import PageTwo from './Components/Stepper/PageTwo/PageTwo';
import ForgotPassword from './Components/Forgot_Passwd/ForgotPassword';
import Orders from './Components/Orders/Orders';
// import Admin from '../../admin/src/Pages/Admin/Admin';

function App() {

  return (
    <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/men/allproducts' element={<AllProducts category="men" />} />
          <Route path='/men/topwear' element={<Topwear category="men" type="topwear"/>} />
          <Route path='/men/bottomwear' element={<Topwear category="men" type="bottomwear"/>} />
          <Route path='/men/footwear' element={<Topwear category="men" type="footwear"/>} />
          <Route path='/men/accessories' element={<Topwear category="men" type="accessories"/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/women/sarees' element={<Topwear category="women" type="sarees"/>} />
          <Route path='/women/shoes' element={<Topwear category="women" type="shoes"/>} />
          <Route path='/women/kurtas&sets' element={<Topwear category="women" type="kurtas&sets"/>} />
          <Route path='/women/tops&tees' element={<Topwear category="women" type="tops&tees"/>} />
          <Route path='/women/allproducts' element={<AllProducts category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
          <Route path='/kids/allproducts' element={<AllProducts category="kids" />} />
          <Route path='/kids/topwear' element={<Topwear category="kids" type="topwear"/>} />
          <Route path='/kids/bottomwear' element={<Topwear category="kids" type="bottomwear"/>} />
          <Route path='/kids/footwear' element={<Topwear category="kids" type="footwear"/>} />
          <Route path='/kids/accessories' element={<Topwear category="kids" type="accessories"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<WishList/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          {/* <Route path='/seller-login' element={<Admin/>} /> */}
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/forgot-pwd/:email' element={<ForgotPassword/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/profile' element={<Orders/>} />
        </Routes>
    </div>
  );
}

export default App;
