import { useEffect, useState } from "react";
import { useParams} from "react-router"; 
import { MENU_API } from "./constants";
// import [useEffect]

const useRestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://food-wagon-backend.onrender.com/api/restaurants?lat=25.61011402528211&lng=85.116419903934"
    );
    const json = await data.json();
    setResInfo(json.data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };

  return resInfo;
};

export default useRestaurantMenu;
