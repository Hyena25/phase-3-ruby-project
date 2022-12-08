// import RestaurantCards from './Restaurant-cards'

const Restaurants = ({ restaurantData }) => {
  // console.log(restaurantData)
  const restaurantNameDivs = restaurantData.map((restaurantObj) => {
    return <div> {restaurantObj.name} </div>;
  });

  return <>{restaurantNameDivs}</>;
};

export default Restaurants;
