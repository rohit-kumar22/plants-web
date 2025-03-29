import { useSelector, useDispatch } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const CartPage = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  console.log("cart", cartItems);

  return (
    <div className="text-black">
      {cartItems.length === 0 ? (
        <div className="h-[calc(100vh-295px)]">
          <p className="p-5 text-center">No items in cart</p>
        </div>
      ) : (
        <div>
          <h1 className="pl-5 font-semibold">Cart Items</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center m-5">
            {cartItems.map((item) => (
              <div>
                <div key={item.id} className="border p-4 shadow-lg rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-contain mb-2"
                  />
                  <h3 className="text-lg font-semibold text-gray-500">
                    {item.title.slice(0, 20)}
                  </h3>
                  <p className="text-green-600 font-bold mt-2">${item.price}</p>
                  <p className="text-yellow-500">
                    ⭐ {item.rating.rate} | {item.rating.count}
                  </p>
                  <div className="flex justify-between">
                    <div className="flex gap-2 mt-3">
                      <button
                        className="bg-black text-white px-2 rounded"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        <FiPlus />
                      </button>
                      <p className="bg-gray-500 pt-1 rounded px-2">
                        Qtn - {item.quantity}
                      </p>
                      <button
                        className="bg-black text-white rounded px-2"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        <FiMinus />
                      </button>
                    </div>
                    <button
                      className="bg-black text-sm text-white px-3 py-2 rounded mt-3"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="border p-4 shadow-lg rounded-lg m-5">
            <h3 className="font-semibold">Order Details</h3>
            <div className="flex flex-col text-sm text-gray-700">
              <div className="flex gap-5 py-5">
                <p className="font-semibold text-black">Cart Total : </p>
                <p>${totalPrice} </p>
              </div>
              <div></div>
              <div></div>
            </div>
            <button className="border-2 border-black rounded p-2 hover:bg-black hover:text-white transition duration-300">
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
