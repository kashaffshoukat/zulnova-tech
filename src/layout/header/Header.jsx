import React from "react";

const Header = () => {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Company", href: "#company" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img src="/assets/Logo.webp" alt="Logo" className="w-14 " />
        </div>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-gray-300">
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-blue-800 bg-white hover:bg-gray-100 border border-white px-4 py-2 rounded-md transition duration-300"
        >
          Contact us
        </a>
      </div>
    </header>
  );
};

export default Header;
