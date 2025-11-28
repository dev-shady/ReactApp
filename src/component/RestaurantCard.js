import { MEDIA_BASE_URL } from "../utils/constant";

const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } = data;
  return (
    <div className="w-[250px] m-4 p-1">
      <img className="w-100" src={MEDIA_BASE_URL + cloudinaryImageId} />
      <h3 className="font-bold ">{name}</h3>
      <h5 className="font-extralight ">{cuisines.join(", ")}</h5>
      <p className="text-green-600 ">{avgRating + " Stars"}</p>
      <p>{sla.deliveryTime + " mins"}</p>
    </div>
  );
};

export default RestaurantCard;
