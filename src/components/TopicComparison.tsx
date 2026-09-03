import React, { useEffect, useRef, useState } from 'react';
import { TopicDefinition } from '../types/platform';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Columns3, DoorOpen, MapPin, CheckCircle2, Clock, ImageOff, Plus, Download, Pencil, ChevronDown, Eye, ExternalLink, AlertTriangle,
  UserCog, Boxes, Wifi, Router, Network, Activity, Bell, RefreshCw, Plug, Wallet
} from 'lucide-react';

const TOPIC_ICONS: Record<string, React.FC<{ className?: string }>> = {
  DoorOpen, UserCog, Boxes, Wifi, Router, Network, Activity, Bell, RefreshCw, Plug, Wallet
};

interface TopicComparisonProps {
  topics: TopicDefinition[];
  onOpenVendorHub: (platformId: string) => void;
  onSelectTopicEntry?: (topicId: string, platformId: string) => void;
  onAddTopic: () => void;
  onExport: () => void;
}

export const TopicComparison: React.FC<TopicComparisonProps> = ({ topics, onOpenVendorHub, onSelectTopicEntry, onAddTopic, onExport }) => {
  const { t } = useLanguage();
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0]?.id ?? '');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [entryViewMode, setEntryViewMode] = useState<Record<string, 'mobile' | 'desktop'>>({});

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeTopic = topics.find(topic => topic.id === activeTopicId) ?? topics[0];

  if (!activeTopic) {
    return null;
  }

  const handleCardClick = (platformId: string) => {
    if (onSelectTopicEntry) {
      onSelectTopicEntry(activeTopic.id, platformId);
    } else {
      onOpenVendorHub(platformId);
    }
  };

  const TopicIcon = TOPIC_ICONS[activeTopic.iconName] || Columns3;

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="section-title">
              <Columns3 className="w-6 h-6 text-cyan-400" />
              {t('topics.title')}
            </h2>
            <p className="section-subtitle">
              {t('topics.subtitle')}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={onExport} className="btn btn-secondary text-xs">
              <Download className="w-3.5 h-3.5" />
              {t('topics.export')}
            </button>
            <button onClick={onAddTopic} className="btn btn-primary text-xs">
              <Plus className="w-3.5 h-3.5" />
              {t('topics.addTopic')}
            </button>
          </div>
        </div>

        {/* Topic Selector Dropdown */}
        <div className="mb-8">
          <span className="text-xs font-medium text-slate-400 block mb-2">{t('topics.selectTopic')}</span>
          <div className="relative w-full md:w-[440px]" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(open => !open)}
              className="chip w-full flex items-center justify-between gap-2 px-4 py-2.5 rounded text-sm font-semibold border"
            >
              <span className="flex items-center gap-2.5 min-w-0">
                <TopicIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate">{activeTopic.title}</span>
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-20 top-full left-0 mt-1.5 w-full glass-card border border-slate-800 rounded-md overflow-hidden shadow-lg max-h-80 overflow-y-auto">
                {topics.map(topic => {
                  const Icon = TOPIC_ICONS[topic.iconName] || Columns3;
                  const isActive = topic.id === activeTopic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => { setActiveTopicId(topic.id); setIsDropdownOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left text-xs font-medium leading-snug transition-colors ${
                        isActive ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="flex-1">{topic.title}</span>
                      {isActive && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Active Topic Intro */}
        <div className="glass-card p-5 mb-8 flex items-start gap-3">
          <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
            <TopicIcon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              {t('topics.comparing')} {activeTopic.title}
            </div>
            <p className="text-sm text-heading leading-relaxed">{activeTopic.description}</p>
          </div>
        </div>

        <p className="text-[11px] text-slate-500 mb-4 flex items-center gap-1.5">
          <Pencil className="w-3 h-3 shrink-0" />
          {t('topics.clickToEdit')}
        </p>

        {/* Platform Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTopic.platforms.map(entry => {
            const currentViewMode = entryViewMode[entry.platformId] || 'mobile';
            const activeShotUrl = (entry.screenshots
              ? (currentViewMode === 'desktop' ? entry.screenshots.desktop : entry.screenshots.mobile)
              : undefined) || entry.screenshotUrl;

            return (
              <div key={entry.platformId} className="glass-card overflow-hidden flex flex-col">

                {/* Platform Header */}
                <div className="p-4 border-b border-slate-800 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded flex items-center justify-center font-bold text-white text-sm shrink-0"
                    style={{ backgroundColor: entry.logoColor }}
                  >
                    {entry.platformName.charAt(0)}
                  </div>
                  <button
                    onClick={() => handleCardClick(entry.platformId)}
                    className="min-w-0 text-left group/platform flex-1"
                  >
                    <div className="font-bold text-heading text-sm truncate group-hover/platform:text-cyan-400 transition-colors flex items-center gap-1.5">
                      {entry.platformName}
                      <ExternalLink className="w-3 h-3 text-slate-500 group-hover/platform:text-cyan-400 transition-colors" />
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">{entry.vendor}</div>
                  </button>
                  {entry.available ? (
                    <span className="badge badge-emerald text-[10px] ml-auto shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {t('badge.verifiedUI')}
                    </span>
                  ) : (
                    <span className="badge badge-dim text-[10px] ml-auto shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      {t('topics.comingSoon')}
                    </span>
                  )}
                </div>

                {entry.available ? (
                  <div className="p-4 flex flex-col gap-3 flex-1">

                    {/* Screenshot view selector if multiple views exist */}
                    {entry.screenshots?.mobile && entry.screenshots?.desktop && (
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">
                          {t('topics.previewMode')} ({currentViewMode === 'mobile' ? 'Mobile' : 'Desktop'})
                        </span>
                        <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded border border-slate-800">
                          <button
                            type="button"
                            onClick={() => setEntryViewMode(prev => ({ ...prev, [entry.platformId]: 'mobile' }))}
                            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                              currentViewMode === 'mobile'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            📱 Mobile
                          </button>
                          <button
                            type="button"
                            onClick={() => setEntryViewMode(prev => ({ ...prev, [entry.platformId]: 'desktop' }))}
                            className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                              currentViewMode === 'desktop'
                                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            💻 Desktop
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Screenshot or pending placeholder */}
                    {activeShotUrl ? (
                      <img
                        src={activeShotUrl}
                        alt={`${entry.platformName} ${currentViewMode}`}
                        className="w-full aspect-video object-cover rounded border border-slate-800 cursor-pointer hover:opacity-95 transition-opacity"
                        onClick={() => handleCardClick(entry.platformId)}
                      />
                    ) : (
                      <div className="w-full aspect-video rounded border border-dashed border-slate-700 bg-slate-900 flex flex-col items-center justify-center gap-1.5 text-center px-3">
                        <ImageOff className="w-5 h-5 text-slate-500" />
                        <span className="text-[11px] font-semibold text-slate-400">{t('topics.screenshotPending')}</span>
                        <span className="text-[10px] text-slate-500 leading-snug">{t('topics.screenshotPendingNote')}</span>
                      </div>
                    )}

                    {entry.navigationPath && (
                      <div className="nav-path text-[11px] truncate" title={entry.navigationPath}>
                        <MapPin className="w-3 h-3 shrink-0 inline -mt-0.5 mr-1" />
                        {entry.navigationPath}
                      </div>
                    )}

                    {entry.summary && (
                      <p className="text-[12px] text-slate-400 leading-relaxed">{entry.summary}</p>
                    )}

                    {entry.configOptions && entry.configOptions.length > 0 && (
                      <div>
                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">
                          {t('topics.configOptions')}
                        </span>
                        <div className="space-y-1.5">
                          {entry.configOptions.map((opt, idx) => {
                            if (opt === '---') {
                              return <hr key={idx} className="my-3 border-slate-800" />;
                            }
                            if (opt.startsWith('📌')) {
                              return (
                                <div key={idx} className="text-[11px] font-bold text-cyan-400 mt-3 mb-1 flex items-center gap-1.5">
                                  <span>{opt}</span>
                                </div>
                              );
                            }
                            if (opt.startsWith('⚠️')) {
                              return (
                                <div key={idx} className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-medium my-2 flex items-start gap-2 shadow-sm">
                                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                                  <span className="leading-snug">{opt.replace(/^⚠️\s*/, '')}</span>
                                </div>
                              );
                            }
                            if (opt.startsWith('•')) {
                              return (
                                <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 pl-2 leading-snug">
                                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/70 shrink-0 mt-1.5" />
                                  <span>{opt.replace(/^•\s*/, '')}</span>
                                </div>
                              );
                            }
                            return (
                              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300 leading-snug">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleCardClick(entry.platformId)}
                      className="w-full mt-2 py-2 px-3 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all group/btn shadow-sm"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                      {t('topics.viewDetailedScreen')} ({entry.platformName})
                    </button>
                  </div>
                ) : (
                  <div className="p-4 flex-1 flex flex-col items-center justify-center text-center gap-2 min-h-[200px]">
                    <Clock className="w-6 h-6 text-slate-500" />
                    <p className="text-[12px] text-slate-500 leading-relaxed">{entry.unavailableNote}</p>
                  </div>
                )}

            </div>
          );
        })}
        </div>

        <p className="text-[11px] text-slate-500 mt-6 text-center">{t('topics.moreTopicsSoon')}</p>

      </div>
    </section>
  );
};
