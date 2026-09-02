import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTopicDraftsContext } from '../context/TopicDraftsContext';
import { getTopics } from '../data/topics';
import { VENDORS } from '../data/vendors';
import { 
  ArrowLeft, Save, CheckCircle2, MapPin, Pencil, 
  Smartphone, Monitor, ShieldCheck, Sparkles, Sliders, ImageOff 
} from 'lucide-react';

interface TopicEntryEditorProps {
  topicId: string;
  platformId: string;
  onBack: () => void;
}

export const TopicEntryEditor: React.FC<TopicEntryEditorProps> = ({ topicId, platformId, onBack }) => {
  const { language, t } = useLanguage();
  const { getEntry, saveEntry, customTopics } = useTopicDraftsContext();

  const vendor = VENDORS.find(v => v.id === platformId);

  const baseTopicPt = getTopics('pt').find(topic => topic.id === topicId);
  const baseTopicEn = getTopics('en').find(topic => topic.id === topicId);
  const customTopic = customTopics.find(topic => topic.id === topicId);
  const topicTitle = customTopic ? customTopic.title[language] : (language === 'pt' ? baseTopicPt?.title : baseTopicEn?.title) ?? topicId;

  const basePlatformPt = baseTopicPt?.platforms.find(p => p.platformId === platformId);
  const basePlatformEn = baseTopicEn?.platforms.find(p => p.platformId === platformId);
  const basePlatform = language === 'pt' ? basePlatformPt : basePlatformEn;

  const existingDraft = getEntry(topicId, platformId);

  const [mode, setMode] = useState<'details' | 'edit'>('details');
  const [activeTabMode, setActiveTabMode] = useState<'mobile' | 'desktop'>('mobile');

  const [available, setAvailable] = useState(existingDraft?.available ?? basePlatformPt?.available ?? false);
  const [screenshotUrl, setScreenshotUrl] = useState(existingDraft?.screenshotUrl ?? basePlatformPt?.screenshotUrl ?? '');
  const [navigationPath, setNavigationPath] = useState(existingDraft?.navigationPath ?? basePlatformPt?.navigationPath ?? '');
  const [summaryPt, setSummaryPt] = useState(existingDraft?.summary?.pt ?? basePlatformPt?.summary ?? '');
  const [summaryEn, setSummaryEn] = useState(existingDraft?.summary?.en ?? basePlatformEn?.summary ?? '');
  const [configPt, setConfigPt] = useState((existingDraft?.configOptions?.pt ?? basePlatformPt?.configOptions ?? []).join('\n'));
  const [configEn, setConfigEn] = useState((existingDraft?.configOptions?.en ?? basePlatformEn?.configOptions ?? []).join('\n'));
  const [notePt, setNotePt] = useState(existingDraft?.unavailableNote?.pt ?? basePlatformPt?.unavailableNote ?? '');
  const [noteEn, setNoteEn] = useState(existingDraft?.unavailableNote?.en ?? basePlatformEn?.unavailableNote ?? '');
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const splitLines = (value: string) => value.split('\n').map(line => line.trim()).filter(Boolean);

  const handleSave = () => {
    saveEntry(topicId, platformId, {
      available,
      screenshotUrl: screenshotUrl.trim() || undefined,
      navigationPath: navigationPath.trim() || undefined,
      summary: { pt: summaryPt.trim(), en: summaryEn.trim() },
      configOptions: { pt: splitLines(configPt), en: splitLines(configEn) },
      unavailableNote: { pt: notePt.trim(), en: noteEn.trim() },
      updatedAt: new Date().toISOString()
    });
    setSavedAt(new Date().toLocaleTimeString());
  };

  const activeSummary = language === 'pt' ? (summaryPt || basePlatformPt?.summary) : (summaryEn || basePlatformEn?.summary);
  const activeConfigList = language === 'pt' 
    ? (configPt ? splitLines(configPt) : basePlatformPt?.configOptions ?? [])
    : (configEn ? splitLines(configEn) : basePlatformEn?.configOptions ?? []);

  const mobileScreenshot = basePlatformPt?.screenshots?.mobile || screenshotUrl || '/yunlink_portal_mobile.png';
  const desktopScreenshot = basePlatformPt?.screenshots?.desktop || '/yunlink_portal_desktop.png';
  const currentImage = activeTabMode === 'mobile' ? mobileScreenshot : desktopScreenshot;

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button 
          onClick={onBack} 
          className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('editor.back')} {vendor?.name ? `(${vendor.name})` : ''}
        </button>

        {/* Header Title & Mode Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3.5">
            {vendor && (
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-md"
                style={{ backgroundColor: vendor.logoColor }}
              >
                {vendor.name.charAt(0)}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-heading">{topicTitle}</h2>
                {available ? (
                  <span className="badge badge-emerald text-[10px]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {t('badge.verifiedUI')}
                  </span>
                ) : (
                  <span className="badge badge-dim text-[10px]">
                    {t('topics.comingSoon')}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Plataforma: <span className="font-semibold text-slate-200">{vendor?.name}</span> ({vendor?.vendor})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-900/90 p-1 rounded-lg border border-slate-800 shrink-0">
            <button
              onClick={() => setMode('details')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                mode === 'details'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Visualizar Página
            </button>
            <button
              onClick={() => setMode('edit')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                mode === 'edit'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Pencil className="w-3.5 h-3.5" />
              Editar Dados
            </button>
          </div>
        </div>

        {/* MODE 1: VISUAL DETAILS VIEW */}
        {mode === 'details' && (
          <div className="space-y-8">

            {/* Navigation Bar Path */}
            {(navigationPath || basePlatform?.navigationPath) && (
              <div className="glass-card p-3.5 px-4 flex items-center gap-2.5 text-xs text-cyan-400 bg-slate-900/60 border-cyan-500/20">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold text-slate-300">Caminho na Interface:</span>
                <span className="font-mono text-cyan-300 text-[11px] truncate">
                  {navigationPath || basePlatform?.navigationPath}
                </span>
              </div>
            )}

            {/* Interactive Image Gallery Card */}
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/40">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-heading uppercase tracking-wide">
                    Capturas de Tela da Interface ao Vivo
                  </span>
                </div>

                {/* Mobile / Desktop Toggle Tabs */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTabMode('mobile')}
                    className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                      activeTabMode === 'mobile'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    Layout Mobile
                  </button>
                  <button
                    onClick={() => setActiveTabMode('desktop')}
                    className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                      activeTabMode === 'desktop'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    Layout Desktop
                  </button>
                </div>
              </div>

              {/* Main Screenshot Container */}
              <div className="p-5 bg-slate-950 flex flex-col items-center justify-center">
                {currentImage ? (
                  <div className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900">
                    <img 
                      src={currentImage} 
                      alt={`Yunlink Portal ${activeTabMode}`}
                      className="w-full h-auto object-contain max-h-[600px] transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                    <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                      {activeTabMode === 'mobile' ? 'Mobile Preview (1170x1020px max 200KB)' : 'Desktop Preview (1920x500px max 200KB)'}
                    </div>
                  </div>
                ) : (
                  <div className="w-full aspect-video rounded-xl border border-dashed border-slate-700 bg-slate-900 flex flex-col items-center justify-center gap-2 text-center p-6">
                    <ImageOff className="w-8 h-8 text-slate-500" />
                    <span className="text-xs font-semibold text-slate-400">Captura de tela pendente</span>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-slate-800/80 bg-slate-900/30 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Auditado ao vivo no Yunlink CloudNetlot (ruike-cloud.com)
                </span>
                <span className="text-slate-500">
                  {activeTabMode === 'mobile' 
                    ? 'Preview dentro da moldura smartphone com abas Before Auth, Process Auth, After Auth' 
                    : 'Preview em tela wide de computador com painel lateral de autenticação'}
                </span>
              </div>
            </div>

            {/* Summary & Overview Section */}
            {activeSummary && (
              <div className="glass-card p-6">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Resumo Geral do Tópico
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activeSummary}</p>
              </div>
            )}

            {/* Organized Config Options & Specs */}
            {activeConfigList.length > 0 && (
              <div className="glass-card p-6">
                <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-4">
                  Recursos & Especificações Técnicas Verificadas
                </h3>
                <div className="flex flex-col gap-2.5">
                  {activeConfigList.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* MODE 2: FORM EDITOR VIEW */}
        {mode === 'edit' && (
          <div>
            <p className="text-[11px] text-slate-500 mb-6">{t('editor.languageNote')}</p>

            <div className="glass-card p-5 flex flex-col gap-6">

              <label className="flex items-center gap-2.5 text-sm font-semibold text-heading cursor-pointer">
                <input
                  type="checkbox"
                  checked={available}
                  onChange={e => setAvailable(e.target.checked)}
                  className="w-4 h-4 accent-[var(--brand-green)]"
                />
                {t('editor.available')}
              </label>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.screenshotUrl')}</label>
                <input
                  type="text"
                  value={screenshotUrl}
                  onChange={e => setScreenshotUrl(e.target.value)}
                  placeholder="/minha-captura.png"
                  className="search-input text-xs"
                />
                <p className="text-[10px] text-slate-500 mt-1">{t('editor.screenshotUrlHint')}</p>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.navigationPath')}</label>
                <input
                  type="text"
                  value={navigationPath}
                  onChange={e => setNavigationPath(e.target.value)}
                  placeholder="site.com → Menu → Submenu"
                  className="search-input text-xs"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.summary')} — Português</label>
                  <textarea
                    value={summaryPt}
                    onChange={e => setSummaryPt(e.target.value)}
                    rows={4}
                    className="search-input text-xs resize-y"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.summary')} — English</label>
                  <textarea
                    value={summaryEn}
                    onChange={e => setSummaryEn(e.target.value)}
                    rows={4}
                    className="search-input text-xs resize-y"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.configOptions')} — Português</label>
                  <textarea
                    value={configPt}
                    onChange={e => setConfigPt(e.target.value)}
                    rows={6}
                    className="search-input text-xs resize-y font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.configOptions')} — English</label>
                  <textarea
                    value={configEn}
                    onChange={e => setConfigEn(e.target.value)}
                    rows={6}
                    className="search-input text-xs resize-y font-mono"
                  />
                </div>
              </div>

              {!available && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.unavailableNote')} — Português</label>
                    <textarea
                      value={notePt}
                      onChange={e => setNotePt(e.target.value)}
                      rows={3}
                      className="search-input text-xs resize-y"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.unavailableNote')} — English</label>
                    <textarea
                      value={noteEn}
                      onChange={e => setNoteEn(e.target.value)}
                      rows={3}
                      className="search-input text-xs resize-y"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button onClick={handleSave} className="btn btn-primary text-xs">
                  <Save className="w-3.5 h-3.5" />
                  {t('editor.save')}
                </button>
                {savedAt && (
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-500">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t('editor.saved')} ({savedAt})
                  </span>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

