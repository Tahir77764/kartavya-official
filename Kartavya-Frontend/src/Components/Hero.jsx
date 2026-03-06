import emblem from "../assets/Emblem of India.svg";
import logo from "../assets/logo.jpg";
function Hero() {
    return (
        <>
            <section className="bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 items-center gap-10">

                    {/* LEFT SIDE PROFILES */}

                    <div className="flex gap-6">

                        {/* CARD 1 */}
                        <div className="bg-white border-4 border-red-500 shadow-lg w-32 text-center p-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg"
                                className="w-16 h-16 rounded-full mx-auto" />

                            <h3 className="mt-3 font-bold text-lg">IAS</h3>

                            <p className="text-sm text-gray-600">
                                Professional in Economy
                            </p>
                        </div>


                        {/* CARD 2 */}
                        <div className="bg-white border-4 border-red-500 shadow-lg w-32 text-center p-4">
                            <img src="https://randomuser.me/api/portraits/women/45.jpg"
                                className="w-16 h-16 rounded-full mx-auto" />

                            <h3 className="mt-3 font-bold text-lg">IPS</h3>

                            <p className="text-sm text-gray-600">
                                Professional in Economy
                            </p>
                        </div>


                        {/* CARD 3 */}
                        <div className="bg-white border-4 border-red-500 shadow-lg w-32 text-center p-4">
                            <img src="https://randomuser.me/api/portraits/men/65.jpg"
                                className="w-16 h-16 rounded-full mx-auto" />

                            <h3 className="mt-3 font-bold text-lg">IFS</h3>

                            <p className="text-sm text-gray-600">
                                Professional in Economy
                            </p>
                        </div>

                    </div>



                    {/* CENTER SECTION */}

                    <div className="text-center">

                        <div className="bg-white shadow-lg rounded-xl w-20 h-20 mx-auto flex items-center justify-center text-3xl font-bold text-red-600">
                            <img src={logo} className="w-full h-full" />
                        </div>

                        <h2 className="text-3xl font-bold mt-6">
                            Toppers’ Choice for UPSC CSE
                        </h2>

                        <p className="text-gray-600 mt-3">
                            Prepare for UPSC Prelims and Mains with India’s top IAS coaching institute.
                        </p>

                        <div className="mt-6 flex justify-center gap-4">

                            <button className="bg-white shadow px-5 py-2 rounded-lg">
                                🏫 Offline / Hybrid
                            </button>

                            <button className="bg-white shadow px-5 py-2 rounded-lg">
                                💻 Live Online
                            </button>

                        </div>

                    </div>



                    {/* <!-- RIGHT SIDE EMBLEM --> */}

                    <div className="hidden md:flex justify-center opacity-20">

                        <img src={emblem}
                            className="w-40" />

                    </div>

                </div>

            </section>
        </>
    )
}
export default Hero;