import React from 'react';
import { Platform } from '../types/platform';
import { getDynamicRankings } from '../utils/scoring';
import { useLanguage } from '../i18n/LanguageContext';
import { Trophy, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ExecutiveSummaryProps {
  platforms: Platform[];
  onSelectPlatform: (platformId: string) => void;
}

export const ExecutiveSummary: React.FC<ExecutiveSummaryProps> = ({ platforms, onSelectPlatform }) => {
  const { language, t } = useLanguage();
  const rankings = getDynamicRankings(platforms, language);

  return (
    <section className="py-10 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">
              <Trophy className="w-6 h-6 text-amber-400" />
              {t('summary.title')}
            </h2>
            <p className="section-subtitle">
              {t('summary.subtitle')}
            </p>
          </div>
        </div>

        {/* Dynamic Rankings Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankings.map((rank, idx) => (
            <div 
              key={idx} 
              className="glass-card glass-card-interactive p-6 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Card top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ backgroundColor: rank.platform.logoColor }}
              />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="badge badge-amber text-xs">
                    <Award className="w-3.5 h-3.5" />
                    {rank.badge}
                  </span>
                  <span className="font-mono text-sm font-bold text-slate-400">
                    Score: <strong className="text-emerald-400 font-extrabold">{rank.score.toFixed(1)}</strong> / 10
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {rank.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-4">{rank.subtitle}</p>

                {/* Winner Platform Box */}
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-md"
                      style={{ backgroundColor: rank.platform.logoColor }}
                    >
                      {rank.platform.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{rank.platform.name}</div>
                      <div className="text-xs text-slate-400">{rank.platform.vendor}</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Rationale */}
                <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-lg border border-slate-800/50">
                  {rank.reason}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlatform(rank.platform.id)}
                className="mt-5 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
              >
                {t('summary.inspectDeepDive')}
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
