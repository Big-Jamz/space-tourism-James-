// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/shared/logo.svg"; // adjust path if needed

const navLinks = [
  { path: "/", label: "00 HOME" },
  { path: "/destination", label: "01 DESTINATION" },
  { path: "/crew", label: "02 CREW" },
  { path: "/technology", label: "03 TECHNOLOGY" },
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-10 py-6 lg:py-10 lg:pl-14 relative">
      {/* Logo */}
      <div>
        <img src={logo} alt="Space Tourism Logo" className="w-10 h-10" />
      </div>

      {/* Horizontal Line */}
      <div className="hidden lg:block absolute left-36 right-1/2 top-1/2 border-t border-gray-500 z-10" />

      {/* Nav */}
      <nav className="backdrop-blur-md bg-white/10 px-10 py-4 lg:px-20 lg:py-8 text-white uppercase tracking-widest z-20">
        <ul className="flex gap-10 text-sm lg:text-base">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.path}
                className={`hover:underline ${
                  location.pathname === link.path ? "border-b-2 pb-1" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
