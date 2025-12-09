import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    // let arr =  useState(resList); 
    const [listOfRestaurants,setListOfRestaurants]  =  useState(resList);
    // const [listOfRestaurants,setListOfRestaurants] = arr; 
    //  const listOfRestaurants = arr[0]; 
    //  const setListOfRestaurants = arr[1]; 
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
            const filteredList = listOfRestaurants.filter((res)=> res.data.avgRating > 4);
            setListOfRestaurants(filteredList); 
            console.log(filteredList); 
        }}
        >Top Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;