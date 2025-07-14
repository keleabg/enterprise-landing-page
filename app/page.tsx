"use client";
import React from "react";
import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { TeamSection } from "./components/team-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CompanyTimeline } from "./components/company-timeline";
import { ServiceComparison } from "./components/service-comparison";
import { CaseStudiesSection } from "./components/case-studies-section";
import { BlogSection } from "./components/blog-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CompanyTimeline />
      <ServicesSection />
      <ServiceComparison />
      <TeamSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
