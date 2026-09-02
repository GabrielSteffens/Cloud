import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Server, BarChart3, Layers, Sparkles, Image, Compass, Columns3 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'overview', label: t('nav.overview'), icon: Server },
    { id: 'matrix', label: t('nav.matrix'), icon: BarChart3 },
    { id: 'head-to-head', label: t('nav.headToHead'), icon: Layers },
    { id: 'radar', label: t('nav.radar'), icon: Sparkles },
    { id: 'gallery', label: t('nav.gallery'), icon: Image },
    { id: 'use-cases', label: t('nav.useCases'), icon: Compass },
    { id: 'topics', label: t('nav.topics'), icon: Columns3 }
  ];

  return (
    <header className="navbar sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo Branding */}
          <div className="flex items-center gap-2.5 cursor-pointer shrink-0" onClick={() => setActiveTab('overview')}>
            <div className="w-8 h-8 rounded border border-[rgba(255,255,255,0.35)] flex items-center justify-center shrink-0">
              <Server className="w-4 h-4 text-white" />
            </div>
            <span className="navbar-brand font-bold text-base tracking-tight whitespace-nowrap">{t('header.title')}</span>
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center gap-4 min-w-0 overflow-x-auto navbar-nav-scroll h-full pl-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`navbar-link shrink-0 ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-0.5 bg-[rgba(255,255,255,0.12)] p-0.5 rounded shrink-0">
              <button
                onClick={() => setLanguage('pt')}
                className={`navbar-toggle ${language === 'pt' ? 'active' : ''}`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`navbar-toggle ${language === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
            </div>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center gap-4 overflow-x-auto pb-2.5 pt-1 no-scrollbar border-t border-[rgba(255,255,255,0.15)]">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`navbar-link shrink-0 whitespace-nowrap ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
