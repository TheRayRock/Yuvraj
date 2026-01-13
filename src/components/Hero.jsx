import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen bg-[#2f2f2f] text-white overflow-hidden">
      <Navbar />
      <div className="relative h-full flex items-center">
        <div className="max-w-xl pl-5 -mt-10 z-10">
          <h1 className="text-5xl font-bold mb-6">Sri Akash</h1>

          <p className="text-gray-300 leading-relaxed">
            Hello there! I&apos;m Akash, a passionate <br />
            <span className="text-white font-medium">
              Graphic Designer / Web Developer / UI-UX Enthusiast
            </span>
            , breathing life into ideas through the magic of design and
            technology.
          </p>

          {/* Arrow */}
          <div className="mt-8">
            <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl">
              →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (DESIGN SIZE & POSITION) */}
        <div className="absolute bottom-0 right-0 h-[100vh] flex items-end">
          <Image
            src="/Saly-16.png"
            alt="Hero illustration"
            width={520}
            height={520}
            className="h-full w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
