import React, { useState } from 'react';
import { getPlatforms, getPlatformById } from './data/platforms';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { PlatformOverviewCards } from './components/PlatformOverviewCards';
import { CapabilityRadar } from './components/CapabilityRadar';
import { FeatureMatrix } from './components/FeatureMatrix';
import { HeadToHead } from './components/HeadToHead';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { UseCaseExplorer } from './components/UseCaseExplorer';
import { PlatformDeepDive } from './components/PlatformDeepDive';
import { Footer } from './components/Footer';

function MainContent() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);

  const platforms = getPlatforms(language);
  const selectedPlatform = selectedPlatformId ? getPlatformById(selectedPlatformId, language) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero Section */}
      <Hero platforms={platforms} onExploreClick={() => setActiveTab('matrix')} />

      {/* Dynamic Main Body Content */}
      <main className="flex-1">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <>
            <ExecutiveSummary platforms={platforms} onSelectPlatform={setSelectedPlatformId} />
            <PlatformOverviewCards platforms={platforms} onSelectPlatform={setSelectedPlatformId} />
            <CapabilityRadar platforms={platforms} />
            <UseCaseExplorer platforms={platforms} onSelectPlatform={setSelectedPlatformId} />
          </>
        )}

        {/* TAB 2: FEATURE MATRIX */}
        {activeTab === 'matrix' && (
          <FeatureMatrix platforms={platforms} />
        )}

        {/* TAB 3: HEAD-TO-HEAD COMPARISON */}
        {activeTab === 'head-to-head' && (
          <HeadToHead platforms={platforms} />
        )}

        {/* TAB 4: CAPABILITY RADAR */}
        {activeTab === 'radar' && (
          <CapabilityRadar platforms={platforms} />
        )}

        {/* TAB 5: UI NAVIGATION GALLERY */}
        {activeTab === 'gallery' && (
          <ScreenshotGallery platforms={platforms} />
        )}

        {/* TAB 6: USE CASE EXPLORER */}
        {activeTab === 'use-cases' && (
          <UseCaseExplorer platforms={platforms} onSelectPlatform={setSelectedPlatformId} />
        )}

      </main>

      {/* Platform Deep Dive Modal Drawer */}
      {selectedPlatform && (
        <PlatformDeepDive 
          platform={selectedPlatform} 
          onClose={() => setSelectedPlatformId(null)} 
        />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
