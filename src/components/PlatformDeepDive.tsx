import React, { useState } from 'react';
import { Platform } from '../types/platform';
import { EvidenceBadge, SupportStatusBadge } from './EvidenceBadge';
import { useLanguage } from '../i18n/LanguageContext';
import { translateFeatureCategory } from '../i18n/featureCategoryLabels';
import { getCategories } from '../data/categories';
import { ThumbsUp, AlertTriangle, Cpu, ShieldCheck, X } from 'lucide-react';

interface PlatformDeepDiveProps {
  platform: Platform;
  onClose: () => void;
}

export const PlatformDeepDive: React.FC<PlatformDeepDiveProps> = ({ platform, onClose }) => {
  const { t, language } = useLanguage();
  const categoryScoreLabels = Object.fromEntries(
    getCategories(language).map(c => [c.key, c.label])
  );
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'screenshots' | 'scores'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 overflow-y-auto">
      <div className="glass-card max-w-5xl w-full max-h-[92vh] flex flex-col relative shadow-2xl overflow-hidden my-auto">

        {/* Header Ribbon */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded flex items-center justify-center font-bold text-white text-2xl shrink-0"
              style={{ backgroundColor: platform.logoColor }}
            >
              {platform.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-heading">{platform.name}</h2>
                <span className="badge badge-cyan text-xs">{platform.vendor}</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{platform.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-slate-400 uppercase tracking-wide">{t('overview.overallScore')}</div>
              <div className="text-3xl font-bold font-mono text-cyan-400">
                {platform.overallScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 10</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded bg-slate-900 text-slate-400 hover:text-heading border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 bg-slate-900 border-b border-slate-800 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: t('deepDive.tabOverview') },
            { id: 'architecture', label: t('deepDive.tabArchitecture') },
            { id: 'features', label: t('deepDive.tabFeatures') },
            { id: 'screenshots', label: t('deepDive.tabScreenshots') },
            { id: 'scores', label: t('deepDive.tabScores') }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-3 text-xs font-semibold whitespace-nowrap transition-all border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'text-cyan-400 border-cyan-400'
                  : 'text-slate-400 border-transparent hover:text-heading'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: OVERVIEW & VERDICT */}
          {activeTab === 'overview' && (
            <div className="space-y-6">

              {/* Executive Summary */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{t('deepDive.summaryTitle')}</h3>
                <p className="text-sm text-heading leading-relaxed">{platform.summary}</p>
              </div>

              {/* Final Verdict Banner */}
              <div className="p-5 rounded bg-slate-900 border-l-4 border-l-emerald-400">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  {t('deepDive.analystVerdict')}
                </h3>
                <p className="text-sm text-heading font-medium italic leading-relaxed">
                  "{platform.verdict}"
                </p>
              </div>

              {/* Hardware Ecosystem */}
              <div>
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">{t('deepDive.ecosystemTitle')}</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.ecosystem.map((device, idx) => (
                    <span key={idx} className="badge badge-dim text-xs py-1.5 px-3">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      {device}
                    </span>
                  ))}
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Strengths */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center gap-2 mb-3">
                    <ThumbsUp className="w-4 h-4 text-cyan-400" />
                    {t('deepDive.observedStrengths')}
                  </h3>
                  <div className="space-y-2">
                    {platform.strengths.map((st, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 rounded border border-slate-800">
                        <div className="font-semibold text-heading text-xs mb-1">{st.title}</div>
                        <p className="text-xs text-slate-400">{st.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weaknesses */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    {t('deepDive.observedLimitations')}
                  </h3>
                  <div className="space-y-2">
                    {platform.weaknesses.map((wk, idx) => (
                      <div key={idx} className="bg-slate-900 p-3 rounded border border-slate-800">
                        <div className="font-semibold text-heading text-xs mb-1">{wk.title}</div>
                        <p className="text-xs text-slate-400">{wk.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* TAB 2: ARCHITECTURE & LICENSING */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">

              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{t('deepDive.archSpecTitle')}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.deploymentModel')}</span>
                    <p className="text-slate-400">{platform.architecture.deploymentModel}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.multiTenantHierarchy')}</span>
                    <p className="text-slate-400">{platform.architecture.multiTenancy}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.adoptionFlow')}</span>
                    <p className="text-slate-400">{platform.architecture.adoptionWorkflow}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.firmwareEngine')}</span>
                    <p className="text-slate-400">{platform.architecture.firmwareManagement}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.apiIntegration')}</span>
                    <p className="text-slate-400">{platform.architecture.apiSupport}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.backupRestore')}</span>
                    <p className="text-slate-400">{platform.architecture.backupRestore}</p>
                  </div>
                </div>
              </div>

              {/* Licensing Model */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{t('deepDive.commercialLicensing')}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.pricingStructure')}</span>
                    <p className="text-slate-400">{platform.licensing.pricingType}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded border border-slate-800">
                    <span className="font-semibold text-heading block mb-1 uppercase tracking-wide">{t('deepDive.mspFeatures')}</span>
                    <p className="text-slate-400">{platform.licensing.mspFeatures}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 bg-slate-900 p-3 rounded border border-slate-800">
                  <strong className="text-heading">{t('deepDive.licensingNotes')}</strong> {platform.licensing.tierNotes}
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: VERIFIED FEATURES MATRIX */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="overflow-x-auto border border-slate-800 rounded">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>{t('deepDive.colFeatureName')}</th>
                      <th>{t('deepDive.colCategory')}</th>
                      <th>{t('deepDive.colSupportStatus')}</th>
                      <th>{t('deepDive.colUIEvidence')}</th>
                      <th>{t('deepDive.colNavigationPath')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platform.features.map(f => (
                      <tr key={f.id}>
                        <td>
                          <div className="font-semibold text-heading text-xs">{f.name}</div>
                          <div className="text-[11px] text-slate-400">{f.description}</div>
                        </td>
                        <td>
                          <span className="badge badge-dim text-[10px]">{translateFeatureCategory(f.category, language)}</span>
                        </td>
                        <td>
                          <SupportStatusBadge status={f.status} />
                        </td>
                        <td>
                          <EvidenceBadge status={f.evidenceBadge} notes={f.evidenceNotes} />
                        </td>
                        <td>
                          {f.screenPath ? (
                            <div className="nav-path text-[10px]">{f.screenPath}</div>
                          ) : (
                            <span className="text-slate-500 text-[10px]">N/A</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: SCREENSHOT GALLERY */}
          {activeTab === 'screenshots' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platform.screenshots.map(shot => (
                <div key={shot.id} className="glass-card overflow-hidden">
                  <div className="aspect-video bg-slate-900 relative">
                    <img src={shot.imageUrl} alt={shot.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-heading text-xs">{shot.title}</h4>
                      <span className="badge badge-dim text-[10px]">{translateFeatureCategory(shot.category, language)}</span>
                    </div>
                    <div className="nav-path text-[10px]">{shot.navigationPath}</div>
                    <div className="text-[11px] text-slate-400 bg-slate-900 p-2 rounded border border-slate-800">
                      <strong className="text-heading">{t('deepDive.strengths')}</strong> {shot.strength}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: SCORE EXPLANATIONS */}
          {activeTab === 'scores' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {platform.scoreExplanations.map((scExp, idx) => (
                  <div key={idx} className="bg-slate-900 p-4 rounded border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-heading uppercase tracking-wide">{categoryScoreLabels[scExp.category] || scExp.category}</span>
                      <span className="font-mono font-bold text-cyan-400 text-sm">{scExp.score.toFixed(1)} / 10</span>
                    </div>
                    <p className="text-xs text-slate-400">{scExp.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div>{t('deepDive.evaluatedDate')} {platform.lastEvaluated}</div>
          <button
            onClick={onClose}
            className="btn btn-secondary text-xs"
          >
            {t('deepDive.closeBtn')}
          </button>
        </div>

      </div>
    </div>
  );
};
