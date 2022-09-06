import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../CuisineRecipes/Category'
import Searchbar from '../Searchbar/Searchbar'
import { Col, Container, Row } from 'react-bootstrap'


export default function Recipes() {

    const [popularRecipes,setPopularRecipes]=useState([])
    
    const [vegRecipes,setVegRecipes]=useState([])

    useEffect(()=>{
        getPopularRecipes()
        getVegRecipes()
    },[])
    
   const getPopularRecipes=async()=>{
        
        if(localStorage.getItem("popularRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
            const data=await res.json()
         
            localStorage.setItem("popularRecipes",JSON.stringify(data.recipes))
            setPopularRecipes(data.recipes)
        }
        else{
            setPopularRecipes(JSON.parse(localStorage.getItem("popularRecipes")))
        }
    }

    const getVegRecipes=async()=>{
        
        if(localStorage.getItem("vegRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian,diet&number=10`)
            const data=await res.json()
            
            localStorage.setItem("vegRecipes",JSON.stringify(data.recipes))
            setVegRecipes(data.recipes)
        }
        else{
            setVegRecipes(JSON.parse(localStorage.getItem("vegRecipes")))
        }
    }
  return (
    <>

    <Searchbar/>

    <Container>
        <Category/>
        <h2 className='popular-recipes-title'>Popular Recipes</h2>
        <Row className="recipes-container ">
            {popularRecipes.map(recipe=>(
                <Col xs={12} md={6} lg={4} key={recipe.id}>
                    <Link className="recipe-link"  to={`/recipe/${recipe.id}`} >
                    <li className="recipe" >
                        <h4 className="recipe-title">{recipe.title}</h4>
                        <img className="recipe-img" src={recipe.image} alt="recipe"/>
                    </li>
                </Link>
                </Col>
               
                
            ))}
        </Row>

        <h2 className='popular-recipes-title'>Vegetarian Recipes</h2>
            <Row className="recipes-container">
                {vegRecipes.map(recipe=>(
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
    </>
  )
}
