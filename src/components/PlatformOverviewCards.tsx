import React from 'react';
import { Platform } from '../types/platform';
import { useLanguage } from '../i18n/LanguageContext';
import { Server, ThumbsUp, AlertTriangle, ExternalLink, ChevronRight, Cpu } from 'lucide-react';

interface PlatformOverviewCardsProps {
  platforms: Platform[];
  onSelectPlatform: (platformId: string) => void;
}

export const PlatformOverviewCards: React.FC<PlatformOverviewCardsProps> = ({ platforms, onSelectPlatform }) => {
  const { t } = useLanguage();

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">
              <Server className="w-6 h-6 text-cyan-400" />
              {t('overview.title')}
            </h2>
            <p className="section-subtitle">
              {t('overview.subtitle')}
            </p>
          </div>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div 
              key={platform.id}
              className="glass-card glass-card-interactive p-6 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Header color accent */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5" 
                style={{ backgroundColor: platform.logoColor }}
              />

              <div>
                {/* Platform Badge & Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-white text-lg shadow-lg"
                      style={{ backgroundColor: platform.logoColor }}
                    >
                      {platform.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400">{platform.vendor}</p>
                    </div>
                  </div>

                  {/* Overall Score Badge */}
                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-mono uppercase">{t('overview.overallScore')}</div>
                    <div className="text-2xl font-black font-mono text-emerald-400">
                      {platform.overallScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 10</span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-cyan-300 font-mono bg-cyan-950/30 p-2.5 rounded-lg border border-cyan-500/20 mb-4">
                  "{platform.tagline}"
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {platform.summary}
                </p>

                {/* Ecosystem Tags */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">{t('overview.supportedEcosystem')}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.ecosystem.map((device, dIdx) => (
                      <span key={dIdx} className="badge badge-dim text-[10px]">
                        <Cpu className="w-3 h-3 text-cyan-400" />
                        {device}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Strengths & Weaknesses Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {/* Strengths */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-2">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {t('overview.keyStrengths')}
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      {platform.strengths.slice(0, 2).map((st, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span><strong>{st.title}:</strong> {st.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Weaknesses */}
                  <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      {t('overview.keyWeaknesses')}
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-slate-300">
                      {platform.weaknesses.slice(0, 2).map((wk, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-amber-400 font-bold">•</span>
                          <span><strong>{wk.title}:</strong> {wk.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPlatform(platform.id)}
                  className="flex-1 btn btn-primary text-xs"
                >
                  {t('overview.inspectGallery')}
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
                  title="Link Oficial da Nuvem"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
