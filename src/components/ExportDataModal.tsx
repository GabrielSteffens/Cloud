import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Copy, CheckCircle2 } from 'lucide-react';

interface ExportDataModalProps {
  data: string;
  onClose: () => void;
}

export const ExportDataModal: React.FC<ExportDataModalProps> = ({ data, onClose }) => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — user can still select the text manually
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      <div className="glass-card max-w-2xl w-full max-h-[85vh] flex flex-col p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-heading border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-base font-bold text-heading mb-1">{t('topics.export')}</h3>
        <p className="text-[11px] text-slate-500 mb-4">{t('export.hint')}</p>

        <textarea
          readOnly
          value={data}
          onFocus={e => e.target.select()}
          className="search-input text-[11px] font-mono flex-1 min-h-[300px] resize-none"
        />

        <div className="flex items-center gap-3 mt-4">
          <button onClick={handleCopy} className="btn btn-primary text-xs">
            {copied ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? t('common.copied') : t('common.copy')}
          </button>
        </div>

      </div>
    </div>
  );
};
