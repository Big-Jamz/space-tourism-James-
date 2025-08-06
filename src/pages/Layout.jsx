import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  const location = useLocation();

  const bgImages = {
    "/": {
      desktop: "/assets/home/background-home-desktop.jpg",
      tablet: "/assets/home/background-home-tablet.jpg",
      mobile: "/assets/home/background-home-mobile.jpg",
    },
    "/destination": {
      desktop: "/assets/destination/background-destination-desktop.jpg",
      tablet: "/assets/destination/background-destination-tablet.jpg",
      mobile: "/assets/destination/background-destination-mobile.jpg",
    },
    "/crew": {
      desktop: "/assets/crew/background-crew-desktop.jpg",
      tablet: "/assets/crew/background-crew-tablet.jpg",
      mobile: "/assets/crew/background-crew-mobile.jpg",
    },
    "/technology": {
      desktop: "/assets/technology/background-technology-desktop.jpg",
      tablet: "/assets/technology/background-technology-tablet.jpg",
      mobile: "/assets/technology/background-technology-mobile.jpg",
    },
  };

  const image = bgImages[location.pathname] || bgImages["/"];

  return (
    <div className="min-h-screen w-full text-white relative overflow-hidden">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
      </picture>

      <Header />

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
