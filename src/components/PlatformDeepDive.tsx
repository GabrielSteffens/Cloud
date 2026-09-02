import React, { useState } from 'react';
import { Platform } from '../types/platform';
import { EvidenceBadge, SupportStatusBadge } from './EvidenceBadge';
import { useLanguage } from '../i18n/LanguageContext';
import { ThumbsUp, AlertTriangle, Cpu, ShieldCheck, X } from 'lucide-react';

interface PlatformDeepDiveProps {
  platform: Platform;
  onClose: () => void;
}

export const PlatformDeepDive: React.FC<PlatformDeepDiveProps> = ({ platform, onClose }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features' | 'screenshots' | 'scores'>('overview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl overflow-y-auto">
      <div className="glass-card max-w-5xl w-full max-h-[92vh] flex flex-col relative border-cyan-500/40 shadow-2xl overflow-hidden my-auto">
        
        {/* Header Ribbon */}
        <div 
          className="p-6 border-b border-slate-800 flex items-center justify-between relative overflow-hidden"
          style={{ backgroundColor: `${platform.logoColor}15` }}
        >
          <div 
            className="absolute top-0 left-0 right-0 h-1" 
            style={{ backgroundColor: platform.logoColor }}
          />

          <div className="flex items-center gap-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-2xl shadow-xl"
              style={{ backgroundColor: platform.logoColor }}
            >
              {platform.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-white">{platform.name}</h2>
                <span className="badge badge-cyan text-xs">{platform.vendor}</span>
              </div>
              <p className="text-xs text-slate-300 font-mono mt-0.5">{platform.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs text-slate-400 font-mono uppercase">{t('overview.overallScore')}</div>
              <div className="text-3xl font-black font-mono text-emerald-400">
                {platform.overallScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 10</span>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-slate-950/80 border-b border-slate-900 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Visão Geral & Veredito' },
            { id: 'architecture', label: 'Arquitetura & Licenciamento' },
            { id: 'features', label: 'Matriz de Recursos Verificados' },
            { id: 'screenshots', label: 'Galeria de Telas (UI)' },
            { id: 'scores', label: 'Justificativas de Pontuação' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-t-xl text-xs font-bold whitespace-nowrap transition-all border-t border-x ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-cyan-400 border-cyan-500/40 border-b-slate-900 -mb-px'
                  : 'text-slate-400 border-transparent hover:text-slate-200'
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
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">{t('deepDive.summaryTitle')}</h3>
                <p className="text-sm text-slate-200 leading-relaxed">{platform.summary}</p>
              </div>

              {/* Final Verdict Banner */}
              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  {t('deepDive.analystVerdict')}
                </h3>
                <p className="text-sm text-white font-medium italic leading-relaxed">
                  "{platform.verdict}"
                </p>
              </div>

              {/* Hardware Ecosystem */}
              <div>
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">{t('deepDive.ecosystemTitle')}</h3>
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
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2 mb-4">
                    <ThumbsUp className="w-4 h-4" />
                    {t('deepDive.observedStrengths')}
                  </h3>
                  <div className="space-y-3">
                    {platform.strengths.map((st, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-900">
                        <div className="font-bold text-white text-xs mb-1">{st.title}</div>
                        <p className="text-xs text-slate-300">{st.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weaknesses */}
                <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                  <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-4 h-4" />
                    {t('deepDive.observedLimitations')}
                  </h3>
                  <div className="space-y-3">
                    {platform.weaknesses.map((wk, idx) => (
                      <div key={idx} className="bg-slate-950/60 p-3 rounded-xl border border-slate-900">
                        <div className="font-bold text-white text-xs mb-1">{wk.title}</div>
                        <p className="text-xs text-slate-300">{wk.description}</p>
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
              
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">Especificações Técnicas de Arquitetura</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-cyan-400 font-bold block mb-1 uppercase">Modelo de Implantação:</span>
                    <p className="text-slate-300">{platform.architecture.deploymentModel}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-purple-400 font-bold block mb-1 uppercase">Hierarquia Multi-Tenant:</span>
                    <p className="text-slate-300">{platform.architecture.multiTenancy}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-emerald-400 font-bold block mb-1 uppercase">Fluxo de Adoção de Dispositivos:</span>
                    <p className="text-slate-300">{platform.architecture.adoptionWorkflow}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-amber-400 font-bold block mb-1 uppercase">Motor de Atualização de Firmware:</span>
                    <p className="text-slate-300">{platform.architecture.firmwareManagement}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-pink-400 font-bold block mb-1 uppercase">API REST & Integração:</span>
                    <p className="text-slate-300">{platform.architecture.apiSupport}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-blue-400 font-bold block mb-1 uppercase">Backup & Restauração:</span>
                    <p className="text-slate-300">{platform.architecture.backupRestore}</p>
                  </div>
                </div>
              </div>

              {/* Licensing Model */}
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">Modelo Comercial & Licenciamento</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-slate-400 font-bold block mb-1 uppercase">Estrutura de Preços:</span>
                    <p className="text-slate-300">{platform.licensing.pricingType}</p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-900">
                    <span className="font-mono text-slate-400 font-bold block mb-1 uppercase">Recursos MSP de Licenciamento:</span>
                    <p className="text-slate-300">{platform.licensing.mspFeatures}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-xl border border-slate-900">
                  <strong className="text-slate-300">Notas de Licenciamento:</strong> {platform.licensing.tierNotes}
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: VERIFIED FEATURES MATRIX */}
          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="overflow-x-auto border border-slate-800 rounded-xl">
                <table className="tech-table">
                  <thead>
                    <tr>
                      <th>Nome do Recurso</th>
                      <th>Categoria</th>
                      <th>Status de Suporte</th>
                      <th>Evidência na UI</th>
                      <th>Caminho de Navegação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {platform.features.map(f => (
                      <tr key={f.id}>
                        <td>
                          <div className="font-bold text-white text-xs">{f.name}</div>
                          <div className="text-[11px] text-slate-400">{f.description}</div>
                        </td>
                        <td>
                          <span className="badge badge-dim text-[10px]">{f.category}</span>
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
                            <span className="text-slate-600 font-mono text-[10px]">N/A</span>
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
                <div key={shot.id} className="glass-card overflow-hidden border border-slate-800">
                  <div className="aspect-video bg-slate-950 relative">
                    <img src={shot.imageUrl} alt={shot.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-xs">{shot.title}</h4>
                      <span className="badge badge-dim text-[10px]">{shot.category}</span>
                    </div>
                    <div className="nav-path text-[10px]">📍 {shot.navigationPath}</div>
                    <div className="text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-900">
                      <strong className="text-cyan-400">Pontos Fortes:</strong> {shot.strength}
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
                  <div key={idx} className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 uppercase">{scExp.category}</span>
                      <span className="font-mono font-black text-emerald-400 text-sm">{scExp.score.toFixed(1)} / 10</span>
                    </div>
                    <p className="text-xs text-slate-300">{scExp.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400 font-mono">
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
