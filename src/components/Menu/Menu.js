import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Recipes from '../Recipes/Recipes'


export default function Menu() {
    const [vegRecipes,setVegRecipes]=useState([])

    useEffect(()=>{
        getVegRecipes()
    },[])

    const getVegRecipes=async()=>{
        
        if(localStorage.getItem("vegRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`)
            const data=await res.json()
         
            localStorage.setItem("vegRecipes",JSON.stringify(data.recipes))
            setVegRecipes(data.recipes)
        }
        else{
            setVegRecipes(JSON.parse(localStorage.getItem("vegRecipes")))
        }
    }

  return (
    <div className='menu-container'>
        <Container>
            <Recipes/>

        {/* <Row className="recipes-container">
            <h2 className='popular-recipes-title inter-font-bold'>Popular Items</h2>
            <p className='popular-items-desc inter-font-regular'>Most Ordered Items</p>
            
            {vegRecipes.map(recipe=>(
                <Col className="recipe"  xs={12} sm={6} md={4} lg={3} key={recipe.id}>
                    
                    
                        <Link className="recipe-link"  to="" >
                           <div className='recipe-img-container'>
                                <img className="recipe-img" src={recipe.image} alt="recipe"/>
                            </div>
                            
                            <div className="recipe-description">
                                <div className='recipe-title-wrap'>
                                    <h4 className="recipe-title inter-font-bold">{recipe.title}</h4>
                                   
                                </div>
                                <div>
                                    <p className="recipe-price montserrat-font-semibold">Rs {recipe.pricePerServing.toFixed()} /-</p>
                                    <button className='btn btn-outline-success add-btn' onClick={()=>addToCart(recipe.id)}>+ ADD</button>

                                </div>

                               
                            </div>
                            <ToastContainer/>
                        </Link>
                    
             
                </Col>
               
                
            ))}
           
          
        </Row> */}
    </Container>
    </div>
 
  )
}
