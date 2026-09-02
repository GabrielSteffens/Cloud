import React from 'react';
import { VerificationStatus, SupportStatus } from '../types/platform';
import { useLanguage } from '../i18n/LanguageContext';
import { ShieldCheck, FileText, HelpCircle, AlertCircle, CheckCircle2, XCircle, MinusCircle } from 'lucide-react';

interface EvidenceBadgeProps {
  status: VerificationStatus;
  notes?: string;
  showIcon?: boolean;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ status, notes, showIcon = true }) => {
  const { t } = useLanguage();

  switch (status) {
    case 'verified_ui':
      return (
        <span className="badge badge-emerald" title={notes || 'Verified directly in live UI'}>
          {showIcon && <ShieldCheck className="w-3.5 h-3.5" />}
          {t('badge.verifiedUI')}
        </span>
      );
    case 'documented':
      return (
        <span className="badge badge-cyan" title={notes || 'Confirmed in vendor technical documentation'}>
          {showIcon && <FileText className="w-3.5 h-3.5" />}
          {t('badge.officialDoc')}
        </span>
      );
    case 'inferred':
      return (
        <span className="badge badge-amber" title={notes || 'Inferred based on architecture specs'}>
          {showIcon && <AlertCircle className="w-3.5 h-3.5" />}
          {t('badge.inferred')}
        </span>
      );
    case 'not_verified':
    default:
      return (
        <span className="badge badge-dim" title={notes || 'Could not be verified in test environment'}>
          {showIcon && <HelpCircle className="w-3.5 h-3.5" />}
          {t('badge.notVerified')}
        </span>
      );
  }
};

interface SupportStatusBadgeProps {
  status: SupportStatus;
}

export const SupportStatusBadge: React.FC<SupportStatusBadgeProps> = ({ status }) => {
  const { t } = useLanguage();

  switch (status) {
    case 'supported':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          {t('status.supported')}
        </span>
      );
    case 'not_supported':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/30">
          <XCircle className="w-4 h-4 text-red-400" />
          {t('status.notSupported')}
        </span>
      );
    case 'partial':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
          <MinusCircle className="w-4 h-4 text-amber-400" />
          {t('status.partial')}
        </span>
      );
    case 'not_verified':
    default:
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-500/10 text-slate-400 border border-slate-500/30">
          <HelpCircle className="w-4 h-4 text-slate-400" />
          {t('status.notVerified')}
        </span>
      );
  }
};
