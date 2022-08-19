
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
import Getmealplan from './components/Mealplan';
import Mealplan from './components/Mealplan';
import AddMeal from './components/AddMeal';
import GetMeal from './components/GetMeal';
import Profiles from './components/Profiles';
import Profile from './components/Profile';

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
          {/* <Route path="/mealplanner" element={<MealPlanner/>}/> */}
          <Route path="/mealplanner" element={<Mealplan/>}/>
           
          <Route path="/mealplanner/profiles" element={<Profiles/>}/>
          <Route path="/mealplanner/profiles/:profile" element={<Profile/>}>
          <Route path="addmeal" element={<AddMeal/>}/>
            <Route path="getmeal" element={<GetMeal/>}/>
          </Route>
          <Route path="/recipeByIngredients" element={<RecipesByIngredientsHome/>}/>
          <Route path="/recipeByIngredients/:ingredients" element={<RecipesByIngredients/>}/>
          <Route path="/wines" element={<Wines/>}/>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
