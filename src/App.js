
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import Cart from './components/Cart/Cart';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
      </BrowserRouter>
      </div>
    
      
   
  );
}

export default App;
