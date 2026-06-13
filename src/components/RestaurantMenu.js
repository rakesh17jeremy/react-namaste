import { useParams } from "react-router-dom";
import Reload from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu.length === 0) {
    return <Reload />;
  }

  const { name, costForTwo, cuisines, avgRating } =
    resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h4>Rating - {avgRating}</h4>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>
      <ul>
        {itemCards.map((m) => {
          <li>
            {m.card.info.name} - {m.card.info.price / 100}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
