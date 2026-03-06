import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#E60000] shadow-lg">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo + Name */}
        <div className="flex items-center gap-3">

          <img 
            src={logo}
            alt="Kartavya IAS"
            className="h-12 w-auto"
          />

          <h1 className="text-white text-2xl font-bold">
            Kartavya IAS
          </h1>

        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 text-white font-semibold">

          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/courses" className="hover:text-yellow-300 transition">
              Courses
            </Link>
          </li>

          <li>
            <Link to="/faculty" className="hover:text-yellow-300 transition">
              Faculty
            </Link>
          </li>

          <li>
            <Link to="/results" className="hover:text-yellow-300 transition">
              Results
            </Link>
          </li>

          <li>
            <Link to="/test-series" className="hover:text-yellow-300 transition">
              Test Series
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-yellow-300 transition">
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-yellow-300 transition">
              Blog
            </Link>
          </li>

          <li>
            <Link 
              to="/contact"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;