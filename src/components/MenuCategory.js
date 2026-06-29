import { useState } from "react";
import ItemList from "./ItemList";

const MenuCategory = ({ data, showItem, setShowIndex }) => {
  const [showAcc, setShowAcc] = useState(false);
  return (
    <div
      className="w-6/12 my-3 mx-auto p-3 bg-blue-50 shadow-lg cursor-pointer"
      onClick={() => {
        setShowAcc(!showAcc);
        setShowIndex();
      }}
    >
      <div className="flex justify-between border-b border-gray-300 p-2">
        <span>
          {data.title}({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <div>{showItem && showAcc && <ItemList list={data.itemCards} />}</div>
    </div>
  );
};

export default MenuCategory;
