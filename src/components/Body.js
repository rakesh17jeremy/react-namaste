import ResCard, { withPromoted } from "./Restaurant";
import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";
import { Link } from "react-router-dom";
import Reload from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

// const search = (
//   <div className="search">
//     <input type="text" placeholder="Search Here"></input>
//     <button>Search</button>
//   </div>
// );

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(RES_API);

    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9653652&lng=80.2461057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    // );

    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.3841125&lng=77.6645156&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    // );

    const json = await data.json();

    setListOfRes(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setFilteredListOfRes(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  console.log(listOfRes);

  const searchFunctionality = () => {
    const searchRes = listOfRes.filter(
      (res) =>
        res.info.name.toLowerCase().includes(search.toLowerCase()) ||
        res.info.cuisines.forEach((s) => {
          s.toLowerCase().includes(search.toLowerCase());
        }),
    );
    setFilteredListOfRes(searchRes);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are offline!! Please try again later</h1>;

  const PromotedRestaurant = withPromoted(ResCard);

  if (listOfRes.length === 0) {
    return <Reload />;
  }

  return (
    <div>
      <div className="flex justify-between bg-gray-600 px-1 border-b shadow-amber-300">
        <div className="flex p-2">
          <input
            className="border border-orange-500 rounded-3xl my-2 mx-1 text-white"
            type="text"
            placeholder="       Search Here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>

          <button
            type="submit"
            className="m-1 inline-flex items-center rounded-xl border border-orange-400 justify-center shrink-0 text-white focus:ring-4 focus:ring-brand-medium shadow-xs rounded-base w-10 h-10 focus:outline-none"
            onClick={searchFunctionality}
          >
            <svg
              className="w-15 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                d="m22 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          <button
            className="cursor-pointer text-white p-2 m-1 border border-orange-500 shadow-2xs rounded-2xl text-lg"
            onClick={() => {
              setFilteredListOfRes(listOfRes);
              setSearch("");
            }}
          >
            Back
          </button>

          <button
            className="cursor-pointer text-white p-2 m-1 border border-orange-500 shadow-2xs rounded-2xl text-lg"
            onClick={() => {
              const filterRes = listOfRes.filter(
                (obj) => obj.info.avgRating > 4.2,
              );
              console.log(filterRes);
              setFilteredListOfRes(filterRes);
            }}
          >
            Top Restaurants
          </button>
        </div>
        <div className="m-3">
          <Link to="/grocery" className="pointer text-white px-3 bold text-3xl">
            Grocery
          </Link>
        </div>
      </div>

      <div className="m-4 px-4 flex flex-wrap">
        {filteredListOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link"
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating < 4.3 ? (
              <PromotedRestaurant resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
