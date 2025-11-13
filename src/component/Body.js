import RestaurantCard from "../../RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>

      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

export default Body;
