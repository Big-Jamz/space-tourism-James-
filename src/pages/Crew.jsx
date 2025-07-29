import React, { useState } from "react";

const crewData = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: "/assets/crew/image-douglas-hurley.png",
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu OS.",
    image: "/assets/crew/image-mark-shuttleworth.png",
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.",
    image: "/assets/crew/image-victor-glover.png",
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/assets/crew/image-anousheh-ansari.png",
  },
];

const Crew = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const crew = crewData[selectedIndex];

  return (
    <div className="min-h-screen w-full flex flex-col  p-[120px] text-white text-left">
      <h2 className="uppercase tracking-widest text-lg mb-8">
        <span className="opacity-25">02</span> Meet your crew
      </h2>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 max-w-5xl">
        <div className="flex-1 space-y-4">
          <h3 className="text-xl text-gray-400 uppercase">{crew.role}</h3>
          <h1 className="text-3xl lg:text-5xl uppercase">{crew.name}</h1>
          <p className="text-lg max-w-md mx-auto lg:mx-0">{crew.bio}</p>

          <div className="flex justify-left gap-4 mt-25">
            {crewData.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  selectedIndex === index ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex-[-3] ">
          <img
            src={crew.image}
            alt={crew.name}
            className="w-120 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
