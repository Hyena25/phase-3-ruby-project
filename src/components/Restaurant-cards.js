import React from "react"
import { Link } from "react-router-dom"
import { useState } from "react";
import { useHistory } from "react-router-dom";



const RestaurantCards = (( {restaurantData} ) => {
  let history = useHistory()

  
  const goToShowPage = () => { 
      history.push (`/restaurants/${restaurantData.id}`)
  }
  
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  
    return (
        <div >
        <div onClick = {goToShowPage} className="media">
          <p> Michelin Star Rating: {restaurantData.michelin_stars}</p>
          <p> {restaurantData.location}</p>
          <p> Style: {restaurantData.cuisine}</p>
          <p> {restaurantData.health_hazards}</p>
        </div>
      </div>
    )
})

export default RestaurantCards;