import ResCard from "./Restaurant";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const search = (
  <div className="search">
    <input type="text" placeholder="Search Here"></input>
    <i className="fa fa-search"></i>
  </div>
);

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

   useEffect(()=>{
    fetchApi();
   }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9653652&lng=80.2461057&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();
    console.log(json);

    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if(listOfRes.length ===0 ){
    return <Shimmer />
  }

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <button 
          onClick={() => {
            const filterRes = listOfRes.filter((obj) => obj.info.avgRating > 4.3);
            console.log(filterRes);
            setListOfRes(filterRes);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="div-body">
        {listOfRes.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
