import RestaurantCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { CACHE_RESTAURANTS_KEY } from "../utils/constant";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const cache = useRef(new Map());

  useEffect(() => {
    fetchData();

    () => {
      cache.current.clear();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data = await response.json();
      //handle index out of bound for cards[1]
      const restaurants =
        data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      cache.current.set(CACHE_RESTAURANTS_KEY, restaurants);
      setRestaurants(restaurants);
    } catch (err) {
      console.log("error ", err);
    }
  };

  return !restaurants.length ? (
    <Shimmer />
  ) : (
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
          onClick={() => {
            setRestaurants(
              cache.current.has(CACHE_RESTAURANTS_KEY)
                ? cache.current.get(CACHE_RESTAURANTS_KEY)
                : []
            );
          }}
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
