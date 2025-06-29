import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartItems";

const ItemsList = ({ items }) => {

  const dispatch = useDispatch();

  const handAddItems = (item) => {
    dispatch(addItems(item));
  }

  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="text-left p-4 m-4 flex justify-between items-center border-black border-b-2"
        >
          <div className="p-3 flex-1">
            <span className="text-lg font-semibold">
              {item?.card?.info?.name}
            </span>{" "}
            <span> - ₹ {item?.card?.info?.price / 100}</span>
            <p className="text-sm mt-2">{item?.card?.info?.description}</p>
          </div>
          <button className="bg-slate-900 text-white p-1 rounded-xl mr-4" onClick={() => handAddItems(item)}>
            Add+
          </button>
          <img
            className="w-36 rounded-lg object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              item?.card?.info?.imageId
            }
          />
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
