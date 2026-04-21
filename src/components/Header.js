import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="head-container">
      <img className="img-logo" src={LOGO_URL} alt="logo" />
      <h1 className="title">Bloody Sweet</h1>
      <ul className="list">
        <li>Home</li>
        <li>Profile</li>
        <li>Cart</li>
        <li>About Us</li>
        <button style={{cursor:"pointer"}}
          onClick={() => {
            btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
