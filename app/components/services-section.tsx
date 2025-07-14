import React from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Wrench, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <Wrench className="w-8 h-8 text-orange-600" />, 
    title: "Business Consulting",
    description: "Strategic advisory for operational efficiency and innovation."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-600" />, 
    title: "Market Analysis",
    description: "Data-driven research to inform high-stakes business decisions."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />, 
    title: "Project Management",
    description: "Expert guidance from conception to implementation."
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <Card className="flex flex-col items-center p-8 gap-4 text-center shadow hover:shadow-xl transition" key={service.title}>
              {service.icon}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
