import { useEffect, useState } from "react";
import RestaurantMenuCard from "./RestaurantMenuCard";
import "../restaurantMenu.css";
import { menuMockData } from "../utils/mockData";
import { SWIGGY_MACD_ID } from "../utils/constant";

const RestuarantMenu = () => {
  useEffect(() => {
    fetchMenuData();
  }, []);

  const [menuCards, setMenuCards] = useState(null);

  const fetchMenuData = async () => {
    const response =
      menuMockData.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuItems = response.filter((card) => {
      console.log(card.card.card.categoryId);
      console.log(card.card.card.categoryId === SWIGGY_MACD_ID);
      return card.card.card.categoryId === SWIGGY_MACD_ID;
    });
    setMenuCards(menuItems);
  };

  menuCards?.[0]?.card?.card?.itemCards?.forEach((card) => {
    console.log(card?.card?.info);
  });

  console.log(
    "render menuCards",
    menuCards,
    menuCards?.[0]?.card?.card?.itemCards?.length
  );

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
