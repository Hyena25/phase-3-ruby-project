import {useState, useEffect} from 'react';
import './App.css';
import Restaurants from './components/Restaurant-main.js'
import Critics from './components/Critics-main.js'
import Reviews from './components/Review-main.js'
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

  console.log(criticsData)
  
  return (
    <div>
      <Restaurants restaurantData = {restaurantData}/>
      <Critics/>
      <Reviews/>
    <button> Does it work </button>
    {/* <NavigationBar> */}
      <Switch>
        <Route exact path="/">
          <Restaurants/>
        </Route>
        <Route exact path="/critics">
          <Critics/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;