import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Destinations", href: "#destinations" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-transparent  z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700 logo-font">
          Tutembee
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-green-700 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (
              <HiOutlineX size={28} />
            ) : (
              <HiOutlineMenu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden  px-4 pb-4 w-[140px] absolute top-10 right-2 z-10 bg-[#C5E188] shadow-lg rounded-lg">
          <ul className="space-y-4 text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-lg hover:text-green-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 bg-green-700 text-white rounded-lg text-center hover:bg-green-800"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
