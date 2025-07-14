import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    message: "Orangewave Consulting transformed our strategy. Their insights led to a 30% increase in revenue within six months.",
    name: "Julia Roberts",
    role: "COO, Suntech Ltd."
  },
  {
    message: "Professional, responsive, and incredibly knowledgeable. Highly recommend their project management team!",
    name: "Carlos Martinez",
    role: "Operations Lead, BriteSoft Solutions"
  },
  {
    message: "Their unique approach set us ahead of competitors. The team is sharp and results-driven.",
    name: "Sofia Lee",
    role: "Founder, LeapStart Inc."
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Client Testimonials</h2>
        <div className="flex flex-col gap-10">
          {testimonials.map((item, idx) => (
            <div className="relative bg-white rounded-lg p-8 shadow flex flex-col items-center" key={item.name}>
              <Quote className="w-8 h-8 text-orange-400 absolute top-4 left-4 opacity-40" aria-hidden="true" />
              <p className="text-lg text-center mb-4 font-medium text-gray-700">“{item.message}”</p>
              <div className="text-right mt-4">
                <span className="font-bold text-orange-600">{item.name}</span> <br />
                <span className="text-gray-600 text-sm">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
