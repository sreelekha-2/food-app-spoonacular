import React,{useState,useEffect} from 'react'

export default function Meal(props) {

    const [imageUrl,setImageUrl]=useState("")
    const {mealDetails}=props
    const {id,title,sourceUrl,readyInMinutes,servings}=mealDetails

    useEffect(()=>{
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=daff5ff5d65d429fb51b31004ba520da`)
        .then(res=>res.json())
        .then(data=>setImageUrl(data.image))
    },[])
    
  return (
    <>

        <p>Title : {title}</p>
        <img src={imageUrl} alt="recipe" className="meal-img"/>
        <p>Ready Time : {readyInMinutes} mins</p>
        <p>Servings : {servings}</p>
        <a href={sourceUrl} target="_blank" className="meal-url">Get Recipe</a>
    </>

  )
}
