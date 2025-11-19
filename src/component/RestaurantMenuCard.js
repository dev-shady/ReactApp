import { MENU_BASE_URL } from "../utils/constant";

const RestaurantMenuCard = ({ data }) => {
  const { name, price, imageId, isVeg, ratings, description } = data;

  return (
    <div className="menu-card-item-container">
      <div className="menu-card-info">
        <h4>{name}</h4>
        <h5>₹ {price}</h5>
        <h5>{description}</h5>
      </div>
      <img className="menu-card-img" src={MENU_BASE_URL + imageId} />
    </div>
  );
};

export default RestaurantMenuCard;
