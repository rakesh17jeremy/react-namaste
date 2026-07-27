import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userLoggedIn } = useContext(UserContext);
  const [showUser, setShowUser] = useState("");
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between text-center border-b">
      <img className="w-28 mx-1.5" src={LOGO_URL} alt="logo" />
      <h1 className="bold m-auto text-orange-400 text-5xl font-serif">
        Bloody Sweet
      </h1>
      <ul className="flex p-3 m-3 items-center text-xl">
        <li className="p-2">{onlineStatus ? "🟢" : "🔴"}</li>
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/cart">🛒({cartItem.length})</Link>
        </li>
        <li className="p-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-1.5 font-bold">{showUser}</li>
        <button
          className="cursor-pointer text-body bg-orange-300 p-2 shadow-2xs rounded-2xl"
          onClick={() => {
            // btnName === "Login" ? setBtnName("Log Out") : setBtnName("Login");
            if (btnName === "Login") {
              setShowUser(userLoggedIn);
              setBtnName("Log Out");
            } else {
              setShowUser("");
              setBtnName("Login");
            }
          }}
        >
          {btnName}
        </button>
      </ul>
    </div>
  );
};

export default Header;
