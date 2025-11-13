import RestaurantCard from "./RestaurantCard";
import { restaurantMockData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(
    restaurantMockData.restaurants
  );

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
