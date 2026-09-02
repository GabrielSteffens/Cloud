import React, { useState } from 'react';
import { Platform } from '../types/platform';
import { getScenarios } from '../data/scenarios';
import { useLanguage } from '../i18n/LanguageContext';
import { Compass, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface UseCaseExplorerProps {
  platforms: Platform[];
  onSelectPlatform: (platformId: string) => void;
}

export const UseCaseExplorer: React.FC<UseCaseExplorerProps> = ({ platforms, onSelectPlatform }) => {
  const { language, t } = useLanguage();
  const scenarios = getScenarios(language);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenarios[0].id);

  const currentScenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];

  const scenarioRankings = platforms.map(platform => {
    const match = platform.useCases.find(uc => uc.scenarioId === selectedScenarioId);
    return {
      platform,
      match: match || {
        scenarioId: selectedScenarioId,
        scenarioName: currentScenario.title,
        iconName: currentScenario.iconName,
        suitabilityScore: 7.0,
        suitabilityRating: 'Possible' as const,
        rationale: language === 'pt' ? 'Avaliado como capacidade padrão para este tipo de cenário.' : 'Evaluated as standard capability for this scenario type.',
        keyFeatures: language === 'pt' ? ['Gerenciamento de Nuvem Padrão'] : ['Standard Cloud Management'],
        caveats: language === 'pt' ? ['Exige otimização manual para este modelo de implantação.'] : ['Requires manual optimization for this deployment model.']
      }
    };
  }).sort((a, b) => b.match.suitabilityScore - a.match.suitabilityScore);

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">
              <Compass className="w-6 h-6 text-cyan-400" />
              {t('useCase.title')}
            </h2>
            <p className="section-subtitle">
              {t('useCase.subtitle')}
            </p>
          </div>
        </div>

        {/* Scenario Selection Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3 mb-8">
          {scenarios.map(sc => {
            const isSelected = selectedScenarioId === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setSelectedScenarioId(sc.id)}
                className={`chip p-3 rounded text-center transition-all flex flex-col items-center justify-center gap-2 border ${
                  isSelected ? 'chip-active' : ''
                }`}
              >
                <Compass className="w-4 h-4" />
                <span className="text-[11px] font-semibold leading-tight">{sc.title.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Current Scenario Card Banner */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="badge badge-cyan text-xs mb-2">{t('useCase.specification')}</span>
              <h3 className="text-xl font-bold text-heading">{currentScenario.title}</h3>
              <p className="text-xs text-slate-300 mt-1">{currentScenario.subtitle}</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mb-4 bg-slate-900 p-3.5 rounded border border-slate-800">
            {currentScenario.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-slate-400">{t('useCase.keyRequirements')}</span>
            {currentScenario.keyRequirements.map((req, idx) => (
              <span key={idx} className="badge badge-purple text-[10px]">
                <ShieldCheck className="w-3 h-3 text-purple-400" />
                {req}
              </span>
            ))}
          </div>
        </div>

        {/* Platform Recommendations Ranking */}
        <div className="flex flex-wrap justify-center gap-6">
          {scenarioRankings.map((item, idx) => (
            <div
              key={item.platform.id}
              className={`glass-card p-6 flex flex-col justify-between relative overflow-hidden border-l-4 w-full ${
                scenarioRankings.length > 1 ? 'sm:grow sm:shrink sm:basis-[300px] sm:max-w-xl' : 'max-w-3xl'
              } ${idx === 0 ? 'border-l-emerald-400' : 'border-l-transparent'}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-sm"
                      style={{ backgroundColor: item.platform.logoColor }}
                    >
                      {item.platform.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-heading">{item.platform.name}</h4>
                      <p className="text-xs text-slate-400">{item.platform.vendor}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className={`badge text-xs ${
                      item.match.suitabilityRating === 'Ideal' ? 'badge-emerald' : 'badge-cyan'
                    }`}>
                      {item.match.suitabilityRating === 'Ideal' ? (language === 'pt' ? 'Escolha Ideal' : 'Ideal Choice') : (language === 'pt' ? 'Recomendado' : 'Suitable Choice')}
                    </span>
                    <div className="text-xs font-semibold text-slate-400 mt-1">
                      Score: <strong className="font-mono text-cyan-400 text-sm font-bold">{item.match.suitabilityScore.toFixed(1)}</strong> / 10
                    </div>
                  </div>
                </div>

                {/* Rationale */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 bg-slate-900 p-3 rounded border border-slate-800">
                  {item.match.rationale}
                </p>

                {/* Key Advantages */}
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block">{t('useCase.scenarioDrivers')}</span>
                  {item.match.keyFeatures.map((kf, kIdx) => (
                    <div key={kIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{kf}</span>
                    </div>
                  ))}
                </div>

                {/* Caveat */}
                {item.match.caveats.length > 0 && (
                  <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <span>{item.match.caveats[0]}</span>
                  </div>
                )}

              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPlatform(item.platform.id)}
                className="btn btn-secondary w-full mt-6 text-xs"
              >
                {t('useCase.inspectDetails')}
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
