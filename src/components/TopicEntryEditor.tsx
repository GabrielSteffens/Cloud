import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useTopicDraftsContext } from '../context/TopicDraftsContext';
import { getTopics } from '../data/topics';
import { VENDORS } from '../data/vendors';
import { ArrowLeft, Save, CheckCircle2 } from 'lucide-react';

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
  const existingDraft = getEntry(topicId, platformId);

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

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('editor.back')}
        </button>

        <div className="flex items-center gap-3 mb-2">
          {vendor && (
            <div
              className="w-9 h-9 rounded flex items-center justify-center font-bold text-white text-sm shrink-0"
              style={{ backgroundColor: vendor.logoColor }}
            >
              {vendor.name.charAt(0)}
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold text-heading">{vendor?.name ?? platformId}</h2>
            <p className="text-xs text-slate-500">{t('editor.editingFor')} {topicTitle}</p>
          </div>
        </div>

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
                rows={5}
                className="search-input text-xs resize-y font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">{t('editor.configOptions')} — English</label>
              <textarea
                value={configEn}
                onChange={e => setConfigEn(e.target.value)}
                rows={5}
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
    </section>
  );
};
