import React from 'react';
import { Platform } from '../types/platform';
import { getEvidenceSummary } from '../utils/scoring';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, Cpu, Layers, Calendar } from 'lucide-react';

interface HeroProps {
  platforms: Platform[];
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ platforms, onExploreClick }) => {
  const { t } = useLanguage();
  const evidence = getEvidenceSummary(platforms);

  return (
    <div className="relative overflow-hidden pt-8 pb-12 border-b border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtitle tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="pulse-dot" />
          <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
            {t('hero.badge')}
          </span>
        </div>

        {/* Title & Description */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400">
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {t('hero.description')}
          </p>
        </div>

        {/* Evaluation Metrics Ribbon */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black font-mono text-white">{platforms.length}</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.platformsAnalyzed')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black font-mono text-white">{evidence.totalFeatures}</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.featuresEvaluated')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black font-mono text-emerald-400">{evidence.verifiedPercentage}%</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.verifiedEvidence')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold font-mono text-white">Sep 2026</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.lastAudit')}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
