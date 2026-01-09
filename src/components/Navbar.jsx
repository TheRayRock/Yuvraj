export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full h-[80px] flex items-center justify-between px-10 text-white">
      {/* Logo */}
      <h1 className="text-xl font-semibold">Sri Akash.</h1>

      {/* Menu */}
      <ul className="flex gap-10 text-sm font-medium">
        <li className="cursor-pointer hover:text-gray-300">Home</li>
        <li className="cursor-pointer hover:text-gray-300">Portfolio</li>
        <li className="cursor-pointer hover:text-gray-300">Resume</li>
        <li className="cursor-pointer hover:text-gray-300">About Me</li>
      </ul>
    </nav>
  );
}
