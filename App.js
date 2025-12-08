import React from "react";
import ReactDOM from "react-dom/client"; 

/**
 * Header 
 *  - logo
 *  - nav items
 * Body
 *  - search
 *  - restaurant container
 *      - restsurant card 
 * Footer 
 *  - copyright
 *  - Links
 *  - Address
 *  - contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
      </div>
      <div  className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
  );
};



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<AppLayout/>); 