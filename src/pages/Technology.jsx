import React, { useState } from "react";

const technologyData = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
    imageLandscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft...",
    imagePortrait: "/assets/technology/image-spaceport-portrait.jpg",
    imageLandscape: "/assets/technology/image-spaceport-landscape.jpg",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere...",
    imagePortrait: "/assets/technology/image-space-capsule-portrait.jpg",
    imageLandscape: "/assets/technology/image-space-capsule-landscape.jpg",
  },
];

const Technology = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tech = technologyData[activeIndex];

  return (
    <div className="text-white p-15 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
      <div className="flex lg:flex-col gap-4 justify-center">
        {technologyData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-15 h-15 rounded-full border ${
              index === activeIndex ? "bg-white text-black" : "text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="flex-1 mt-33">
        <h2 className="uppercase text-gray-400 tracking-widest text-lg">
          The terminology...
        </h2>
        <h1 className="uppercase text-4xl font-bold">{tech.name}</h1>
        <p className="mt-4 text-gray-300">{tech.description}</p>
      </div>

      <div className="flex-1 relative left-40">
        <img
          src={tech.imagePortrait}
          alt={tech.name}
          className="hidden lg:block w-full"
        />
        <img
          src={tech.imageLandscape}
          alt={tech.name}
          className="block lg:hidden w-full"
        />
      </div>
    </div>
  );
};

export default Technology;
