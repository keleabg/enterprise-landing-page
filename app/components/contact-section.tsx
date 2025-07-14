import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-orange-800 py-20 text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Contact Us</h2>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              123 Orangewave Ave, New York, NY 10021
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-6 h-6" />
              +1 (234) 567-8910
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-6 h-6" />
              <a href="mailto:info@orangewave.com" className="underline hover:text-orange-200">info@orangewave.com</a>
            </div>
          </div>
          <form className="flex-1 flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg text-gray-900" onSubmit={e => e.preventDefault()}>
            <label className="text-sm font-semibold">Name
              <input className="block w-full mt-2 mb-4 px-3 py-2 border rounded transition focus:outline-none focus:ring-orange-400" type="text" required />
            </label>
            <label className="text-sm font-semibold">Email
              <input className="block w-full mt-2 mb-4 px-3 py-2 border rounded transition focus:outline-none focus:ring-orange-400" type="email" required />
            </label>
            <label className="text-sm font-semibold">Message
              <textarea className="block w-full mt-2 mb-4 px-3 py-2 border rounded transition focus:outline-none focus:ring-orange-400" required rows={4}/>
            </label>
            <button
              type="submit"
              className="bg-orange-700 text-white rounded px-6 py-3 font-semibold hover:bg-orange-600 transition shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
