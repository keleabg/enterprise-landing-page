import React from "react";

const caseStudies = [
  {
    company: "EnterpriseX",
    title: "Revamping Internal Processes",
    before: "https://images.unsplash.com/photo-1503389152951-9c3d045f1e3c?w=575&h=400&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=575&h=400&fit=crop&auto=format",
    summary: "Streamlined operations resulted in a 50% faster turnaround and improved team satisfaction."
  },
  {
    company: "NovaBank",
    title: "Digital Transformation",
    before: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=575&h=400&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=575&h=400&fit=crop&auto=format",
    summary: "Upgrading systems and customer portals led to a 2x growth in digital engagement."
  },
  {
    company: "GreenPath",
    title: "Sustainable Expansion",
    before: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=575&h=400&fit=crop&auto=format",
    after: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=575&h=400&fit=crop&auto=format",
    summary: "New initiatives increased eco-efficiency and lowered costs by 35%."
  }
];

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Case Studies</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {caseStudies.map((study, idx) => (
            <div key={study.company} className="bg-orange-50 p-6 rounded-xl shadow flex flex-col gap-4">
              <h3 className="font-semibold text-lg text-orange-700">{study.title} <span className="block text-gray-700 text-sm font-normal">({study.company})</span></h3>
              <div className="aspect-[28/20] grid grid-cols-2 gap-2 relative">
                <div>
                  <img src={study.before} alt="Before: " className="object-cover rounded-md w-full h-full" loading="lazy" />
                  <span className="block text-xs text-gray-600 text-center mt-2">Before</span>
                </div>
                <div>
                  <img src={study.after} alt="After: " className="object-cover rounded-md w-full h-full" loading="lazy" />
                  <span className="block text-xs text-gray-600 text-center mt-2">After</span>
                </div>
              </div>
              <p className="text-sm mt-2 text-gray-700 text-center">{study.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
