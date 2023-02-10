import { useState } from "react";
import logoImage from "/public/GoodFood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="Logo image" src={logoImage} />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><Link to="/instamart">InstaMart</Link></li>
        </ul>
      </div>
      <h4>{isOnline? "✅" : "🔴"}</h4>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
