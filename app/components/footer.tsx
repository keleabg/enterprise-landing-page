import React from "react";

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-8 mt-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-semibold text-lg">&copy; {new Date().getFullYear()} Orangewave Consulting</span>
      <span className="text-sm text-gray-300">Empowering business. Inspiring growth.</span>
      <a href="#" className="text-orange-300 hover:text-white underline transition text-sm">Back to Top</a>
    </div>
  </footer>
);
