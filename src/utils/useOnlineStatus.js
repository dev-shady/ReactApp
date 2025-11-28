import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  const updateNetworkStatus = (online) => {
    console.log("updateNetworkStatus", online);
    setOnlineStatus(online);
  };

  useEffect(() => {
    window.addEventListener("online", () => updateNetworkStatus(true));
    window.addEventListener("offline", () => updateNetworkStatus(false));
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
