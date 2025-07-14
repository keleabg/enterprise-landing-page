import React from "react";

const team = [
  {
    name: "Emily Tran",
    title: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&auto=format",
    linkedin: "#",
  },
  {
    name: "Liam Smith",
    title: "Principal Consultant",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&auto=format",
    linkedin: "#",
  },
  {
    name: "Ava Green",
    title: "Market Analyst",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
    linkedin: "#",
  },
  {
    name: "Noah Wang",
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop&auto=format",
    linkedin: "#",
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Meet Our Team</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 justify-center">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-4 items-center bg-orange-50 rounded-xl p-8 shadow hover:shadow-lg transition">
              <img
                src={member.image}
                alt={member.name + ' headshot'}
                className="rounded-full w-28 h-28 object-cover mb-2 border-4 border-white shadow"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <span className="text-orange-600 font-medium text-sm mb-2">{member.title}</span>
                <a href={member.linkedin} className="underline text-orange-500 text-sm" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
