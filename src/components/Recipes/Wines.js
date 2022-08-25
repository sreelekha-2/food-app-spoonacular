import React, { useEffect, useState } from 'react'

import {BsArrowRight} from "react-icons/bs"
import {Circles} from "react-loader-spinner"


export default function Wines() {

    const [wineName,setWineName]=useState("")
    const [winesData,setWinesData]=useState([])
    const [loading,setLoading]=useState(false)
    const getSelectedVal=(e)=>{
        console.log(e.target.value)
        setWineName(e.target.value)
    }

    const getWines=(e)=>{
        e.preventDefault()
        console.log("frm")
        console.log(e)
        setLoading(true)
        fetch(`https://api.spoonacular.com/food/wine/recommendation?wine=${wineName}&number=3&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setWinesData(data.recommendedWines)
            setLoading(false)
        })
        .catch(e=>console.log(e))
    }

   

  return (
    <div className='container'>
        <div className='wine-banner-container'>
        
            <img src="https://www.news-medical.net/image.axd?picture=2020%2F5%2Fshutterstock_532006042.jpg" className='wine-banner-img' alt="wine banner"/>
            <h2 className="wine-banner-text">This is where great minds drink alike</h2>
        </div>
        <div className="wines-container">
        <form onSubmit={getWines}>
            <select onChange={getSelectedVal} className="wine-dropdown">
              <optgroup label="dry white wine">
                  <option value="assyrtiko">
                  Asssyrtiko
                  </option>
                  <option value="cortese">
                  Cortese
                  </option>
                  <option value="roussanne">Roussanne</option>
                  <option value="moschofilero">Moschofilero</option>
                  <option value="muscadet">Muscadet</option>
                  <option value="viognier">Viognier</option>
                  <option value="verdicchio">Verdicchio</option>
                  <option value="greco">Greco</option>
                  <option value="marsanne">Marsanne</option>
                  <option value="soave">Soave</option>
              </optgroup>

              <optgroup label="dry red wine">
                  <option value="bonarda">
                  Bonarda
                  </option>
                  <option value="dolcetto">
                  Dolcetto
                  </option>
                  <option value="corvina">Corvina</option>
                  <option value="malbec">Malbec</option>
                  <option value="tempranillo">Tempranillo</option>
                  <option value="shiraz">Shiraz</option>
                  <option value="mourvedre">Mourvedre</option>
                  <option value="merlot">Merlot</option>
                  <option value="sangiovese">Sangiovese</option>
                  <option value="grenache">Grenache</option>
              </optgroup>
            
            </select>
            <input type="submit" className='get-wines-btn' value="Get Wines"/>
        </form>
        
        {loading?<div className='loader'><Circles/></div>:(
             <ul className="wines-list">
             {winesData.map(wine=>(
                 <li className='wine' key={wine.id}>
                     <p>{wine.title}</p>
                     <img src={wine.imageUrl} alt="wine" className='wine-image'/>
                     <div className='view-more-container'>
                         <a className='view-more-btn' target="_blank" href={wine.link}>View More</a>
                         <BsArrowRight/>
                     </div>
                     
                     
                 </li>
             ))}
         </ul>
        )}
        
       
        </div>
     
       
    </div>
  )
}
