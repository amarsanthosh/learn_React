import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import Body from "./Body";
const Header = () => {
  const [btnName , setBtnName] = useState("login") ; 
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contactus"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnName === "login" ? setBtnName("logout") : setBtnName("login"); 
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
