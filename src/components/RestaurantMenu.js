import { useParams } from "react-router-dom";
import { useState } from "react";
import Reload from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0) {
    return <Reload />;
  }

  const { name, costForTwo, cuisines, avgRating, locality, sla } =
    resMenu?.cards[2]?.card?.card?.info;

  const itemCategory =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (f) => f.card,
    );

  return (
    <div className="text-center">
      <h2 className="font-bold text-4xl py-2 my-4">{name}</h2>
      <div className="border mx-[450px] p-2 my-2 rounded-2xl text-lg">
        <p>Rating - {avgRating}</p>
        <p>
          {cuisines.join(", ")} - {costForTwo}
        </p>
        <p>
          {locality} - {sla.slaString}
        </p>
      </div>
      <div>
        {itemCategory.map((list, index) => (
          <MenuCategory
            key={list.card.card.title}
            data={list?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
