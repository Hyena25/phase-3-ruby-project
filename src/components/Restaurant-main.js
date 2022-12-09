import React from "react";
import RestaurantCards from "./Restaurant-cards"

const Restaurants = ({ restaurantData }) => {
  
  return (
    <div className="restaurant-container">
      {restaurantData.map((restaurantData) => (
        <RestaurantCards restaurantData={restaurantData} />
      ))}
    </div>
  )
};

export default Restaurants;
