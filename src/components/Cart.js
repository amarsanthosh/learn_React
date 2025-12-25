import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h2 className="text-2xl font-bold">Cart Items</h2>

      <div className="w-6/12 m-auto">
        <button
          className="border border-black m-2 p-2 text-amber-50 bg-amber-700 rounded-lg cursor-pointer"
          onClick={() => handleClearCart()}
        >
          clear cart
        </button>

        {cartItems.length === 0 && (
          <h2 >Your cart is empty !! Add items to checkout !!! </h2>
        )}
        {cartItems.map((items, index) => (
          <ItemList key={index} data={items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
