import React from "react";

const comparison = [
  {
    feature: "Dedicated Project Manager",
    consulting: true,
    analytics: false,
    digital: true
  },
  {
    feature: "24/7 Support",
    consulting: true,
    analytics: true,
    digital: false
  },
  {
    feature: "Tailored Strategy",
    consulting: true,
    analytics: true,
    digital: true
  },
  {
    feature: "Advanced Reporting",
    consulting: false,
    analytics: true,
    digital: true
  },
];

export const ServiceComparison: React.FC = () => {
  return (
    <section id="comparison" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Service Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-orange-600 text-white text-lg">
                <th className="px-4 py-3 text-left">Feature</th>
                <th className="px-4 py-3">Consulting</th>
                <th className="px-4 py-3">Analytics</th>
                <th className="px-4 py-3">Digital</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-orange-50' : ''}>
                  <td className="px-4 py-3 font-medium text-gray-700">{row.feature}</td>
                  <td className="text-center px-4 py-3">{row.consulting ? '✔️' : '—'}</td>
                  <td className="text-center px-4 py-3">{row.analytics ? '✔️' : '—'}</td>
                  <td className="text-center px-4 py-3">{row.digital ? '✔️' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
