import RestaurantCards from './Restaurant-cards'

const Restaurants = (({restaurantData}) => {
    console.log(restaurantData)
    const restaurantNameDivs = restaurantData.map((restaurantObj) => {
      return <RestaurantCards restaurantName = {restaurantObj.name}  />
    })


    return (
        <>
        {restaurantNameDivs}
        </>
    )
})

export default Restaurants;