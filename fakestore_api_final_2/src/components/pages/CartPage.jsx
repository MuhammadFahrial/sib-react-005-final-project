import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItems,
  increment,
  decrement,

  // incrementByAmount,
} from "../../features/cart/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // const [incrementAmount, setIncrementAmount] = useState(1);
  // const addValue = Number(incrementAmount) || 1;

  const handleToRemove = (item) => {
    dispatch(removeItems(item));
    alert("Data berhasil di hapus");
  };

  const handleToCheckout = () => {
    alert("Item Checkout");
  };

  // console.log(cartItems);

  return (
    <>
      <div className="text-center p-6 text-4xl font-serif">
        <h1>Cart Page</h1>
      </div>
      <hr />
      <div className="p-6">
        <table className="w-full">
          <thead className="border-b-2 border-gray-200"></thead>
          <tbody className="text-[14px]">
            {cartItems.map((product, index, total) => {
              return (
                <tr key={product?.id}>
                  <td className="w-1/2">{product?.title}</td>
                  <td className="w-26 text-center">
                    ${new Intl.NumberFormat().format(product?.price)}
                  </td>
                  <td className="w-26 flex justify-center gap-2">
                    <button onClick={() => dispatch(decrement(product))}>
                      -
                    </button>
                    <p id="">{product?.cartQuantity}</p>
                    <button onClick={() => dispatch(increment(product))}>
                      +
                    </button>
                  </td>
                  <td className="w-28 text-center">
                    $
                    {
                      (total = new Intl.NumberFormat().format(
                        product?.price * product?.cartQuantity
                      ))
                    }
                  </td>

                  <td className="w-8 text-center">
                    <button onClick={() => handleToRemove(product)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="mt-2 px-2 py-1 bg-green-700 text-white text-[14px] rounded"
          onClick={() => handleToCheckout()}
        >
          Checkout
        </button>
      </div>
    </>
  );
};

export default CartPage;
