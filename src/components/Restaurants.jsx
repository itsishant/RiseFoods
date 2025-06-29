import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restro from "./Restro";
import Shimmer from "/src/components/Shimmer.jsx";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const Restaurant = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-2 p-2 text-[35px]">{name}</h1>
      <ul>
        <h3 className=" font-bold">{cuisines?.join(", ")}</h3>
      </ul>
      {categories.map((categroy) => (
        <RestaurantCategory key={categroy?.card?.card?.title} data={categroy?.card?.card} />
      ))}
      {/* <ul className="space-y-4">
                {itemCards?.map((item) => <li className="w-[900px]" key={item?.card?.info?.id} >
                    {item?.card?.info?.name || item?.card?.info?.title} {"  -     Rs. "}{item?.card?.info?.price /100 ||
                item?.card?.info?.defaultprice / 100}
                </li>)}
            </ul> */}
    </div>
  );
};

export const RestaurantPromotion = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          {" "}
          Promoted{" "}
        </label>
        <Restro {...props} />
      </div>
    );
  };
};

export default Restaurant;
