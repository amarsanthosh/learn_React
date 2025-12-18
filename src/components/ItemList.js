// import { CDN_URL } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
const ItemList = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div>
      <div className="flex m-2 p-2 text-left border-gray-200 border-b-2 justify-between">
        <div className="w-9/12">
          <div className="py-2">
            <span>{data.costForTwo}</span>
          </div>
          <p className="text-xs">
            {data.cuisines.join(", ")} | {data.areaName} | avg rating -{" "}
            {data.avgRatingString} | no.of.customers - {data.totalRatingsString}{" "}
            | locality - {data.locality} | deliverytime {data.sla.slaString} |{" "}
          </p>
        </div>

        <div className="w-3/12 p-4 ">
          <div className="absolute">
            <button className="mt-[80%] bg-black text-white p-2 mx-14 rounded-lg shadow-md shadow-green-600">
              Add +
            </button>
          </div>
          <img src={CDN_URL + data.cloudinaryImageId} className="w-full h-40 rounded-lg"></img>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
