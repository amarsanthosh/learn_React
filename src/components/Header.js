import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName , setBtnName] = useState("login") ;
  const {loggedInUser} = useContext(UserContext);
  
  //subscribing to cart items
  const cartItems = useSelector((store)=> store.cart.items);
  return (
    <div className= "flex justify-between bg-pink-200 shadow-lg">
      <div className="logo-container">
        <img
          className= "w-56"
          src= {LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg">Online status : {useOnlineStatus() ? "✅" : "🔴" }</li>
          <li  className="px-4 text-lg "><Link to={"/"}>Home</Link></li>
          <li className="px-4 text-lg"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4 text-lg"><Link to={"/about"}>About Us</Link></li>
          <li className="px-4 text-lg"><Link to={"/contactus"}>Contact Us</Link></li>
          <li className="px-4 text-lg font-bold"><Link to={"/cart"}>Cart ({cartItems.length})</Link></li>
          <button className="px-4 text-lg hover:cursor-pointer" onClick={()=>{
            btnName === "login" ? setBtnName("logout") : setBtnName("login"); 
          }}>{btnName}</button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;