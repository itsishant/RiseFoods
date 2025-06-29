import Restro from "./Restro";
import { useState, useEffect } from "react";
import Shimmer from "/src/components/Shimmer";
import { Link } from "react-router-dom";
import { SWIGY_API } from "../utils/url";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RestaurantPromotion } from "/src/components/Restaurants.jsx";
import Restaurant from "./Restaurants";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [resList, setResList] = useState([]);

  const UsePromotion = RestaurantPromotion(Restaurant);

  console.log("restro list", listOfRestro);

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const fetchApi = await fetch(SWIGY_API);

    const json = await fetchApi.json();

    const restaurantListCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const restaur = json?.data?.cards
      ?.filter(
        (card) =>
          card?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )
      .map((card) => card.card.card);

    setListOfRestro(restaur);

    setFilteredRestaurant(restaur);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>Looks like you're offline !!</h1>;

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex space-x-8 p-8">
        <div className="">
          <input
            type="text"
            placeholder="Search items"
            className="border border-solid border-black m-4 p-1 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className=" bg-gray-200 m-2 p-3 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestro.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className="m-4 bg-slate-400 rounded-lg p-2">
          <button
            onClick={() => {
              const filteredList = listOfRestro.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestro(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap border-solid">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/Restaurants/" + restaurant.info.id}
          >
            {restaurant?.info?.promoted ? (
              <UsePromotion resData={restaurant} />
            ) : (
              <Restro resData={restaurant} />
            )}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
