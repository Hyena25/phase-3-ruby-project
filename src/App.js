import './App.css';
import React, {useState, useEffect} from 'react';
import Restaurants from './components/Restaurant-main.js'
import Critics from './components/Critics-main.js'
import Reviews from './components/Review-main.js'
import NavBar from "./components/Navigation-Bar"
import ReviewForm from "./components/Review-Form"
import {Switch, Route} from 'react-router-dom'

function App() {

  const [restaurantData, setRestaurantData ] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/restaurants")
      .then((r) => r.json())
      .then((restaurantData) => setRestaurantData(restaurantData));
  },[])

  const [ criticsData, setCriticsData ] = useState([])
  useEffect(() => {
    fetch("http://localhost:9292/critics")
    .then((r) => r.json())
    .then((criticsData) => setCriticsData(criticsData));
  },[])
  
  const addNewReview = (newReview) => {
		setCriticsData([...setCriticsData, newReview])
	}

  const removeReview = removedReview => {
    const newReview = criticsData.filter(reviewAndCriticsObj => {
        return removedReview.id !== reviewAndCriticsObj.id
      })
      setCriticsData(newReview)
    fetch(`http://localhost:9292/critics/${removedReview.id}`, {method: "DELETE"} )
    }

  return (
    <div className="">
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Restaurants restaurantData = {restaurantData}/>
        </Route>
        <Route exact path="/critics">
          <Critics />
        </Route>
        <Route exact path="/reviews">
          <Reviews removeReview={removeReview} criticsAndReviewsData = {criticsData}/>
        </Route>
        <Route exact path="/review-form">
          <ReviewForm addNewReview={addNewReview}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;