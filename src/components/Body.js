import ResCard from "./Restaurant";
import resList from "../utils/mockData";

const search = (
  <div className="search">
    <input type="text" placeholder="Search Here"></input>
    <i className="fa fa-search"></i>
  </div>
);

const Body = () => {
  return (
    <div>
      <section> {search}</section>
      <div className="div-body">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;