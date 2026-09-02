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
    <div className="relative pt-10 pb-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtitle tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="pulse-dot" />
          <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider uppercase">
            {t('hero.badge')}
          </span>
        </div>

        {/* Title & Description */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-bold text-heading tracking-tight leading-tight">
            {t('hero.title')}
            <span className="block text-cyan-400">
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
            <div className="p-2.5 rounded bg-slate-900 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-heading">{platforms.length}</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.platformsAnalyzed')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-2.5 rounded bg-slate-900 text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-heading">{evidence.totalFeatures}</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.featuresEvaluated')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-2.5 rounded bg-slate-900 text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-cyan-400">{evidence.verifiedPercentage}%</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.verifiedEvidence')}</div>
            </div>
          </div>

          <div className="glass-card p-4 flex items-center gap-4">
            <div className="p-2.5 rounded bg-slate-900 text-cyan-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold font-mono text-heading">Sep 2026</div>
              <div className="text-xs text-slate-400 font-medium">{t('hero.lastAudit')}</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
