import RestaurantMenuCard from "./RestaurantMenuCard";
import "../restaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestuarantMenu = () => {
  const menuCards = useRestaurantMenu(456);

  return (
    <div className="w-full">
      <h2 className="font-extrabold text-3xl w-1/2 mx-auto">McDonald's</h2>
      <h3 className="w-1/2 mx-auto text-xl">Order Online</h3>
      <div className="w-1/2 mx-auto">
        <input
          className="text-lg"
          value="Search for dishes"
          onChange={() => {}}
        ></input>
        <span> 🔍</span>
      </div>
      <h4 className="w-1/2 mx-auto text-lg font-black">Recommended</h4>
      {menuCards?.[0]?.card?.card?.itemCards?.map((card) => {
        const info = card.card.info;
        return (
          <div key={info.id} className="w-1/2 mx-auto pt-4">
            <RestaurantMenuCard data={info} />
          </div>
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
