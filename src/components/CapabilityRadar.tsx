import React, { useState } from 'react';
import { Platform, CategoryScores } from '../types/platform';
import { getCategories } from '../data/categories';
import { useLanguage } from '../i18n/LanguageContext';
import { Sparkles, BarChart2, Check } from 'lucide-react';

interface CapabilityRadarProps {
  platforms: Platform[];
}

export const CapabilityRadar: React.FC<CapabilityRadarProps> = ({ platforms }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<keyof CategoryScores>('wireless');
  const [activePlatformIds, setActivePlatformIds] = useState<string[]>(platforms.map(p => p.id));

  const categories = getCategories(language);

  const togglePlatform = (id: string) => {
    if (activePlatformIds.includes(id)) {
      if (activePlatformIds.length > 1) {
        setActivePlatformIds(activePlatformIds.filter(p => p !== id));
      }
    } else {
      setActivePlatformIds([...activePlatformIds, id]);
    }
  };

  const activePlatforms = platforms.filter(p => activePlatformIds.includes(p.id));
  const currentCategoryDef = categories.find(c => c.key === selectedCategory) || categories[0];

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">
              <Sparkles className="w-6 h-6 text-purple-400" />
              {t('radar.title')}
            </h2>
            <p className="section-subtitle">
              {t('radar.subtitle')}
            </p>
          </div>

          {/* Platform Toggle Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {platforms.map(p => {
              const isSelected = activePlatformIds.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    isSelected
                      ? 'bg-slate-800 text-white border-slate-600 shadow-sm'
                      : 'bg-slate-950/40 text-slate-500 border-slate-900 line-through'
                  }`}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full" 
                    style={{ backgroundColor: isSelected ? p.logoColor : '#475569' }} 
                  />
                  {p.name}
                  {isSelected && <Check className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Category Selection Menu */}
          <div className="lg:col-span-4 glass-card p-4 space-y-1.5">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block px-3 py-1">
              {t('radar.selectDimension')}
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-xs font-bold text-left transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-md'
                      : 'text-slate-300 hover:bg-slate-900/60 hover:text-white border border-transparent'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {Math.max(...platforms.map(p => p.scores[cat.key])).toFixed(1)} max
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Comparative Horizontal Bar Graph */}
          <div className="lg:col-span-8 glass-card p-6">
            
            {/* Category Banner */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-cyan-400" />
                  {currentCategoryDef.label}
                </h3>
                <span className="badge badge-purple text-xs font-mono">10 POINT SCALE</span>
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {currentCategoryDef.description}
              </p>
            </div>

            {/* Score Comparison Bars */}
            <div className="space-y-6">
              {activePlatforms.map((platform) => {
                const score = platform.scores[selectedCategory];
                const percentage = (score / 10) * 100;
                const explanation = platform.scoreExplanations.find(e => e.category === selectedCategory);

                return (
                  <div key={platform.id} className="space-y-2">
                    
                    {/* Platform Header */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 font-bold text-white">
                        <span 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: platform.logoColor }}
                        />
                        {platform.name}
                        <span className="text-slate-400 font-normal">({platform.vendor})</span>
                      </div>
                      <div className="font-mono font-bold text-cyan-400 text-sm">
                        {score.toFixed(1)} <span className="text-slate-500 text-xs font-normal">/ 10</span>
                      </div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                      <div 
                        className="h-full rounded-full transition-all duration-700 shadow-sm"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: platform.logoColor
                        }}
                      />
                    </div>

                    {/* Rationale explanation text */}
                    {explanation && (
                      <p className="text-[11px] text-slate-400 bg-slate-950/40 p-2.5 rounded-lg border border-slate-900">
                        <strong className="text-slate-300">{t('radar.rationale')}</strong> {explanation.rationale}
                      </p>
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
