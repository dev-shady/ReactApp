import { MEDIA_BASE_URL } from "../utils/constant";

const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = data;
  return (
    <div className="res-card">
      <img className="res-card-logo" src={MEDIA_BASE_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <p>{avgRating + " Stars"}</p>
      <p>{sla.deliveryTime + " mins"}</p>
    </div>
  );
};

export default RestaurantCard;
