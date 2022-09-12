import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Searchbar from './Searchbar'
import {Circles} from "react-loader-spinner"
import { Col, Container, Row } from 'react-bootstrap'

export default function RecipeInfo() {
    const {id}=useParams()
    const [info,setInfo]=useState([])
    const [activeTab,setActiveTab]=useState("ingredients")
    const [ingredients,setIngredients]=useState([])
    const [priceDetails,setPriceDetails]=useState([])
    const [tasteDetails,setTasteDetails]=useState(null)
    const [isLoading,setIsLoading]=useState(true)

   

    useEffect(()=>{
        recipeInfo()
        getPriceDetails()
        getTasteDetails()
    },[])

    const recipeInfo=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
      
        setInfo(data)
        setIngredients(data.extendedIngredients)
        setIsLoading(false)

    }

    const getTasteDetails=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/tasteWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
       
        setTasteDetails(data)
    }

    const getPriceDetails=async()=>{
        const res=await fetch(`https://api.spoonacular.com/recipes/${id}/priceBreakdownWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`)
        const data=await res.json()
       
        setPriceDetails(data)
    }

    const changeActiveTab=tab=>{
        setActiveTab(tab)
    }

    const ingredientClassName=  activeTab==="ingredients"?"active":""
    const processClassName=activeTab==="process"?"active":""
    const priceClassName=activeTab==="price"?"active":""
    const tasteClassName=activeTab==="taste"?"active":""

    

  return (
    <>
    
     <Container className="recipe-info-container">
       
        <Row className="recipe-wrapper">
            <div className='col-md-6 col-sm-12'>
                <p>{info.title}</p>
                <img className='recipe-info-img' src={info.image} alt="recipe"/>
            </div>
            <Col  xs={6}  className="btn-container d-flex flex-column align-items-center">
                <button className={`info-btn ${ingredientClassName}`} onClick={()=>changeActiveTab("ingredients")}>Ingredients</button>
                <button className={`info-btn ${processClassName}`} onClick={()=>changeActiveTab("process")}>Recipe Process</button>
                <button className={`info-btn ${tasteClassName}`} onClick={()=>changeActiveTab("taste")}>Taste</button>
                <button className={`info-btn ${priceClassName}`} onClick={()=>changeActiveTab("price")}>Price Details</button>
               
               {isLoading && <div className='loader'><Circles/></div>}

               
               
                {activeTab==="ingredients" && !isLoading && <ul className='ingredients-container'>
                    {ingredients.map(ingredient=>(
                        <li key={ingredient.id} className="ingredient">
                            
                            <img className="ingredient-img" src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt="ingredient"/>
                            <p>  {ingredient.original}</p>
                          
                        </li>
                    ))}
                    </ul>}

                {activeTab==="process"&& !isLoading &&<p dangerouslySetInnerHTML={{__html:info.instructions}}></p>}

                {activeTab==="taste"  && !isLoading && tasteDetails && <ul className="taste-details-container">
                    <li>sweetness:{tasteDetails.sweetness}</li>
                    <li>saltiness:{tasteDetails.saltiness}</li>
                    <li>sourness:{tasteDetails.sourness}</li>
                    <li>bitterness:{tasteDetails.bitterness}</li>
                    <li>savoriness:{tasteDetails.savoriness}</li>
                    <li>fattiness:{tasteDetails.fattiness}</li>
                    <li>spiciness:{tasteDetails.spiciness}</li>
                    </ul>}
                
                {activeTab==="price" && !isLoading && (
                    <div>
                <ul className="price-details-container">
                    {priceDetails.ingredients.map(each=>(
                        <li>
                            <p> {each.amount.us.value} {each.amount.us.unit} {each.name} - Rs. {each.price}/-</p>
                        </li>
                    ))}
                    </ul>
                    <h3>Total Price: <span>Rs. {priceDetails.totalCost}/-</span></h3>
                    </div>)
                    }
            
            </Col>
          

        </Row>
    </Container>
    </>
    
  )
}
