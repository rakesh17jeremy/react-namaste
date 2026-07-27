import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ list }) => {
  console.log(list);
  const dispatch = useDispatch();

  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };

  return (
    <div>
      {list.map((menu) => (
        <div
          key={menu.card.info.id}
          className="my-2 border-b border-gray-300 shadow-lg flex justify-between"
        >
          <div className="text-left py-4 px-1 w-2/3">
            <p>{menu?.card?.info?.name}</p>
            <p>Rs. {menu?.card?.info?.price / 100}</p>
            <p>{menu?.card?.info?.description}</p>
          </div>
          <div>
            <div>
              <button
                className="bg-white text-black m-3 p-1 absolute"
                onClick={()=>handleAddItem(menu)}
              >
                Add +{" "}
              </button>
            </div>
            <img
              className="w-40 p-1.5"
              src={ITEM_IMG_URL + menu?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
