import emblem from "../Assets/Emblem of India.svg";
import logo from "../Assets/logo.png";

const profiles = [
  {
    title: "IAS",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    desc: "Professional in Economy",
  },
  {
    title: "IPS",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    desc: "Professional in Economy",
  },
  {
    title: "IFS",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    desc: "Professional in Economy",
  },
];

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={emblem}
          alt="Ashoka Emblem watermark"
          className="opacity-10 w-64 md:w-80 lg:w-96"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 items-center gap-10">
        {/* LEFT SIDE PROFILES */}
        <div className="flex flex-col md:flex-row items-center md:justify-start gap-6">
          {profiles.map((p) => (
            <div
              key={p.title}
              className="bg-white border-2 border-red-500 rounded-lg shadow-md w-28 md:w-32 text-center p-4 transform transition hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-16 h-16 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-3 font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CENTER SECTION */}
        <div className="text-center z-10">
          <div className="bg-white shadow-lg rounded-xl w-24 h-24 mx-auto flex items-center justify-center p-2">
            <img src={logo} alt="Kartavya IAS logo" className="w-full h-full" />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-6 leading-tight">
            Toppers’ Choice for UPSC CSE
          </h2>

          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Prepare for UPSC Prelims and Mains with India’s top IAS coaching
            institute.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200">
              🏫 Offline / Hybrid
            </button>
            <button className="bg-red-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200">
              💻 Live Online
            </button>
          </div>
        </div>

        {/* RIGHT SIDE EMBLEM placeholder on md+ - actual watermark handled above */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}

export default Hero;
