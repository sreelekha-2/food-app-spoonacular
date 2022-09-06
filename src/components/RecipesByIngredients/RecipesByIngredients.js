import React, {useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Circles} from "react-loader-spinner"

import SearchbarIngredients from '../Searchbar/SearchbarIngredients'
import { Col, Container, Row } from 'react-bootstrap'

export default function RecipesByIngredients(props) {
    const {ingredients}=useParams()
    const [recipes,setRecipes]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const ingredientsText=ingredients.split("+").join(",")
   
  
   
    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&ingredients=${ingredientsText}`)
        .then(res=>res.json())
        .then(data=>{
            
            setRecipes(data)
            setIsLoading(false)
        })
        .catch(e=>console.log(e))
    },[ingredientsText])

    
   
   
  return (
    <div>
        {isLoading?
        <div className="loader">
        <Circles /></div>:<div>
        
        <SearchbarIngredients/>
        <Container>
             <Row className="recipes-container">
              {recipes.map(recipe=>(
                <Col sm={12} md={6} lg={4} key={recipe.id}>
                    <Link className="recipe-link"  to={`/recipe/${recipe.id}`} >
                    <li className="recipe" >
                        <h4 className="recipe-title">{recipe.title}</h4>
                        <img className="recipe-img" src={recipe.image} alt="recipe"/>
                    </li>
                    </Link> 
                </Col>
                      
              ))}
          </Row>
          </Container>
          </div>}
        
          
    </div>
  )
}

