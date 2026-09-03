import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTopicDraftsContext } from '../context/TopicDraftsContext';
import { getTopics } from '../data/topics';
import { VENDORS } from '../data/vendors';
import { 
  ArrowLeft, Save, CheckCircle2, MapPin, Pencil, 
  Smartphone, Monitor, ShieldCheck, Sparkles, Sliders, ImageOff,
  Users, UserPlus, MousePointerClick, AlertTriangle, Layers, Clock, Boxes
} from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

interface TopicEntryEditorProps {
  topicId: string;
  platformId: string;
  onBack: () => void;
}

type ShotTab = 'mobile' | 'desktop' | 'auth-members' | 'auth-add-member' | 'auth-one-click' | 'strategy-modal' | 'strategy-validity' | 'auth-config' | 'auth-rules' | 'auth-device' | 'auth-details';

export const TopicEntryEditor: React.FC<TopicEntryEditorProps> = ({ topicId, platformId, onBack }) => {
  const { language, t } = useLanguage();
  const { openImage } = useLightbox();
  const { getEntry, saveEntry, customTopics } = useTopicDraftsContext();

  const vendor = VENDORS.find(v => v.id === platformId);
  const topics = getTopics(language);

  const baseTopicPt = getTopics('pt').find(topic => topic.id === topicId);
  const baseTopicEn = getTopics('en').find(topic => topic.id === topicId);
  const customTopic = customTopics.find(topic => topic.id === topicId);
  const topicTitle = customTopic ? customTopic.title[language] : (language === 'pt' ? baseTopicPt?.title : baseTopicEn?.title) ?? topicId;

  const basePlatformPt = baseTopicPt?.platforms.find(p => p.platformId === platformId);
  const basePlatformEn = baseTopicEn?.platforms.find(p => p.platformId === platformId);
  const basePlatform = language === 'pt' ? basePlatformPt : basePlatformEn;

  const rawDraft = getEntry(topicId, platformId);
  const isStale = rawDraft?.configOptions?.pt?.some(opt => opt.includes('Vouchers') || opt.includes('Isolamento') || opt.includes('RADIUS'));
  const existingDraft = isStale ? undefined : rawDraft;

  const [mode, setMode] = useState<'details' | 'edit'>('details');
  const [shotView, setShotView] = useState<ShotTab>('mobile');

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

  const getImageDetails = (tab: ShotTab) => {
    switch (tab) {
      case 'mobile':
        return { url: '/yunlink_portal_mobile.png', label: 'Portal Layout Mobile', desc: 'Mobile Preview (1170x1020px max 200KB)' };
      case 'desktop':
        return { url: '/yunlink_portal_desktop.png', label: 'Portal Layout Desktop', desc: 'Desktop Preview (1920x500px max 200KB)' };
      case 'auth-members':
        return { url: '/yunlink_auth_methods_member_list.png', label: 'Auth Methods — Lista de Membros', desc: 'Config → Auth → Auth Methods (Aba Member)' };
      case 'auth-add-member':
        return { url: '/yunlink_auth_methods_add_member.png', label: 'Auth Methods — Criar Membro (Validação de Senha)', desc: 'Modal Add Member (Senha: 6-20 caracteres, letras, números e _-)' };
      case 'auth-one-click':
        return { url: '/yunlink_auth_methods_one_click.png', label: 'Auth Methods — Acesso 1-Clique (Informativo)', desc: 'Config → Auth → Auth Methods (Aba One Click)' };
      case 'strategy-modal':
        return { url: '/yunlink_auth_strategy_modal.png', label: 'Strategy Management — Modal de Regras (White/Black List IP/MAC)', desc: 'Config → Auth → Strategy → Add (Tabela com Busca e Batch Delete)' };
      case 'strategy-validity':
        return { url: '/yunlink_auth_strategy_validity.png', label: 'Strategy Management — Tempo de Validade (Validity Auth)', desc: 'Menu Validity Auth (Opções de expiração One Day a Seven Day e Permanent)' };
      case 'auth-config':
        return { url: '/yunlink_deep_02_auth_config_1788351322680.png', label: 'Auth Config — Painel de Autenticação & Configurações de Página', desc: 'Config → Auth → Auth Config (One Click Habilitado / Member Desabilitado / Auth page config)' };
      case 'auth-rules':
        return { url: '/yunlink_auth_rules_modal.png', label: 'Auth Rules — Modal de Seleção de SSIDs', desc: 'Botão Auth Range → Modal Auth Rules (Checkboxes de SSIDs: wireless, SSID1, SSID2, test1017)' };
      case 'auth-device':
        return { url: '/yunlink_auth_device_modal.png', label: 'Auth Device — Modal de Dispositivos Autorizados', desc: 'Botão Auth Device → Modal Auth Device (Tabela SN/Name/Type/IP/MAC/Config)' };
      case 'auth-details':
        return { url: '/yunlink_auth_details.png', label: 'Auth Details — Estatísticas e Histórico de Conexões', desc: 'Config → Auth → Auth Details (Tabela com No./Account/Auth Method/SN/Status/IP/MAC/Time, Filtro e Export)' };
    }
  };

  const currentShot = getImageDetails(shotView);

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

            {/* 1. Summary & Overview Section */}
            {activeSummary && (
              <div className="glass-card p-6">
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Resumo Geral do Tópico
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">{activeSummary}</p>
              </div>
            )}

            {/* Partition activeConfigList into 3 sections by '---' */}
            {(() => {
              const configSections: string[][] = [[]];
              for (const item of activeConfigList) {
                if (item.trim() === '---') {
                  configSections.push([]);
                } else {
                  configSections[configSections.length - 1].push(item);
                }
              }

              const portalItems = (configSections[0] || []).filter(i => !i.startsWith('📌'));
              const authMethodsItems = (configSections[1] || []).filter(i => !i.startsWith('📌'));
              const strategyItems = (configSections[2] || []).filter(i => !i.startsWith('📌'));
              const authConfigItems = (configSections[3] || []).filter(i => !i.startsWith('📌'));
              const authDetailsItems = (configSections[4] || []).filter(i => !i.startsWith('📌'));

              return (
                <>
                  {/* ======================================================== */}
                  {/* BLOCO 1: PORTAL CAPTIVO (LAYOUT & BANNERS TELA INICIAL) */}
                  {/* ======================================================== */}
                  <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                    1. Layout & Banners do Portal Captivo (Tela Inicial)
                  </h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Submenu: Config → Auth → Portal</span>
              </div>

              {/* IMAGEM 1: Galeria de Capturas do Portal (Mobile & Desktop) */}
              <div className="glass-card overflow-hidden border border-cyan-500/20">
                <div className="p-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      Capturas da Interface: Portal Captivo
                    </span>
                  </div>

                  {/* Switcher Portal Mobile / Desktop */}
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setShotView('mobile')}
                      className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'mobile' || (shotView !== 'desktop' && !shotView.startsWith('auth-'))
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Portal Mobile
                    </button>

                    <button
                      onClick={() => setShotView('desktop')}
                      className={`px-3 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'desktop'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      Portal Desktop
                    </button>
                  </div>
                </div>

                {/* Container da Imagem 1 */}
                {(() => {
                  const portalTab = (shotView === 'desktop') ? 'desktop' : 'mobile';
                  const shot = getImageDetails(portalTab);
                  return (
                    <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => openImage(shot.url, `${vendor?.name ?? 'Yunlink'} — ${shot.label}`)}
                        className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900 cursor-zoom-in"
                      >
                        <img 
                          src={shot.url} 
                          alt={shot.label}
                          className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          🔍 Clique para Ampliar (Zoom Fullscreen)
                        </div>
                        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                          {shot.desc}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-3 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Auditado ao vivo em ruike-cloud.com → Config → Auth → Portal
                  </span>
                  <span className="text-cyan-400 font-mono font-medium">
                    {shotView === 'desktop' ? 'Layout Desktop (Widescreen)' : 'Layout Mobile (Responsivo)'}
                  </span>
                </div>
              </div>

              {/* CONFIGURAÇÃO 1: Opções do Portal Captivo */}
              <div className="glass-card p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Opções de Configuração — Portal Captivo (Tela Inicial & Banners)
                </h4>
                <div className="flex flex-col gap-2">
                  {portalItems.map((item, idx) => (
                    <div key={idx} className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>{item.replace(/^•\s*/, '')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* BLOCO 2: MÉTODOS DE AUTENTICAÇÃO (AUTH METHODS)          */}
            {/* ======================================================== */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                    2. Configurações dos Métodos de Autenticação (Auth Methods)
                  </h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Submenu: Config → Auth → Auth Methods</span>
              </div>

              {/* IMAGEM 2: Galeria dos Métodos de Autenticação (Member List, Add Member, One Click) */}
              <div className="glass-card overflow-hidden border border-cyan-500/20">
                <div className="p-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      Capturas da Interface: Métodos de Autenticação
                    </span>
                  </div>

                  {/* Switcher Auth Methods */}
                  <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setShotView('auth-members')}
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'auth-members' || (!shotView.startsWith('auth-') && shotView !== 'mobile' && shotView !== 'desktop')
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      Lista Membros
                    </button>

                    <button
                      onClick={() => setShotView('auth-add-member')}
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'auth-add-member'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <UserPlus className="w-3.5 h-3.5" />
                      Regra Senha Membro
                    </button>

                    <button
                      onClick={() => setShotView('auth-one-click')}
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'auth-one-click'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <MousePointerClick className="w-3.5 h-3.5" />
                      Acesso 1-Clique
                    </button>
                  </div>
                </div>

                {/* Container da Imagem 2 */}
                {(() => {
                  const authTab = (shotView === 'auth-add-member' || shotView === 'auth-one-click') 
                    ? shotView 
                    : 'auth-members';
                  const shot = getImageDetails(authTab);
                  return (
                    <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => openImage(shot.url, `${vendor?.name ?? 'Yunlink'} — ${shot.label}`)}
                        className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900 cursor-zoom-in"
                      >
                        <img 
                          src={shot.url} 
                          alt={shot.label}
                          className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          🔍 Clique para Ampliar (Zoom Fullscreen)
                        </div>
                        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                          {shot.desc}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-3 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Auditado ao vivo em ruike-cloud.com → Config → Auth → Auth Methods
                  </span>
                  <span className="text-cyan-400 font-mono font-medium">
                    {shotView === 'auth-add-member' ? 'Modal Add Member (Senha 6-20)' : shotView === 'auth-one-click' ? 'Informativo One Click' : 'Lista & Gestão de Membros'}
                  </span>
                </div>
              </div>

              {/* CONFIGURAÇÃO 2: Opções dos Métodos de Autenticação */}
              <div className="glass-card p-5 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Opções de Configuração — Métodos de Autenticação (Auth Methods)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {authMethodsItems.map((item, idx) => {
                    if (item.includes('⚠️') || item.includes('Ausência')) {
                      return (
                        <div 
                          key={idx} 
                          className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 shadow-lg my-1"
                        >
                          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                          <div className="space-y-1">
                            <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wide flex items-center gap-2">
                              <span>⚠️ Destaque Auditado</span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-200 border border-amber-500/40">Ausência de Configuração SMS</span>
                            </h5>
                            <p className="text-xs text-amber-200/90 leading-relaxed">
                              {item.replace(/^•\s*/, '').replace(/^⚠️\s*/, '')}
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={idx} className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>{item.replace(/^•\s*/, '')}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* BLOCO 3: ESTRATÉGIAS, WHITE LIST & BLACK LIST (STRATEGY) */}
            {/* ======================================================== */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                    3. Estratégias de Autenticação, White List & Black List (Strategy Management)
                  </h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Submenu: Config → Auth → Strategy</span>
              </div>

              {/* IMAGEM 3: Galeria de Capturas de Strategy (Modal IP/MAC & Dropdown Validity) */}
              <div className="glass-card overflow-hidden border border-cyan-500/20">
                <div className="p-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      Capturas da Interface: Strategy Management
                    </span>
                  </div>

                  {/* Switcher Strategy */}
                  <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                    <button
                      onClick={() => setShotView('strategy-modal')}
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'strategy-modal' || (shotView.startsWith('strategy-') && shotView !== 'strategy-validity')
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      Modal Regras (IP/MAC)
                    </button>

                    <button
                      onClick={() => setShotView('strategy-validity')}
                      className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                        shotView === 'strategy-validity'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      Validade (Validity Auth)
                    </button>
                  </div>
                </div>

                {/* Container da Imagem 3 */}
                {(() => {
                  const stratTab = (shotView === 'strategy-validity') ? 'strategy-validity' : 'strategy-modal';
                  const shot = getImageDetails(stratTab);
                  return (
                    <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
                      <div 
                        onClick={() => openImage(shot.url, `${vendor?.name ?? 'Yunlink'} — ${shot.label}`)}
                        className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900 cursor-zoom-in"
                      >
                        <img 
                          src={shot.url} 
                          alt={shot.label}
                          className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]"
                        />
                        <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          🔍 Clique para Ampliar (Zoom Fullscreen)
                        </div>
                        <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                          {shot.desc}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-3 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Auditado ao vivo em ruike-cloud.com → Config → Auth → Strategy
                  </span>
                  <span className="text-cyan-400 font-mono font-medium">
                    {shotView === 'strategy-validity' ? 'Validade (One Day a Permanent)' : 'Modal Add Strategy (White & Black List)'}
                  </span>
                </div>
              </div>

              {/* CONFIGURAÇÃO 3: Opções de Strategy Management */}
              <div className="glass-card p-5 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  Opções de Configuração — Estratégias & Listas IP/MAC (Strategy Management)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {strategyItems.map((item, idx) => (
                    <div key={idx} className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>{item.replace(/^•\s*/, '')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* BLOCO 4: CONFIGURAÇÕES DE AUTENTICAÇÃO, SSIDs & DISPOSITIVOS (AUTH CONFIG) */}
            {/* ======================================================== */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                      4. Configurações de Autenticação, SSIDs & Dispositivos Autorizados (Auth Config)
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Submenu: Config → Auth → Auth Config</span>
                </div>

                {/* IMAGEM 4: Galeria de Capturas de Auth Config (Tela Principal, Modal Auth Rules SSIDs & Modal Auth Device) */}
                <div className="glass-card overflow-hidden border border-cyan-500/20">
                  <div className="p-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                        Capturas da Interface: Auth Config
                      </span>
                    </div>

                    {/* Switcher Auth Config */}
                    <div className="flex flex-wrap items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                      <button
                        onClick={() => setShotView('auth-config')}
                        className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                          shotView === 'auth-config' || (!['auth-rules', 'auth-device'].includes(shotView) && shotView.startsWith('auth-'))
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        Auth Config (Toggles & Página)
                      </button>

                      <button
                        onClick={() => setShotView('auth-rules')}
                        className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                          shotView === 'auth-rules'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        Modal Auth Rules (SSIDs)
                      </button>

                      <button
                        onClick={() => setShotView('auth-device')}
                        className={`px-2.5 py-1 rounded text-xs font-medium flex items-center gap-1.5 transition-all ${
                          shotView === 'auth-device'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Boxes className="w-3.5 h-3.5" />
                        Modal Auth Device
                      </button>
                    </div>
                  </div>

                  {/* Container da Imagem 4 */}
                  {(() => {
                    const authTab = (shotView === 'auth-rules' || shotView === 'auth-device') ? shotView : 'auth-config';
                    const shot = getImageDetails(authTab);
                    return (
                      <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
                        <div 
                          onClick={() => openImage(shot.url, `${vendor?.name ?? 'Yunlink'} — ${shot.label}`)}
                          className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900 cursor-zoom-in"
                        >
                          <img 
                            src={shot.url} 
                            alt={shot.label}
                            className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]"
                          />
                          <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                            🔍 Clique para Ampliar (Zoom Fullscreen)
                          </div>
                          <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                            {shot.desc}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  <div className="p-3 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Auditado ao vivo em ruike-cloud.com → Config → Auth → Auth Config
                    </span>
                    <span className="text-cyan-400 font-mono font-medium">
                      {shotView === 'auth-rules' ? 'Modal Auth Rules (Seleção de SSIDs)' : shotView === 'auth-device' ? 'Modal Auth Device (Adição de Dispositivos)' : 'Tela Principal Auth Config'}
                    </span>
                  </div>
                </div>

                {/* Alerta de Ausência de Gateway SMS */}
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium flex items-start gap-2.5 shadow-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-bold text-amber-200 block">⚠️ Ausência de Configuração de Gateway SMS</span>
                    <p className="text-[11px] text-amber-300/90 leading-relaxed">
                      Não existe nenhuma tela ou menu de configuração de provedor/gateway SMS no painel da plataforma Yunlink. Embora o método SMS seja exibido como opção no construtor visual do portal captivo, a funcionalidade de envio de mensagens de texto não pode ser configurada ou vinculada a uma API de gateway SMS nesta versão.
                    </p>
                  </div>
                </div>

                {/* CONFIGURAÇÃO 4: Opções de Auth Config */}
                <div className="glass-card p-5 space-y-4">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Opções de Configuração — Métodos Habilitados, SSIDs & Dispositivos (Auth Config)
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {authConfigItems.map((item, idx) => (
                      <div key={idx} className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>{item.replace(/^•\s*/, '')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ======================================================== */}
              {/* BLOCO 5: DETALHAMENTO & LOGS DE AUTENTICAÇÃO (AUTH DETAILS) */}
              {/* ======================================================== */}
              <div className="space-y-5 pt-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">
                      5. Detalhamento & Logs de Autenticação (Auth Details)
                    </h3>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Submenu: Config → Auth → Auth Details</span>
                </div>

                {/* IMAGEM 5: Captura de Auth Details */}
                <div className="glass-card overflow-hidden border border-cyan-500/20">
                  <div className="p-3.5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                        Captura da Interface: Auth Details
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-semibold text-cyan-300 px-2.5 py-1">
                      Tabela de Conexões & Logs
                    </div>
                  </div>

                  {/* Container da Imagem 5 */}
                  <div className="p-4 bg-slate-950 flex flex-col items-center justify-center">
                    <div 
                      onClick={() => openImage('/yunlink_auth_details.png', `${vendor?.name ?? 'Yunlink'} — Auth Details (Estatísticas e Histórico de Conexões)`)}
                      className="relative group w-full max-w-4xl overflow-hidden rounded-xl border border-slate-800 shadow-2xl bg-slate-900 cursor-zoom-in"
                    >
                      <img 
                        src="/yunlink_auth_details.png" 
                        alt="Auth Details — Estatísticas e Histórico de Conexões"
                        className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.01]"
                      />
                      <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        🔍 Clique para Ampliar (Zoom Fullscreen)
                      </div>
                      <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-slate-800 text-[10px] text-slate-300 font-mono">
                        Config → Auth → Auth Details (Tabela No./Account/Auth Method/SN/Status/IP/MAC/Time)
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-t border-slate-800/80 bg-slate-900/30 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Auditado ao vivo em ruike-cloud.com → Config → Auth → Auth Details
                    </span>
                    <span className="text-cyan-400 font-mono font-medium">
                      Filtros: All / One Click / Member (SMS Ausente)
                    </span>
                  </div>
                </div>

                {/* CONFIGURAÇÃO 5: Opções de Auth Details */}
                <div className="glass-card p-5 space-y-4">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wide flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Opções de Configuração — Histórico, Filtros & Exportação (Auth Details)
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {authDetailsItems.map((item, idx) => (
                      <div key={idx} className="py-1.5 flex items-start gap-3 text-xs text-slate-200 leading-relaxed border-b border-slate-800/40 last:border-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>{item.replace(/^•\s*/, '')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </>
        );
      })()}

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

