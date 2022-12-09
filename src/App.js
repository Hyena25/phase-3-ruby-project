import "./App.css";
import React, { useState, useEffect } from "react";
import Restaurants from "./components/Restaurant-main.js";
import Reviews from "./components/Review-main.js";
import NavBar from "./components/Navigation-Bar";
import ReviewForm from "./components/Review-Form";
import ShowRestaurant from "./components/ShowRestaurant";
import { Switch, Route } from "react-router-dom";

function App() {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((data) => setRestaurantData(data));
  }, []);
  console.log(restaurantData.length > 0 ? restaurantData[0].reviews : "Use-effect has not fired yet")

  const [criticsData, setCriticsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/critics")
      .then((r) => r.json())
      .then((criticsData) => setCriticsData(criticsData));
    // DON'T TOUCH BUT DON'T USE
    }, []);

  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/reviews")
      .then((r) => r.json())
      .then((reviewsData) => setReviewsData(reviewsData));
  }, []);

  const addNewReview = (newReview) => {
    setCriticsData([...setCriticsData, newReview]);
  };

  const removeReview = (removedReview) => {
    const newReview = criticsData.filter((reviewAndCriticsObj) => {
      return removedReview.id !== reviewAndCriticsObj.id;
    });

    fetch(`http://localhost:9292/critics/${removedReview.id}`, {
      method: "DELETE",
    });
  };

  // start with a show route/page, of a single restaurant then after change
  // it changes route.

  //  


  return (
    <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Restaurants restaurantData={restaurantData} />
        </Route>
        <Route exact path="/restaurants/:id">
          <ShowRestaurant />
        </Route>
        <Route exact path="/reviews">
          <Reviews
            reviewsData={reviewsData}
            removeReview={removeReview}
            criticsData={criticsData}
            //different solution than just one route
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
