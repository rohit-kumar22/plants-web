import { Link } from "react-router-dom";
import leaf1 from "../assets/images/leaf-1.png";
import leaf2 from "../assets/images/leaf-2.png";
import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <header
        id="navbar"
        className="bg-green-950 fixed w-full top-0 left-0 z-50"
      >
        <nav className="container  flex items-center justify-between h-16 sm:h-20">
          <div
            className={`${navbar ? "none" : "block"} font-Lobster sm:text-2xl`}
          >
            NoidaPlants
          </div>
          <div
            id="nav-menu"
            className={`absolute top-0 ${
              navbar ? "left-0" : "left-[-100%]"
            } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
          >
            <ul className="flex flex-col items-center gap-8 lg:flex-row">
              <li className="nav-link">
                <Link>Home</Link>
              </li>
              <li className="nav-link">
                <Link>About</Link>
              </li>
              <li className="nav-link">
                <Link>Popular</Link>
              </li>
              <li className="nav-link">
                <Link>Review</Link>
              </li>
            </ul>
            <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
              <img src={leaf1} alt="leaf-1" className="w-32" />
            </div>
            <div className="absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden">
              <img src={leaf2} alt="leaf-2" className="w-32" />
            </div>
          </div>
          <div
            className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
            onClick={handleNavbar}
          >
            <i
              className={`${navbar ? "ri-close-large-line" : "ri-menu-4-line"}`}
            ></i>
          </div>
        </nav>
      </header>
    </div>
  );
}
