import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";


const Body = () => {
    // let arr =  useState(resList); 
    const [listOfRestaurants,setListOfRestaurants]  =  useState([]);
    // const [listOfRestaurants,setListOfRestaurants] = arr; 
    //  const listOfRestaurants = arr[0]; 
    //  const setListOfRestaurants = arr[1]; 

    useEffect(()=>{
      fetchData(); 
    }, []); 
     
    const fetchData = async () => {
      const data = await fetch("https://food-wagon-backend.onrender.com/api/restaurants?lat=25.61011402528211&lng=85.116419903934");
      const json = await data.json(); 

      console.log(json.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); 
      const newList = json.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants; 
      console.log(newList[0].info.id);
      setListOfRestaurants(newList); 
    }


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
        {
        console.log(listOfRestaurants)

        }
        {
          
        listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;