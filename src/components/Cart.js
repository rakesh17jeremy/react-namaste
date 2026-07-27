import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const showCart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItem());
  };

  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-center m-4 p-2 font-bold text-2xl">Cart</h1>
      <div className="border border-orange-400 p-2">
        <ItemList list={showCart} />
      
      {showCart.length === 0 ? (
        <h1 className="text-center text-lg">Your Cart is Empty. Add Items to proceed</h1>
      ) : (
        <button className="p-1 m-2 bg-amber-600" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
      </div>
    </div>
  );
};

export default Cart;
