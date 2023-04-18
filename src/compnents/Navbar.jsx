import React, { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-16 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img
            className="h-auto"
            src="/src/assets/ecomzy.png"
            alt="logo"
            width={144}
            height={22}
          />
        </div>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>
      <div className="hidden md:flex md:items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
      {isOpen && (
        <div className="absolute top-16 w-full bg-gray-800 p-4">
          <div className="flex flex-col items-start space-y-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              <p className="text-slate-100">Home</p>
            </NavLink>
            <NavLink to="/cart" onClick={() => setIsOpen(false)}>
              <div className="relative">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
