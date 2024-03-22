import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import "./styles.css";

const Navbar = ({ cartItemsCount, isLogged }) => {
  return (
    <nav>
      <div className="nav-cont-1">
        <h2 className="nav-h2">
          Tee-<span style={{ fontWeight: "400" }}>store</span>
        </h2>
        <ul className="nav-ul">
          <a href="##">Products</a>
          <span className="about-span">Shop</span>
          <a href="##">About</a>
        </ul>
      </div>

      <div className="nav-cont-2">
        {!isLogged && <button className="login-nav">Login</button>}
        <AiOutlineSearch size={25} />
        <a href="##" className="cart-icon-cont">
          <span className="nav-cart-count">{cartItemsCount}</span>
          <HiShoppingCart
            size={25}
            style={{
              marginRight: "10px",
              marginLeft: "15px",
              marginBottom: "-5px",
            }}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
