
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import RecipeInfo from './components/RecipeInfo';
import Vegetarian from './components/Vegetarian';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/recipe/:id" element={<RecipeInfo/>}/>
          <Route path="/vegetarian" element={<Vegetarian/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
