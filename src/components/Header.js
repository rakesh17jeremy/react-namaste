import {LOGO_URL} from "../utils/constants";

const Header = () => {
  return (
    <div className="head-container">
      <img
        className="img-logo"
        src={LOGO_URL}
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

export default Header;