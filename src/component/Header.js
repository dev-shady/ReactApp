import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [userLoginStatus, setUserLoginStatus] = useState(1);
  const userStatus = {
    LOGIN: 0,
    LOGOUT: 1,
  };

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                setUserLoginStatus(
                  (userLoginStatus) => (userLoginStatus + 1) % 2
                );
              }}
            >
              {userLoginStatus === userStatus.LOGIN ? "Log in" : "Log out"}
            </button>
          </li>
          <li>{isOnline ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
