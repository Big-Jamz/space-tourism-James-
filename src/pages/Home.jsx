import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-32 pt-20 lg:pt-40">
      <div className="text-center lg:text-left max-w-xl">
        <h2 className="uppercase text-xl text-gray-400 tracking-widest mb-4">
          So, you want to travel to
        </h2>
        <h1 className="text-9xl font-serif uppercase mb-6">Space</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Let’s face it; if you want to go to space, you might as well go to the
          furthest reaches of it. So, sit back and relax because we’ll give you
          a truly out-of-this-world experience!
        </p>
      </div>

      <div className="mt-20 lg:mt-0">
        <Link
          to="/destination"
          className="relative inline-flex items-center justify-center text-black bg-white w-40 h-40 lg:w-60 lg:h-60 rounded-full text-xl lg:text-3xl uppercase font-bold tracking-widest hover:shadow-[0_0_0_40px_rgba(255,255,255,0.1)] transition duration-300"
        >
          Explore
        </Link>
      </div>
    </main>
  );
};

export default Home;
