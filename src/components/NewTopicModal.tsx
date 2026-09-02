import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Plus } from 'lucide-react';

interface NewTopicModalProps {
  onClose: () => void;
  onCreate: (titlePt: string, titleEn: string, descriptionPt: string, descriptionEn: string, iconName: string) => void;
}

export const NewTopicModal: React.FC<NewTopicModalProps> = ({ onClose, onCreate }) => {
  const { t } = useLanguage();
  const [titlePt, setTitlePt] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [descriptionPt, setDescriptionPt] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [iconName, setIconName] = useState('Columns3');

  const canCreate = titlePt.trim() && titleEn.trim();

  const handleCreate = () => {
    if (!canCreate) return;
    onCreate(titlePt.trim(), titleEn.trim(), descriptionPt.trim(), descriptionEn.trim(), iconName.trim() || 'Columns3');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      <div className="glass-card max-w-lg w-full p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-heading border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold text-heading mb-1">{t('newTopic.heading')}</h3>
        <p className="text-[11px] text-slate-500 mb-5">{t('newTopic.hint')}</p>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1">{t('newTopic.titlePt')}</label>
              <input type="text" value={titlePt} onChange={e => setTitlePt(e.target.value)} className="search-input text-xs" />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1">{t('newTopic.titleEn')}</label>
              <input type="text" value={titleEn} onChange={e => setTitleEn(e.target.value)} className="search-input text-xs" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1">{t('newTopic.descriptionPt')}</label>
              <textarea value={descriptionPt} onChange={e => setDescriptionPt(e.target.value)} rows={3} className="search-input text-xs resize-y" />
            </div>
            <div>
              <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1">{t('newTopic.descriptionEn')}</label>
              <textarea value={descriptionEn} onChange={e => setDescriptionEn(e.target.value)} rows={3} className="search-input text-xs resize-y" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide block mb-1">{t('newTopic.icon')}</label>
            <input type="text" value={iconName} onChange={e => setIconName(e.target.value)} className="search-input text-xs" />
          </div>

          <div className="flex items-center justify-end gap-3 mt-1">
            <button onClick={onClose} className="btn btn-secondary text-xs">{t('newTopic.cancel')}</button>
            <button onClick={handleCreate} disabled={!canCreate} className="btn btn-primary text-xs disabled:opacity-40 disabled:cursor-not-allowed">
              <Plus className="w-3.5 h-3.5" />
              {t('newTopic.create')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
