import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
  const resInfo = useRestaurantMenu();

    
  const [showIndex,setShowIndex] = useState(null); 

  // console.log(resInfo);
  if (resInfo === null ) {
    return <Shimmer />;
  } else if (5 > 10) {
    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    console.log(itemCards);

    return (
      <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  else {
    console.log(resInfo);
    // const [] .
    //  const { name, cuisines, costForTwoMessage } =
    // resInfo?.info;
    return (
      <div className="text-center">
         

          <h1 className="m-4 p-2 text-3xl font-bold text-green-500 ">Our Favourite restaurant </h1>

          <h2 className="m-4 p-2 text-2xl font-mono">Recepies that craves you...</h2>
          {  
          resInfo.map((resData,index)=>(
            <div key={resData?.info?.id}>
        
             <RestaurantCategory 
                data={resData?.info}
                showItems = {index===showIndex ? true : false}
                setShowIndex = {()=>setShowIndex(index)}
             
             />
            </div> 
          ))
        }
        
        {/* <span>Helllloooooo</span> */}
      </div>
    )
  }
};
export default RestaurantMenu;
