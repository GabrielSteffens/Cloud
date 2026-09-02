import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldAlert, Server, BarChart3, Layers, Sparkles, Image, Compass, Globe } from 'lucide-react';

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
    { id: 'use-cases', label: t('nav.useCases'), icon: Compass }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Branding */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('overview')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Server className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-white tracking-tight">{t('header.title')}</span>
                <span className="badge badge-cyan text-[10px]">{t('header.hub')}</span>
              </div>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">{t('header.subtitle')}</p>
            </div>
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Language Toggle & Security Badge */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector PT / EN */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                  language === 'pt'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Mudar para Português"
              >
                🇧🇷 PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-cyan-500 text-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                🇺🇸 EN
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>{t('header.zeroCredentials')}</span>
            </div>

          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto pb-2 pt-1 no-scrollbar border-t border-slate-900">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
