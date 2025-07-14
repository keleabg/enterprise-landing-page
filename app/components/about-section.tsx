import React from "react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white py-20 text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">About Us</h2>
        <p className="text-lg md:text-xl mb-4">Founded in 2010, Orangewave Consulting has helped hundreds of organizations drive business growth, increase efficiency, and future-proof operations. We combine expertise with a deep commitment to client success. Our diverse team offers tailored services across multiple industries.</p>
        <div className="bg-orange-50 rounded-xl p-8 mt-8 shadow-lg">
          <ul className="flex flex-col md:flex-row gap-6 justify-center items-center font-medium">
            <li>
              <strong className="block text-2xl text-orange-600">2010</strong>
              <span className="text-gray-600">Established</span>
            </li>
            <li>
              <strong className="block text-2xl text-orange-600">200+</strong>
              <span className="text-gray-600">Client Projects</span>
            </li>
            <li>
              <strong className="block text-2xl text-orange-600">30+</strong>
              <span className="text-gray-600">Expert Consultants</span>
            </li>
            <li>
              <strong className="block text-2xl text-orange-600">98%</strong>
              <span className="text-gray-600">Client Satisfaction</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
