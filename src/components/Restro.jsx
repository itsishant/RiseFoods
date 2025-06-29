import { IMG_URL } from "/src/utils/constants";

const Restro = ({ resData }) => {
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    deliveryTime,
  } = resData.info;

  return (
    <div className="m-7 p-3.5 w-[280px]  bg-gray-100">
      <img
        className="rounded-xl"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
      />
      <h2 className="font-bold py-3 text-xl">{name}</h2>
      <h5 className="py-3 font-serif">{cuisines.join(", ")}</h5>
      <h5 className="py-3">{costForTwo} For Two</h5>

      <h5>{avgRating}⭐ Rating</h5>
    </div>
  );
};

export default Restro;
