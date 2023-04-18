import React from "react";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart!");
  };

  // const addToCart = () => {
  //   dispatch(add(post));
  //   toast.success("Item added to Cart!");
  //   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   cartItems.push(post);
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  // };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart!");
  };

  // const removeFromCart = () => {
  //   dispatch(remove(post.id));
  //   toast.error("Item removed from Cart!");
  //   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   let filteredCartItems = cartItems.filter((item) => item.id !== post.id);
  //   localStorage.setItem("cartItems", JSON.stringify(filteredCartItems));
  // };
  console.log(post);
  return (
    <div className="flex justify-center items-center flex-col hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:scale-90 hover:border-[1px] border-gray-400 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} alt="" className="h-full w-full" />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <div>
          {cart.some((p) => p.id == post.id) ? (
            <button
              onClick={removeFromCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
