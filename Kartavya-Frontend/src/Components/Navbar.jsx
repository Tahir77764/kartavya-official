import logo from "../Assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">

        <div className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10" />
          <h1 className="font-bold text-lg text-red-600">Kartavya IAS</h1>
        </div>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#">Test Series</a>
          <a href="#">Results</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
          Enroll Now
        </button>

      </div>
    </nav>
  );
}

export default Navbar;