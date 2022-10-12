import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Col,  Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {updateCart} from "../../redux/reducer"
import CartDataService from "../../service/service"
import {toast,ToastContainer} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
 


export default function Recipes() {

    const [popularRecipes,setPopularRecipes]=useState([])
    
    const dispatch=useDispatch()
    const {items}=useSelector(state=>state.cart)

    useEffect(()=>{
        getPopularRecipes()
        
    },[])
    
   const getPopularRecipes=async()=>{
        
        if(localStorage.getItem("popularRecipes")==undefined){
            const res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`)
            const data=await res.json()
         
            localStorage.setItem("popularRecipes",JSON.stringify(data.recipes))
            setPopularRecipes(data.recipes)
        }
        else{
            setPopularRecipes(JSON.parse(localStorage.getItem("popularRecipes")))
        }
    }

  
    const addToCart=(id)=>{

       fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      
      .then(res=>res.json())
      .then(async data=>{

        const details={title:data.title,image:data.image,price:data.pricePerServing.toFixed(),itemId:data.id,quantity:1}
       
        if(items.some(item=>item.itemId===id)){
            toast.info("product already added to cart",{position:"bottom-left"})       
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
            toast.success("product added successfully",{position:"top-center"})
            
        }
        catch(err){
            console.log(err.message)
        }
    }
    
  return (
    <>  
        <Row className="recipes-container" id="shop">
            <h2 className='popular-recipes-title inter-font-bold'>Popular Items</h2>
            <p className='popular-items-desc inter-font-regular'>Most Ordered Items</p>
            
            {popularRecipes.map(recipe=>(
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
           
          
        </Row>

       

       
    </>
  )


}
