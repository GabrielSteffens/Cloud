import React from 'react';
import { Server, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white tracking-wider font-mono">
                {t('header.title')} {t('header.hub')}
              </div>
              <p className="text-[11px] text-slate-500">
                Empirical Technical Cloud Network Management Platform Comparison
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Credentials Hardcoded • 100% Client-Side Privacy</span>
          </div>

          <div className="text-right text-[11px] text-slate-500 font-mono">
            Audit Date: September 2026
          </div>

        </div>
      </div>
    </footer>
  );
};
