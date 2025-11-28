import RestaurantMenuCard from "./RestaurantMenuCard";
import "../restaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestuarantMenu = () => {
  const menuCards = useRestaurantMenu(456);

  return (
    <div className="menu-container">
      <h2 className="info">McDonald's</h2>
      <h3 className="info">Order Online</h3>
      <div className="info">
        <input value="Search for dishes" onChange={() => {}}></input>
        <span> 🔍</span>
      </div>
      <h4 className="info">Recommended</h4>
      {menuCards?.[0]?.card?.card?.itemCards?.map((card) => {
        const info = card.card.info;
        return (
          <div key={info.id} className="menu-card-container">
            <RestaurantMenuCard data={info} />
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
