import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
    
    const [listOfRestaurants,setListOfRestaurants]  =  useState([]);
    const [filteredRestaurants,setFilteredRestaurants]  =  useState([]);
    const [searchTxt, setSearchTxt] = useState(""); 
    useEffect(()=>{
      fetchData(); 
    }, []); 
     
    const fetchData = async () => {
      const data = await fetch("https://food-wagon-backend.onrender.com/api/restaurants?lat=25.61011402528211&lng=85.116419903934");
      const json = await data.json(); 

      // console.log(json.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
      const newList = json?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
      // console.log(newList[0].info.id);
      console.log(newList); 
      setListOfRestaurants(newList); 
      setFilteredRestaurants(newList); 
    }
  return listOfRestaurants.length === 0 ?  (<Shimmer/>) : 
  (
    <div className="body">

      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchTxt} onChange={(e)=>{
            setSearchTxt(e.target.value);
          }}></input>
          <button className="search-btn" onClick={()=>{
            const filteredRes = listOfRestaurants.filter(
              (res)=> res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
            );
            setFilteredRestaurants(filteredRes); 
          }}>Search</button>
        </div>
        <button className="filter-btn"
        onClick={()=>{
            console.log("Top clicked"); 
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating > 4.2);
            setFilteredRestaurants(filteredList);  
            console.log(filteredList); 

        }}
        >Top Restaurants</button>
      </div>
      {console.log(filteredRestaurants)}
      <div className="res-container">
        {
           
        filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id }>
          <RestaurantCard resData={restaurant} />
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;