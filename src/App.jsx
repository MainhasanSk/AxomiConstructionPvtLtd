import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import ConsultationModal from './components/ConsultationModal';
import ProjectEstimatorModal from './components/ProjectEstimatorModal';
import StickyMobileBar from './components/StickyMobileBar';

import Hero from './sections/Hero';
import TrustStrip from './sections/TrustStrip';
import About from './sections/About';
import Services from './sections/Services';
import WhyChoose from './sections/WhyChoose';
import FeaturedProject from './sections/FeaturedProject';
import ProjectShowcase from './sections/ProjectShowcase';
import ConstructionProcess from './sections/ConstructionProcess';
import VisualStory from './sections/VisualStory';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Contact from './sections/Contact';

import { companyData } from './data/companyData';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [lightboxProject, setLightboxProject] = useState(null);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleOpenEstimator = () => setIsEstimatorOpen(true);
  const handleCloseEstimator = () => setIsEstimatorOpen(false);

  const handleSelectProject = (project) => setLightboxProject(project);
  const handleCloseLightbox = () => setLightboxProject(null);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-gold-500 selection:text-navy-950 pb-16 md:pb-0">
      {/* Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* 2. Trust & Identity Strip */}
        <TrustStrip />

        {/* 3. About Axomi */}
        <About onOpenConsultation={handleOpenConsultation} />

        {/* 4. Services Section */}
        <Services onOpenConsultation={handleOpenConsultation} />

        {/* 5. Why Choose Axomi */}
        <WhyChoose onOpenConsultation={handleOpenConsultation} />

        {/* 6. Featured Project Showcase */}
        <FeaturedProject onSelectProject={handleSelectProject} />

        {/* 7. Comprehensive Real Project Showcase */}
        <ProjectShowcase onSelectProject={handleSelectProject} />

        {/* 8. Construction Process (From Vision to Reality) */}
        <ConstructionProcess onOpenConsultation={handleOpenConsultation} />

        {/* 9. Visual Campaign Story */}
        <VisualStory onOpenConsultation={handleOpenConsultation} />

        {/* 10. Meet Our Team */}
        <Team onOpenConsultation={handleOpenConsultation} />

        {/* 11. Testimonials & Quality Assurances */}
        <Testimonials onOpenConsultation={handleOpenConsultation} />

        {/* 12. Final Call To Action */}
        <FinalCTA onOpenConsultation={handleOpenConsultation} />

        {/* 13. Contact Section with Direct Numbers */}
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Sticky Mobile Action Bar (Call, WhatsApp, Enquire) */}
      <StickyMobileBar onOpenConsultation={handleOpenConsultation} />

      {/* Modals & Overlays */}
      <LightboxModal
        project={lightboxProject}
        projects={companyData.projects}
        onClose={handleCloseLightbox}
        onSelectProject={handleSelectProject}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={handleCloseEstimator}
      />
    </div>
  );
}
