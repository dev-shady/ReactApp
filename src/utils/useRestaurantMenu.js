import { useEffect, useState } from "react";
import { menuMockData } from "../utils/mockData";
import { SWIGGY_MACD_ID } from "../utils/constant";

const useRestaurantMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData(restaurantId);
  }, []);

  const fetchMenuData = async (restaurantId) => {
    const response =
      menuMockData.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const menuItems = response.filter((card) => {
      console.log(card.card.card.categoryId);
      console.log(card.card.card.categoryId === SWIGGY_MACD_ID);
      return card.card.card.categoryId === SWIGGY_MACD_ID;
    });
    setResInfo(menuItems);
  };

  return resInfo;
};

export default useRestaurantMenu;
