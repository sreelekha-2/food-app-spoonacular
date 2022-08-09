
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import RecipeInfo from './components/RecipeInfo';
import Vegetarian from './components/Vegetarian';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SearchRecipes from './components/SearchRecipes';

import MealPlanner from './components/MealPlanner';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/popular" element={<Recipes/>}/>
          <Route path="/recipe/:id" element={<RecipeInfo/>}/>
          <Route path="/vegetarian" element={<Vegetarian/>}/>
          <Route path="/recipes/:search" element={<SearchRecipes/>}/>
          {/* <Route path="/mealplanhome" element={<MealPlanHome/>}/> */}
          <Route path="/mealplanner" element={<MealPlanner/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
