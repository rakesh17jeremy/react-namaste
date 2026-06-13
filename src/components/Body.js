import ResCard from "./Restaurant";
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
  if (onlineStatus === false) return <h1>You are offline!! Please try again later</h1>;

  if (listOfRes.length === 0) {
    return <Reload />;
  }

  return (
    <div>
      <div className="div-body">
        <input
          type="text"
          placeholder="Search Here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>

        <button id="searchBox" onClick={searchFunctionality}>
          Search
        </button>

        <button
          onClick={() => {
            setFilteredListOfRes(listOfRes);
            setSearch("");
          }}
        >
          Back
        </button>

        <button
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

      <div className="div-res">
        {filteredListOfRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            className="link"
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
