
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from './components/Home';
import RecipeInfo from './components/Recipes/RecipeInfo';
import Navbar from './components/Navbar/Navbar';
import Recipes from './components/Recipes/Recipes';
import SearchRecipes from './components/Searchbar/SearchRecipes';

import MealPlanner from './components/MealPlanner/MealPlanner';
import RecipesByIngredientsHome from './components/RecipesByIngredients/RecipesByIngredientsHome';
import RecipesByIngredients from './components/RecipesByIngredients/RecipesByIngredients';
import Wines from './components/Recipes/Wines';

import AddMeal from './components/MealPlanner/AddMeal';
import GetMeal from './components/MealPlanner/GetMeal';
import Profiles from './components/Profile/Profiles';
import Profile from './components/Profile/Profile';
import UserLogin from './components/Profile/UserLogin';
import ClearMeal from './components/MealPlanner/ClearMeal';
import GetMealWeek from './components/MealPlanner/GetMealWeek';
import CuisineRecipes from './components/CuisineRecipes/CuisineRecipes';
import UserConnect from './components/Profile/UserConnect';



function ProtectedRoute({children}){
  const token=localStorage.getItem("token")
  console.log(token)
  return token? children:<Navigate to="/mealplanner/login"/>
}

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/recipe/:id" element={<RecipeInfo/>}/>
        
          <Route path="/recipes/:search" element={<SearchRecipes/>}/>
          <Route path="/cuisines/:cuisine" element={<CuisineRecipes/>}/>
          <Route path="/mealplanner" element={<MealPlanner/>}/>
          <Route path="/userconnect" element={<UserConnect/>}/>
          
           
          {/* <Route path="/mealplanner/profiles" element={<Profiles/>}/> */}
          <Route path="/mealplanner/login" element={<UserLogin/>}/>
          <Route path="/mealplanner/:profile" element={<ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
                  
              }>
            <Route path="addmeal" element={<AddMeal/>}/>
            <Route path="getmeal" element={<GetMeal/>}/>
            <Route path="clearmeal" element={<ClearMeal/>}/>
            <Route path="getmealweek" element={<GetMealWeek/>}/>
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
