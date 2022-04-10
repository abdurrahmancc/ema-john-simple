import React from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Header;
