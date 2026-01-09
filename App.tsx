import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppPreview } from './components/AppPreview';
import { Marquee } from './components/Marquee';
import { GridSection } from './components/GridSection';
import { AdditionalSections } from './components/AdditionalSections';
import { SocialProof } from './components/SocialProof';
import { Sponsors } from './components/Sponsors';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ExploreSection } from './components/ExploreSection';
import CommandPalette from './components/CommandPalette';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { PageRevealLoader } from './components/PageRevealLoader';
import ComingSoonPage from './components/ComingSoonPage';

const AppContent: React.FC = () => {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open command palette with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
      
      // Open command palette with '/' when not in input fields
      if (e.key === '/' && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
        // Only open if we're not in an input or textarea
        if (!(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
          e.preventDefault();
          setIsCommandPaletteOpen(true);
        }
      }
      
      // Close command palette with Escape
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [loaderComplete, setLoaderComplete] = useState(false);

  return (
    <>
      <PageRevealLoader onComplete={() => setLoaderComplete(true)} />
      {loaderComplete && (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
            <Routes>
              <Route path="/" element={
                <main>
                  {/* 1. Hero Section */}
                  <Hero />
                  
                  {/* 2. Interactive Preview */}
                  {/* <div className="max-w-7xl mx-auto px-6 mb-0">
                    <AppPreview />
                  </div> */}
                  
                  {/* 3. Logo Scroll */}
                  <Marquee />

                  {/* 4. Grid Section */}
                  <GridSection />

                  {/* 5. Additional Sections (DX & Performance) */}
                  <AdditionalSections />

                  {/* 6. Sponsors & Testimonials */}
                  <SocialProof />

                  {/* 7. Sponsors Tiers */}
                  <Sponsors />

                  {/* 8. Explore Section */}
                  <ExploreSection />

                  {/* 9. Call to Action (Card Style) */}
                  <FinalCTA />
                </main>
              } />
              <Route path="/components" element={<ComingSoonPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            {/* 9. Footer with oversized watermark */}
            <Footer />
            
            {/* Command Palette */}
            <CommandPalette 
              isOpen={isCommandPaletteOpen}
              onClose={() => setIsCommandPaletteOpen(false)}
              onThemeChange={setTheme}
              currentTheme={theme}
            />
          </div>
      )}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;