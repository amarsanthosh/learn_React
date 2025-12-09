import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    let reslist = resList;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button className="filter-btn"
        onClick={()=>{
            reslist = reslist.filter((res)=> res.data.avgRating > 4);
            console.log(reslist); 
        }}
        >Top Restaurants</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;