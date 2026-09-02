import React, { useState } from 'react';
import { getPlatforms, getPlatformById } from './data/platforms';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { TopicDraftsProvider, useTopicDraftsContext } from './context/TopicDraftsContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PlatformOverviewCards } from './components/PlatformOverviewCards';
import { FeatureMatrix } from './components/FeatureMatrix';
import { ScreenshotGallery } from './components/ScreenshotGallery';
import { TopicComparison } from './components/TopicComparison';
import { VendorTopicsHub } from './components/VendorTopicsHub';
import { TopicEntryEditor } from './components/TopicEntryEditor';
import { NewTopicModal } from './components/NewTopicModal';
import { ExportDataModal } from './components/ExportDataModal';
import { PlatformDeepDive } from './components/PlatformDeepDive';
import { Footer } from './components/Footer';

function MainContent() {
  const { language } = useLanguage();
  const { addTopic, getMergedTopics, exportData } = useTopicDraftsContext();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedPlatformId, setSelectedPlatformId] = useState<string | null>(null);
  const [vendorHubPlatformId, setVendorHubPlatformId] = useState<string | null>(null);
  const [topicEditTarget, setTopicEditTarget] = useState<{ topicId: string; platformId: string } | null>(null);
  const [showNewTopicModal, setShowNewTopicModal] = useState<boolean>(false);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);

  const platforms = getPlatforms(language);
  const topics = getMergedTopics(language);
  const selectedPlatform = selectedPlatformId ? getPlatformById(selectedPlatformId, language) : null;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-[#00A335] selection:text-white">
      
      {/* Navigation Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Main Body Content */}
      <main className="flex-1">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <>
            <Hero platforms={platforms} onExploreClick={() => setActiveTab('matrix')} />
            <PlatformOverviewCards platforms={platforms} onSelectPlatform={setSelectedPlatformId} />
          </>
        )}

        {/* TAB 2: FEATURE MATRIX */}
        {activeTab === 'matrix' && (
          <FeatureMatrix platforms={platforms} />
        )}

        {/* TAB 3: UI NAVIGATION GALLERY */}
        {activeTab === 'gallery' && (
          <ScreenshotGallery platforms={platforms} />
        )}

        {/* TAB 4: TOPIC COMPARISON */}
        {activeTab === 'topics' && (
          topicEditTarget ? (
            <TopicEntryEditor
              topicId={topicEditTarget.topicId}
              platformId={topicEditTarget.platformId}
              onBack={() => setTopicEditTarget(null)}
            />
          ) : vendorHubPlatformId ? (
            <VendorTopicsHub
              platformId={vendorHubPlatformId}
              topics={topics}
              onBack={() => setVendorHubPlatformId(null)}
              onEditTopic={(topicId) => setTopicEditTarget({ topicId, platformId: vendorHubPlatformId })}
            />
          ) : (
            <TopicComparison
              topics={topics}
              onOpenVendorHub={(platformId) => setTopicEditTarget({ topicId: 'captive-portal', platformId })}
              onSelectTopicEntry={(topicId, platformId) => setTopicEditTarget({ topicId, platformId })}
              onAddTopic={() => setShowNewTopicModal(true)}
              onExport={() => setShowExportModal(true)}
            />
          )
        )}

      </main>

      {/* Platform Deep Dive Modal Drawer */}
      {selectedPlatform && (
        <PlatformDeepDive
          platform={selectedPlatform}
          onClose={() => setSelectedPlatformId(null)}
        />
      )}

      {/* New Macro Topic Modal */}
      {showNewTopicModal && (
        <NewTopicModal
          onClose={() => setShowNewTopicModal(false)}
          onCreate={(titlePt, titleEn, descriptionPt, descriptionEn, iconName) => {
            addTopic({ pt: titlePt, en: titleEn }, { pt: descriptionPt, en: descriptionEn }, iconName);
            setShowNewTopicModal(false);
          }}
        />
      )}

      {/* Export Draft Data Modal */}
      {showExportModal && (
        <ExportDataModal data={exportData()} onClose={() => setShowExportModal(false)} />
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

import { LightboxProvider } from './context/LightboxContext';

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TopicDraftsProvider>
          <LightboxProvider>
            <MainContent />
          </LightboxProvider>
        </TopicDraftsProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
