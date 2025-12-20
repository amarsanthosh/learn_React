import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <div className="text-center m-4 p-4">
        <h2 className="text-2xl font-bold">Cart Items</h2>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.map((items, index) => (
          <ItemList key={index} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
