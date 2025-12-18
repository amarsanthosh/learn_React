import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructure
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="w-62.5 m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded-lg " onClick={()=>{
      console.log("clicked");
    }}>
      <img
        className="rounded-lg h-48 w-56"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};


export const withPromotedLable = (RestaurantCard) => {
  return (props) => {
    return(
      <div >
        <label className= "absolute bg-blue-950 text-white m-1 p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};


export default RestaurantCard;
