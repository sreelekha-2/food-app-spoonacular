
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import Cart from './components/Cart/Cart';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './components/Menu/Menu';
import Contact from './components/Home/Contact';
import ContactUs from './components/ContactUs/ContactUs';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
      </BrowserRouter>
      </div>
    
      
   
  );
}

export default App;
