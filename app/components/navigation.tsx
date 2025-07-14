import React from "react";

export const Navigation: React.FC = () => (
  <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-20">
    <div className="container mx-auto px-6 flex justify-between items-center h-20">
      <a href="#" className="font-extrabold text-2xl text-orange-600 flex items-center gap-2">
        <span>Orangewave Consulting</span>
      </a>
      <ul className="hidden md:flex gap-8 font-medium text-gray-700 items-center">
        <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
        <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
        <li><a href="#team" className="hover:text-orange-500 transition">Team</a></li>
        <li><a href="#case-studies" className="hover:text-orange-500 transition">Case Studies</a></li>
        <li><a href="#blog" className="hover:text-orange-500 transition">Blog</a></li>
        <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
      </ul>
      <a
        href="#contact"
        className="hidden md:inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
      >Contact Us</a>
    </div>
  </nav>
);
