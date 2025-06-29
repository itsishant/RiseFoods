import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    
    return (
    <div>
      {/* {Heading} */}
      <div className="w-6/12 bg-gray-100 m-auto my-6 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
      </div>
      {/* {Body} */}
     {showItems && <ItemsList items={data.itemCards} />}
    </div>
    </div>
  );
};

export default RestaurantCategory;
