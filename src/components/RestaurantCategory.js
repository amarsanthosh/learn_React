import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const data = props.data;
  console.log(data);

  const [showItems , setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems); 
  }
  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4" >
        <div className="flex justify-between text-lg font-medium cursor-pointer" onClick={()=>{
          handleClick(); 
        }}>
          <span> {data?.name}</span>
          <span>⬇️</span>
        </div>
        {showItems &&  <ItemList data={data}/> }
      </div>
    </div>
  );
};

export default RestaurantCategory;
