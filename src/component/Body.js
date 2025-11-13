import RestaurantCard from "./RestaurantCard";
import { restaurantMockData } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>

      <div className="res-container">
        {restaurantMockData.restaurants.map((item) => {
          return <RestaurantCard key={item.info.id} data={item.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
