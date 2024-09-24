import Image from "next/image";
import Contact from "./contact";

export default function Home() {
  return (
 
    <div className="main flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white p-5">
      {/* Image Container */}
      <div className="py-8">
        <Image
          className="animate-bounce scale-100 transition-transform duration-[5000ms] ease-in-out drop-shadow-2xl"
          src="/maintenance.png"
          alt="Coming Soon"
          width={450}
          height={450}
        />
      </div>

      {/* Text Container */}
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        {/* Heading */}
        <h1 className="text-6xl font-bold tracking-wide animate-fade-in-up text-[#ffffff] drop-shadow-lg">
          Coming Soon!
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-200 animate-fade-in-up delay-300">
          Stay Tuned
        </p>

        {/* Button */}
        <button className="mt-6 bg-white text-[#11485c] hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
          Notify Me
        </button>
      </div>
    </div>
  );
}
