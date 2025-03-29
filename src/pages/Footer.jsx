import floral1 from "../assets/images/floral-1.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative">
        <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
          <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
            <h3>
              <span className="text-yellow-500">Subscribe</span> to our
              newsletter
            </h3>

            <div className="flex flex-col md:flex-row gap-1">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full py-3 px-5 text-green-900 rounded-md outline-none"
              />
              <button className="flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                <span>Subscribe</span>
                <i className="ri-send-plane-2-fill" />
              </button>
            </div>
          </div>
        </div>

        {/* ---------- social icons ------------ */}
        <div className="container mt-16 mb-10">
          <div className="border-b border-green-500 relative">
            <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
              <div className="bg-yellow-100 text-lg text-center space-x-2">
                <i className="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                <i className="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer text-base"></i>
                <i className="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                <i className="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- content ------------ */}
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
          {/* ---------- item-1 ------------ */}
          <div>
            <div className="text-7xl text-green-700 text-center inline-block">
              <i className="ri-leaf-fill" />
              <p className="font-Lobster text-xl sm:text-2xl">NoidaPlants.</p>
            </div>
          </div>

          {/* ---------- item-2 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Quick Link</p>
            <div className="flex flex-col gap-1">
              <Link>Plants</Link>
              <Link>Flowers</Link>
              <Link>Gerdening</Link>
              <Link>Seeds</Link>
              <Link>Shipping</Link>
            </div>
          </div>

          {/* ---------- item-3 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Popular Services</p>
            <div className="flex flex-col gap-1">
              <Link>Tree Planting</Link>
              <Link>Grass Cutting</Link>
              <Link>Weeds Control</Link>
              <Link>Project</Link>
            </div>
          </div>

          {/* ---------- item-4 ------------ */}
          <div>
            <p className="mb-5 font-bold text-xl">Contact Us</p>
            <div className="flex flex-col gap-1">
              <p>+91 987 65 432</p>
              <Link>noidaplants@gmail.com</Link>
              <br></br>
              <p>543 Abc Road, Noida, 201014, India</p>
            </div>
          </div>
        </div>

        {/* ---------- copyright ------------ */}

        <div className="container">
          <p className="text-center mt-10 opacity-50">
            Copyright &copy; 2025 rohitkumar-22. All rights reserved.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 opacity-20 pointer-events-none">
          <img src={floral1} alt="floral" className="w-full lg:w-1/2" />
        </div>
      </footer>
    </div>
  );
}
