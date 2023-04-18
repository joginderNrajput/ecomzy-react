import React, { useEffect, useState } from "react";
import CartItem from "../compnents/CartItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  // const { cart } = useSelector((state) => {
  //   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   return { cart: cartItems };
  // });
  
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        {cart.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
            <div className="p-4">
              <div className="flex items-center mt-4">
                <div className="mb-5 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 10H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-2m-4 0v-3a2 2 0 012-2 2 2 0 012 2v3m-4 0a2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2 2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Your Cart
                </h2>
              </div>
            </div>
            <div className="p-4">
              {cart.map((item, index) => {
                return <CartItem key={index} item={item} itemIndex={index} />;
              })}
            </div>
            <div className="p-4 border border-gray-200 rounded-md shadow-md">
              <h2 className="text-xl font-bold text-gray-400 mb-4">Summary</h2>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-500 font-bold">
                  Total Items:
                </p>
                <p className="text-sm text-gray-700 font-extrabold">{cart.length}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500 font-bold">
                  Total Amount:
                </p>
                <p className="text-sm text-green-600 font-extrabold text-[16px]">
                  ${totalAmount}
                </p>
              </div>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-600 rounded-md shadow-sm">
                CheckOut Now
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">
              Cart Empty
            </h1>
            <Link to={"/"}>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 border border-green-600 rounded-md shadow-sm">
                Shop Now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
