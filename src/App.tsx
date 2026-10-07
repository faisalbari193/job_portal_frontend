/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import HowItWorks from './components/HowItWorks';
import TalentCTA from './components/TalentCTA';
import CategorySection from './components/CategorySection';
import JobSection from './components/JobSection';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import ActionModal from './components/ActionModal';

export default function App() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: string | null; data: any }>({
    isOpen: false,
    type: null,
    data: null,
  });
  const [searchFilter, setSearchFilter] = useState('');

  const openModal = (type: string, data: any = null) => {
    setModalState({ isOpen: true, type, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: null, data: null });
  };

  const handleHeroSearch = ({ keyword, location }: { keyword: string; location: string }) => {
    const combined = [keyword, location].filter(Boolean).join(' ');
    setSearchFilter(combined);
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryTitle: string) => {
    if (categoryTitle === 'all') {
      setSearchFilter('');
    } else {
      setSearchFilter(categoryTitle.replace(' Design', ''));
    }
    const jobsElement = document.getElementById('jobs');
    if (jobsElement) {
      jobsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080827] text-white flex flex-col font-sans selection:bg-[#6338F5] selection:text-white relative overflow-x-hidden">
      
      {/* Global Ambient Glow Lights */}
      <div className="ambient-glow-left pointer-events-none" />
      <div className="ambient-glow-right pointer-events-none" />

      {/* 1. Navigation Bar */}
      <Navbar onOpenAuthModal={(type: string) => openModal(type || 'login')} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full relative">
        
        {/* 2. Hero Section */}
        <Hero onSearchSubmit={handleHeroSearch} />

        {/* 3. Trusted Company Logos Strip */}
        <TrustedCompanies />

        {/* 4. Follow Easy 4 Steps */}
        <HowItWorks />

        {/* 5. Talent / Registration CTA */}
        <TalentCTA onJoinClick={() => openModal('signup')} />

        {/* 6. Job Category Section */}
        <CategorySection onSelectCategory={handleSelectCategory} />

        {/* 7. New Job Offer Listings */}
        <JobSection
          filterKeyword={searchFilter}
          onPostJobClick={() => openModal('post-job')}
          onApplyJobClick={(job: any) => openModal('apply', job)}
        />

        {/* 8. Testimonials Section */}
        <Testimonials />

        {/* 9. Final CTA Banner */}
        <FinalCTA onClick={() => openModal('signup')} />

      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Theme / Support & Scroll-to-top widgets */}
      <FloatingWidgets onSupportClick={() => openModal('support')} />

      {/* Interactive Action Modal */}
      {modalState.isOpen && (
        <ActionModal
          type={modalState.type}
          data={modalState.data}
          onClose={closeModal}
        />
      )}

    </div>
  );
}
