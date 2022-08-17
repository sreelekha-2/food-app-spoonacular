
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import RecipeInfo from './components/RecipeInfo';
import Vegetarian from './components/Vegetarian';
import Navbar from './components/Navbar';
import Recipes from './components/Recipes';
import SearchRecipes from './components/SearchRecipes';

import MealPlanner from './components/MealPlanner';
import RecipesByIngredientsHome from './components/RecipesByIngredientsHome';
import RecipesByIngredients from './components/RecipesByIngredients';
import Wines from './components/Wines';
import Getmealplan from './components/Getmealplan';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/popular" element={<Recipes/>}/>
          <Route path="/recipe/:id" element={<RecipeInfo/>}/>
          <Route path="/vegetarian" element={<Vegetarian/>}/>
          <Route path="/recipes/:search" element={<SearchRecipes/>}/>
          <Route path="/mealplanner" element={<MealPlanner/>}/>
          <Route path="/getmealplanner" element={<Getmealplan/>}/>
          <Route path="/recipeByIngredients" element={<RecipesByIngredientsHome/>}/>
          <Route path="/recipeByIngredients/:ingredients" element={<RecipesByIngredients/>}/>
          <Route path="/wines" element={<Wines/>}/>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
