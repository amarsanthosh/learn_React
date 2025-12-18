import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div>
      {/* {Header} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4" >
        <div className="flex justify-between text-lg font-medium">
          <span> {data?.name}</span>
          <span>⬇️</span>
        </div>
        <ItemList data={data}/>
      </div>
    </div>
  );
};

export default RestaurantCategory;
