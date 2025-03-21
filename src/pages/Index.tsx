import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TechnologySection from '@/components/sections/TechnologySection';
import ProcessSection from '@/components/sections/ProcessSection';
import SurfacesSection from '@/components/sections/SurfacesSection';
import FacilitySection from '@/components/sections/FacilitySection';
import QualitySection from '@/components/sections/QualitySection';
import ContactSection from '@/components/sections/ContactSection';

const Index: React.FC = () => {
  // Add scroll reveal for all sections
  useEffect(() => {
    const handleScrollAnimation = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ProcessSection />
      <SurfacesSection />
      <FacilitySection />
      <QualitySection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
