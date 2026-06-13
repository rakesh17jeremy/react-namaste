import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="head-container">
      <img className="img-logo" src={LOGO_URL} alt="logo" />
      <h1 className="title">Bloody Sweet</h1>
      <ul className="list">
        <li>{onlineStatus?"🟢":"🔴"}</li>
        <li>
          <Link className="link" to="/grocery">
            Grocery
          </Link>
        </li>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>Profile</li>
        <li>Cart</li>
        <li>
          <Link className="link" to="/about">
            About Us
          </Link>
        </li>
        <button
          style={{ cursor: "pointer" }}
          onClick={() => {
            btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
