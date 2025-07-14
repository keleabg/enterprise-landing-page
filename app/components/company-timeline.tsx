import React from "react";
import { CircleDot, CalendarDays, TrendingUp, Users, Award } from "lucide-react";

const timeline = [
  { year: "2010", label: "Company Founded", icon: <CircleDot className="w-6 h-6 text-orange-700" /> },
  { year: "2013", label: "First Fortune 500 Client", icon: <Award className="w-6 h-6 text-orange-700" /> },
  { year: "2016", label: "Expanded Globally", icon: <Users className="w-6 h-6 text-orange-700" /> },
  { year: "2019", label: "Launched New Digital Services", icon: <TrendingUp className="w-6 h-6 text-orange-700" /> },
  { year: "2023", label: "Ranked #1 in Client Satisfaction", icon: <CalendarDays className="w-6 h-6 text-orange-700" /> },
];

export const CompanyTimeline: React.FC = () => {
  return (
    <section id="timeline" className="bg-white pt-10 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Journey</h2>
        <ol className="relative border-s-4 border-orange-100 pl-4 md:pl-10 flex flex-col gap-8 max-w-3xl mx-auto">
          {timeline.map((item, idx) => (
            <li key={item.year} className="flex items-start gap-6 group">
              <span className="flex-shrink-0 bg-white rounded-full border-2 border-orange-200 p-2 shadow group-hover:shadow-lg transition">{item.icon}</span>
              <div>
                <div className="text-xl font-bold text-orange-700 mb-1">{item.year}</div>
                <div className="text-gray-700">{item.label}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
