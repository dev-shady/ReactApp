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
    <div className="flex items-center justify-between">
      <div className="logo-container">
        <img className="max-w-1/6" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex">
          <li className="m-2 p-2">Home</li>
          <li className="m-2 p-2">About Us</li>
          <li className="m-2 p-2">Contact Us</li>
          <li className="m-2 p-2">Cart</li>
          <li className="m-2 p-2">
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
          <li className="m-2 p-2">{isOnline ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
