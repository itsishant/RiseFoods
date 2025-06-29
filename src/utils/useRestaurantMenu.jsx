import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    restroApi();
  }, [resId]);

  const restroApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139298&lng=77.2088282&restaurantId=" +
        resId +
        "&catalog_qa=undefined&query=North%20Indian&submitAction=ENTER"
    );

    const json = await data.json();

    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
