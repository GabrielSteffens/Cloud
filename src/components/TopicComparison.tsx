import React, { useState } from 'react';
import { TopicDefinition } from '../types/platform';
import { useLanguage } from '../i18n/LanguageContext';
import { Columns3, DoorOpen, MapPin, CheckCircle2, Clock, ImageOff, Plus, Download, Pencil } from 'lucide-react';

const TOPIC_ICONS: Record<string, React.FC<{ className?: string }>> = {
  DoorOpen
};

interface TopicComparisonProps {
  topics: TopicDefinition[];
  onOpenVendorHub: (platformId: string) => void;
  onAddTopic: () => void;
  onExport: () => void;
}

export const TopicComparison: React.FC<TopicComparisonProps> = ({ topics, onOpenVendorHub, onAddTopic, onExport }) => {
  const { t } = useLanguage();
  const [activeTopicId, setActiveTopicId] = useState<string>(topics[0]?.id ?? '');

  const activeTopic = topics.find(topic => topic.id === activeTopicId) ?? topics[0];

  if (!activeTopic) {
    return null;
  }

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

        {/* Topic Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-medium text-slate-400">{t('topics.selectTopic')}</span>
          {topics.map(topic => (
            <button
              key={topic.id}
              onClick={() => setActiveTopicId(topic.id)}
              className={`chip px-3 py-1.5 rounded text-xs font-medium border ${
                activeTopic.id === topic.id ? 'chip-active' : ''
              }`}
            >
              {topic.title}
            </button>
          ))}
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
          {activeTopic.platforms.map(entry => (
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
                  onClick={() => onOpenVendorHub(entry.platformId)}
                  className="min-w-0 text-left group/platform"
                >
                  <div className="font-bold text-heading text-sm truncate group-hover/platform:text-cyan-400 transition-colors">{entry.platformName}</div>
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

                  {/* Screenshot or pending placeholder */}
                  {entry.screenshotUrl ? (
                    <img
                      src={entry.screenshotUrl}
                      alt={entry.platformName}
                      className="w-full aspect-video object-cover rounded border border-slate-800"
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
                      <div className="space-y-1">
                        {entry.configOptions.map((opt, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{opt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 flex-1 flex flex-col items-center justify-center text-center gap-2 min-h-[200px]">
                  <Clock className="w-6 h-6 text-slate-500" />
                  <p className="text-[12px] text-slate-500 leading-relaxed">{entry.unavailableNote}</p>
                </div>
              )}

            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-500 mt-6 text-center">{t('topics.moreTopicsSoon')}</p>

      </div>
    </section>
  );
};
