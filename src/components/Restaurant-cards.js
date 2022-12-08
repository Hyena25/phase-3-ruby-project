import React from "react"

const RestaurantCards = (( {restaurantData} ) => {
    return (
        <div>
        <div className="media">
          <h1> {restaurantData.name} </h1>
          <p> {restaurantData.michelin_stars}</p>
          <p> {restaurantData.location}</p>
          <p> {restaurantData.cuisine}</p>
          <p> {restaurantData.health_hazards}</p>
        </div>
      </div>
    )
})

export default RestaurantCards;