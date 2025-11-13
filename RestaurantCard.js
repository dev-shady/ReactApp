const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-card-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/33ea9b71-9535-472c-a260-d02060354feb_25169.jpg"
      />
      <h3>Subway</h3>
      <h5>Burger, Sandwitches, Drinks, Fries</h5>
      <p>4.4 Stars</p>
      <p>30 mins </p>
    </div>
  );
};

export default RestaurantCard;