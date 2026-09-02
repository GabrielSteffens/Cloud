import React from 'react';
import { TopicDefinition } from '../types/platform';
import { VENDORS } from '../data/vendors';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Columns3, DoorOpen, ArrowLeft, CheckCircle2, Clock, ImageOff, ChevronRight,
  UserCog, Boxes, Wifi, Router, Network, Activity, Bell, RefreshCw, Plug, Wallet
} from 'lucide-react';

const TOPIC_ICONS: Record<string, React.FC<{ className?: string }>> = {
  DoorOpen, UserCog, Boxes, Wifi, Router, Network, Activity, Bell, RefreshCw, Plug, Wallet
};

interface VendorTopicsHubProps {
  platformId: string;
  topics: TopicDefinition[];
  onBack: () => void;
  onEditTopic: (topicId: string) => void;
}

export const VendorTopicsHub: React.FC<VendorTopicsHubProps> = ({ platformId, topics, onBack, onEditTopic }) => {
  const { t } = useLanguage();
  const vendor = VENDORS.find(v => v.id === platformId);

  const entries = topics.map(topic => ({
    topic,
    entry: topic.platforms.find(p => p.platformId === platformId)
  })).filter(row => row.entry);

  const availableCount = entries.filter(row => row.entry?.available).length;

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <button onClick={onBack} className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mb-6">
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('hub.backToComparison')}
        </button>

        {/* Vendor Header */}
        <div className="flex items-center gap-4 mb-2">
          {vendor && (
            <div
              className="w-14 h-14 rounded flex items-center justify-center font-bold text-white text-2xl shrink-0"
              style={{ backgroundColor: vendor.logoColor }}
            >
              {vendor.name.charAt(0)}
            </div>
          )}
          <div>
            <h2 className="text-xl font-bold text-heading">{vendor?.name ?? platformId}</h2>
            <p className="text-xs text-slate-500">{vendor?.vendor}</p>
          </div>
        </div>

        <p className="text-sm text-slate-400 mb-8">
          {t('hub.summary')
            .replace('{available}', String(availableCount))
            .replace('{total}', String(entries.length))}
        </p>

        {/* Topic List */}
        <div className="flex flex-col gap-3">
          {entries.map(({ topic, entry }) => {
            if (!entry) return null;
            const TopicIcon = TOPIC_ICONS[topic.iconName] || Columns3;

            return (
              <button
                key={topic.id}
                onClick={() => onEditTopic(topic.id)}
                className="glass-card glass-card-interactive text-left p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <TopicIcon className="w-5 h-5 text-cyan-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-bold text-heading text-sm truncate">{topic.title}</div>
                  {entry.available ? (
                    <p className="text-[11px] text-slate-500 truncate mt-0.5">
                      {entry.summary || entry.navigationPath || topic.description}
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-500 truncate mt-0.5 flex items-center gap-1">
                      <ImageOff className="w-3 h-3 shrink-0" />
                      {t('topics.screenshotPending')}
                    </p>
                  )}
                </div>

                {entry.available ? (
                  <span className="badge badge-emerald text-[10px] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t('badge.verifiedUI')}
                  </span>
                ) : (
                  <span className="badge badge-dim text-[10px] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {t('topics.comingSoon')}
                  </span>
                )}

                <div className="flex items-center gap-1 text-xs font-medium text-cyan-400 shrink-0">
                  <ChevronRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
