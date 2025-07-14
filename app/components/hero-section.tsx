import React from "react";

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-600 to-orange-400 py-20 md:py-32 lg:py-44 text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4 drop-shadow-lg">Empowering Business Success<br />With Innovative Solutions</h1>
        <p className="text-lg md:text-2xl font-medium text-center max-w-2xl mb-6">Elevate your company with expert consulting, forward-thinking strategies, and measurable results. Partner with us to transform vision into reality.</p>
        <a href="#services" className="inline-block rounded-lg px-8 py-4 bg-white text-orange-600 font-semibold shadow hover:bg-orange-100 transition">Get Started</a>
      </div>
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1500&h=700&fit=crop&auto=format"
        alt="Corporate Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/70 via-orange-500/60 to-orange-400/30" aria-hidden="true" />
    </section>
  );
};
