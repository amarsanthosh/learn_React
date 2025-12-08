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


  const RestaurantCard = () =>{
    return (
      <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
        <img alt="res-image" className="res-image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fvxeg8wezgowcit6tsyo"/>
        <h3>Sai Brindhavan</h3>
        <h4>South Indian,Chinese</h4>
        <h4>4.6 stars</h4>
        <h4>25 mins</h4>
      </div>
    );
  };


  const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
    );
  };


  const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    );
  };



  const root = ReactDOM.createRoot(document.getElementById("root")); 

  root.render(<AppLayout/>); 