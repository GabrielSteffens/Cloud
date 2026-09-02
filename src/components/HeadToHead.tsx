import React, { useState } from 'react';
import { Platform } from '../types/platform';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowRightLeft, Check } from 'lucide-react';

interface HeadToHeadProps {
  platforms: Platform[];
}

export const HeadToHead: React.FC<HeadToHeadProps> = ({ platforms }) => {
  const { t } = useLanguage();
  const [selectedIds, setSelectedIds] = useState<string[]>([platforms[0]?.id || '']);

  const togglePlatform = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter(pId => pId !== id));
      }
    } else {
      if (selectedIds.length < 4) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const selectedPlatforms = platforms.filter(p => selectedIds.includes(p.id));

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">
              <ArrowRightLeft className="w-6 h-6 text-cyan-400" />
              {t('h2h.title')}
            </h2>
            <p className="section-subtitle">
              {t('h2h.subtitle')}
            </p>
          </div>

          {/* Platform Selector Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2">{t('h2h.compareLabel')}</span>
            {platforms.map(p => {
              const isSelected = selectedIds.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => togglePlatform(p.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-sm'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.logoColor }} />
                  {p.name}
                  {isSelected ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <span className="text-slate-600">+</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Head-to-Head Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedPlatforms.map(platform => (
            <div 
              key={platform.id}
              className="glass-card p-6 flex flex-col justify-between relative overflow-hidden border-t-4"
              style={{ borderTopColor: platform.logoColor }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                    style={{ backgroundColor: platform.logoColor }}
                  >
                    {platform.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">{platform.name}</h3>
                    <p className="text-xs text-slate-400">{platform.vendor}</p>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-slate-400">{t('h2h.overallRating')}</span>
                  <span className="font-mono font-black text-emerald-400 text-lg">
                    {platform.overallScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 10</span>
                  </span>
                </div>

                {/* Comparison Attributes */}
                <div className="space-y-4 text-xs">
                  
                  {/* Architecture */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                    <span className="font-mono font-bold text-cyan-400 block mb-1 uppercase">{t('h2h.deploymentModel')}</span>
                    <p className="text-slate-300 leading-relaxed">{platform.architecture.deploymentModel}</p>
                  </div>

                  {/* Multi-Tenancy */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                    <span className="font-mono font-bold text-purple-400 block mb-1 uppercase">{t('h2h.multiTenancy')}</span>
                    <p className="text-slate-300 leading-relaxed">{platform.architecture.multiTenancy}</p>
                  </div>

                  {/* Adoption Workflow */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                    <span className="font-mono font-bold text-emerald-400 block mb-1 uppercase">{t('h2h.adoptionWorkflow')}</span>
                    <p className="text-slate-300 leading-relaxed">{platform.architecture.adoptionWorkflow}</p>
                  </div>

                  {/* API Support */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                    <span className="font-mono font-bold text-amber-400 block mb-1 uppercase">{t('h2h.apiSupport')}</span>
                    <p className="text-slate-300 leading-relaxed">{platform.architecture.apiSupport}</p>
                  </div>

                  {/* Licensing Model */}
                  <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-900">
                    <span className="font-mono font-bold text-pink-400 block mb-1 uppercase">{t('h2h.licensingStructure')}</span>
                    <p className="text-slate-300 leading-relaxed">{platform.licensing.pricingType}</p>
                  </div>

                </div>

              </div>

              {/* Target Verdict */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-300 bg-slate-900/50 p-3 rounded-lg italic">
                "{platform.verdict}"
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
