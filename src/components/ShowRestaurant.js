import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RestaurantForm from "./Restaurant-form";


// we can write our form here,

const ShowRestaurant = () => {
  let { id } = useParams(); //id is the restaurant id

  const [restaurant, setRestaurant] = useState({reviews: []})
  useEffect(() => {
    fetch(`http://localhost:9292/restaurants/${id}`)
    .then((r) => r.json())
    .then((restaurant) => setRestaurant(restaurant) );},[]) 

  // console.log(id);
  // console.log(id);
    //console.log(restaurant.reviews.description);

  // const [review, setReview] = useState("");
  // const [date, setDate] = useState("");

  // const handleSubmit = (e) => {
    
  //   e.preventDefault();
  //   let postReview = {
  //     description: review,
  //     date_published: date
  //   };
  // }

    // console.log(restaurant.reviews[0].description)
    // fetch("http://localhost:9292/reviews", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(postReview),
    //   })
    //     .then((r) => r.json())
    //     .then(() => addNewReview(postReview));
  
    // map over reviews to put them on the page, create a form to edit/edit, another form to create a review, 
    // const mappedReviews = [restaurant]
    // const listedReviews = restaurant.map((restaurant.review) => )}



    return (
      <div >
        <h1>{restaurant.name}</h1>
        
        <h2>{restaurant.location}</h2>
        <h2> Michelin Star : {restaurant.michelin_stars} </h2>
        {restaurant.reviews.map((reviewObj) => (
        <h1>{reviewObj.description}</h1> 
      ))} 
      <RestaurantForm setRestaurant={setRestaurant}/>
        {/* <div className="formContainer">
          <div className="form">
            <h3>Add Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                label="review"
                placeholder="Review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <input
                label="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </form>
          </div>  
        </div> */}
      </div>
    );
  };

export default ShowRestaurant;
