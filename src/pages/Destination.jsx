import React, { useState } from "react";

import moonImg from "/assets/destination/image-moon.png";
import marsImg from "/assets/destination/image-mars.png";
import europaImg from "/assets/destination/image-europa.png";
import titanImg from "/assets/destination/image-titan.png";

const destinations = [
  {
    name: "Moon",
    image: moonImg,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    image: marsImg,
    description:
      "Don’t forget to pack your hiking boots. Mars offers stunning vistas and challenging terrain for the brave adventurer.",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    image: europaImg,
    description:
      "A winter lover’s dream. Europa’s icy crust hides a vast ocean perfect for exploration beneath the surface.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    image: titanImg,
    description:
      "The only moon with a thick atmosphere. Titan is a great place to explore methane lakes and enjoy alien sunsets.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const [current, setCurrent] = useState(0);
  const { name, image, description, distance, travel } = destinations[current];

  return (
    <main className="text-white px-8 max-w-6xl mx-auto pt-20">
      <h2 className="uppercase text-2xl tracking-widest mb-10">
        <span className="opacity-25 mr-4">01</span> Pick your destination
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
        <img src={image} alt={name} className="w-60 h-60 md:w-80 md:h-80" />

        <div className="text-center lg:text-left max-w-xl">
          <div className="flex gap-8 justify-center lg:justify-start mb-6 text-xl">
            {destinations.map((dest, index) => (
              <button
                key={dest.name}
                onClick={() => setCurrent(index)}
                className={`uppercase tracking-widest ${
                  current === index
                    ? "border-b-2 border-white"
                    : "text-gray-400"
                }`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <h1 className="text-6xl font-serif uppercase mb-6">{name}</h1>
          <p className="text-lg text-gray-300 mb-10">{description}</p>

          <hr className="border-gray-600 my-8" />

          <div className="flex gap-12 justify-center lg:justify-start text-center lg:text-left">
            <div>
              <h3 className="text-sm tracking-widest text-gray-400 uppercase">
                Avg. Distance
              </h3>
              <p className="text-2xl uppercase">{distance}</p>
            </div>
            <div>
              <h3 className="text-sm tracking-widest text-gray-400 uppercase">
                Est. Travel Time
              </h3>
              <p className="text-2xl uppercase">{travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
