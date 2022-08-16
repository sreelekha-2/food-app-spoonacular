import React from "react";
import SearchbarIngredients from "./SearchbarIngredients";

export default function RecipesByIngredientsHome() {
  

    
  return (
    <div>
        <SearchbarIngredients/>
        <div className='container'>
            <div className='ingredients-recipes-intro'>
                <img alt="ingredient-intro" className='ingredient-intro-image' src="https://previews.123rf.com/images/monticello/monticello1108/monticello110800025/10081575-groceries-in-wicker-basket-on-kitchen-table.jpg"/>
                <div>
                    <h2>Find Recipes what you have in your kitchen</h2>
                    <p>Find recipes that use as many of the ingredients you have available as possible while limiting missing ingredients. </p>
                
                </div>
              </div>

           
     

        
        </div>

    </div>
  )
}
