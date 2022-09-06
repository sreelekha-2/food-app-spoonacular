import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Category from './Category'
import Searchbar from '../Searchbar/Searchbar'
import { Col, Container, Row } from 'react-bootstrap'

export default function CuisineRecipes() {
    const {cuisine}=useParams()
    const [cuisines,setCuisines]=useState([])
    useEffect(()=>{
        getCuisineRecipes()
    },[cuisine])

    const getCuisineRecipes=async()=>{
        const url=`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${process.env.REACT_APP_API_KEY}`
       const res=await fetch(url)
       const data=await res.json()
       setCuisines(data.results)
    }
  return (
    <>
    <Searchbar/>
    <Container>
        <Category/>
        <Row className="recipes-container">
            {cuisines.map(recipe=>(
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
