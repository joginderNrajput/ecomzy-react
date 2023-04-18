import React, { useEffect, useState } from "react";
import Spinner from "../compnents/Spinner";
import Product from "../compnents/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Unable to fetch data");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
      ) : posts.length > 1 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto p-4">
          {posts.map((post) => {
            return <Product key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <p> No Data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
