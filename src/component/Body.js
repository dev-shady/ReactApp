import RestaurantCard from "./RestaurantCard";
import { restaurantMockData } from "../utils/mockData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constant";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();
      //handle index out of bound for cards[1]
      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setRestaurants(restaurants);
    } catch (err) {
      console.log("error ", err);
    }
  };

  return (
    <div className="body">
      <div className="filters">
        <button
          onClick={() => {
            const filteredRest = restaurants.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setRestaurants(filteredRest);
          }}
        >
          Top Rated
        </button>
        <button
          className="filter-item"
          onClick={() => setRestaurants(restaurantMockData.restaurants)}
        >
          All
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((item) => {
          return <RestaurantCard key={item.info.id} data={item.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
