import React from 'react';
import { Server, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-2.5">
            <Server className="w-4 h-4 text-cyan-400 shrink-0" />
            <div>
              <div className="text-xs font-semibold text-heading">
                {t('header.title')}
              </div>
              <p className="text-[11px] text-slate-500">
                {t('footer.tagline')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('footer.privacyNote')}</span>
          </div>

          <div className="text-right text-[11px] text-slate-500">
            {t('footer.auditDate')}
          </div>

        </div>
      </div>
    </footer>
  );
};
