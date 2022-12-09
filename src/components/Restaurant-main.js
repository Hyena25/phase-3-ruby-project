import React from "react";
import RestaurantCards from "./Restaurant-cards"

const Restaurants = ({ restaurantData }) => {
  
  return (
    <div className="movie-container">
      {restaurantData.map((restaurantData) => (
        <RestaurantCards restaurantData={restaurantData} />
      ))}
    </div>
  )
};

export default Restaurants;
