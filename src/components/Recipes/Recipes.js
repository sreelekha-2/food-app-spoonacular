import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../CuisineRecipes/Category'
import Searchbar from '../Searchbar/Searchbar'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {updateCart} from "../../redux/reducer"
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import CartDataService from "../../service/service"


export default function Recipes() {

    const [popularRecipes,setPopularRecipes]=useState([])
    
    const [vegRecipes,setVegRecipes]=useState([])

  

    const dispatch=useDispatch()
    const {items}=useSelector(state=>state.cart)

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

  
    const addToCart=(id)=>{
    //    dispatch(updateCount())

       console.log(id)
       fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      
      .then(res=>res.json())
      .then(async data=>{

        const details={title:data.title,image:data.image,itemId:data.id,quantity:1}

        // const cartArr=await totalCartData()
        // console.log(cartArr)

        if(items.some(item=>item.itemId===id)){
            alert("product already added to cart")       
        }
        else{
            await addCartDataToDatabase(details)
            dispatch(updateCart(details))
        }


      })
      .catch(err=>console.log(err))
    }
   
    const addCartDataToDatabase=async data=>{
        try{
            await CartDataService.addCartData(data)
            alert("product added successfully")
        }
        catch(err){
            console.log(err.message)
        }
    }
    
  return (
    <>

    <Navbar/>

    <Container>
        <Category/>
        <h2 className='popular-recipes-title'>Popular Recipes</h2>
        <Row className="recipes-container ">
            {popularRecipes.map(recipe=>(
                <Col className="recipe"  xs={12} md={6} lg={4} key={recipe.id}>
                    
                    <div>
                        <Link className="recipe-link"  to="" >
                           <div className='recipe-img-container'>
                                <img className="recipe-img" src={recipe.image} alt="recipe"/>
                            </div>
                            
                            <div className="recipe-description">
                                <div className='recipe-title-wrap'>
                                    <h4 className="recipe-title">{recipe.title}</h4>
                                </div>
                                
                                <button className='btn btn-warning' onClick={()=>addToCart(recipe.id)}>Add To Cart</button>
                            </div>
                        </Link>
                    </div>
             
                </Col>
               
                
            ))}
        </Row>

        <h2 className='popular-recipes-title'>Vegetarian Recipes</h2>
            <Row className="recipes-container">
                {vegRecipes.map(recipe=>(
                    <Col className="recipe"  xs={12} md={6} lg={4} key={recipe.id}>
                    
                    <div>
                        <Link className="recipe-link"  to={`/recipe/${recipe.id}`} >
                           <div className='recipe-img-container'>
                                <img className="recipe-img" src={recipe.image} alt="recipe"/>
                            </div>
                            
                            <div className="recipe-description">
                                <div className='recipe-title-wrap'>
                                    <h4 className="recipe-title">{recipe.title}</h4>
                                </div>
                                
                                <button className='btn btn-warning' onClick={()=>addToCart(recipe.id)}>Add To Cart</button>
                            </div>
                        </Link>
                    </div>
             
                </Col>
                    
                    
                ))}
            </Row>

        </Container>
    </>
  )
}
