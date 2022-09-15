
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

import Profile from './components/Profile/Profile';
import UserLogin from './components/Profile/UserLogin';
import ClearMeal from './components/MealPlanner/ClearMeal';
import GetMealWeek from './components/MealPlanner/GetMealWeek';
import CuisineRecipes from './components/CuisineRecipes/CuisineRecipes';
import UserConnect from './components/Profile/UserConnect';
import jwt_decode from "jwt-decode"
import Cart from './components/Cart/Cart';


function MealProtectedRoute({children}){
  const token=localStorage.getItem("token")
  console.log(token)
  const profile=localStorage.getItem("profile")
  console.log(profile)
 
  if(token){
    // const user=jwt_decode(token)
    // console.log(user)
   return <Navigate to={`/mealplanner/${profile}`}/>
  }
  else{
   return children
  }
  // return token ? <Navigate to={`/mealplanner/${profile}`}/>:children
}

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar/> */}
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          
          <Route path="/recipes" element={<Recipes/>}/>
          <Route path="/recipe/:id" element={<RecipeInfo/>}/>
        
          <Route path="/recipes/:search" element={<SearchRecipes/>}/>
          <Route path="/cuisines/:cuisine" element={<CuisineRecipes/>}/>
          <Route path="/mealplanner" element={<MealPlanner/>}/>
          <Route path="/userconnect" element={<MealProtectedRoute>
            <UserConnect/>
          </MealProtectedRoute>}/>
          
           

          <Route path="/mealplanner/login" element={<UserLogin/>}/>
          <Route path="/mealplanner/:profile" element={
            <Profile/>      
              }>
            <Route path="addmeal" element={<AddMeal/>}/>
            <Route path="getmeal" element={<GetMeal/>}/>
            <Route path="clearmeal" element={<ClearMeal/>}/>
            <Route path="getmealweek" element={<GetMealWeek/>}/>
          </Route>
          <Route path="/recipeByIngredients" element={<RecipesByIngredientsHome/>}/>
          <Route path="/recipeByIngredients/:ingredients" element={<RecipesByIngredients/>}/>
          <Route path="/wines" element={<Wines/>}/>
          <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
