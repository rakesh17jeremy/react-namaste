import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="head-container">
      <img
        className="img-logo"
        src="https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg"
        alt="logo"
      />
      <h1 className="title">Bloody Sweet</h1>
      <ul className="list">
        <li>Home</li>
        <li>Profile</li>
        <li>Cart</li>
        <li>About Us</li>
      </ul>
    </div>
  );
};

const search = (
  <div className="search">
    <input type="text" placeholder="Search Here"></input>
    <i className="fa fa-search"></i>
  </div>
);

const Rescard = (props) => {
  const { resData } = props;
  const { name, Ratings, Timing, Restaurant_Type } = resData;
  return (
    <div className="res-card">
      <img
        className="res-kgf"
        src="https://t4.ftcdn.net/jpg/09/28/82/47/360_F_928824793_tdXEOOB4ItBHAQZuxIVtc4CzsDCJgr07.jpg"
      />
      <h2>{name}</h2>
      <h4>Rating : {Ratings}</h4>
      <h4>{Timing}</h4>
      <h4>{Restaurant_Type}</h4>
    </div>
  );
};

const resList = [
  {
    name: "KFC",
    id: 789,
    URL: "https://www.sample-restaurant1.com",
    Timing: "10:00 AM - 10:00 PM",
    Address: "123 Main Street, Sample City",
    Location: "Sample Location",
    City: "Sample City",
    Offer: "10% off on orders over $50",
    Contact_Number: "+1 123-456-7890",
    Cost_for_two: 40,
    Restaurant_Type: "Cuisine Type 1",
    Ratings: 4.5,
  },
  {
    name: "Guntur Karam",
    id: 345,
    URL: "https://www.sample-restaurant2.com",
    Timing: "11:00 AM - 9:00 PM",
    Address: "456 Elm Street, Another City",
    Location: "Another Location",
    City: "Another City",
    Offer: "Free dessert with every meal",
    Contact_Number: "+1 987-654-3210",
    Cost_for_two: 30,
    Restaurant_Type: "Cuisine Type 2",
    Ratings: 4.0,
  },
];

const Body = () => {
  return (
    <div>
      <section> {search}</section>
      <div className="div-body">
        {resList.map((restaurant) => (
          <Rescard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="mainDiv">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
