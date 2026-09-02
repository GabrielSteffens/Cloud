import React, { useState } from 'react';
import { Platform, ScreenshotItem } from '../types/platform';
import { EvidenceBadge } from './EvidenceBadge';
import { useLanguage } from '../i18n/LanguageContext';
import { Image as ImageIcon, Maximize2, X, CheckCircle2 } from 'lucide-react';

interface ScreenshotGalleryProps {
  platforms: Platform[];
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ platforms }) => {
  const { t } = useLanguage();
  const [selectedPlatformId, setSelectedPlatformId] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalShot, setActiveModalShot] = useState<{ shot: ScreenshotItem; platformName: string; logoColor: string } | null>(null);

  const allScreenshots: { shot: ScreenshotItem; platformName: string; logoColor: string }[] = [];
  
  platforms.forEach(p => {
    p.screenshots.forEach(shot => {
      allScreenshots.push({
        shot,
        platformName: p.name,
        logoColor: p.logoColor
      });
    });
  });

  const categories = ['All', 'Dashboard', 'Wireless', 'Switching', 'Security', 'Monitoring', 'Troubleshooting'];

  const filteredShots = allScreenshots.filter(item => {
    const matchesPlatform = selectedPlatformId === 'All' || item.shot.id.startsWith(selectedPlatformId.split('-')[0]);
    const matchesCategory = selectedCategory === 'All' || item.shot.category === selectedCategory;
    return matchesPlatform && matchesCategory;
  });

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">
              <ImageIcon className="w-6 h-6 text-cyan-400" />
              {t('gallery.title')}
            </h2>
            <p className="section-subtitle">
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Platform Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400">{t('gallery.platformLabel')}</span>
            <button
              onClick={() => setSelectedPlatformId('All')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                selectedPlatformId === 'All'
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800'
              }`}
            >
              {t('gallery.allPlatforms')}
            </button>
            {platforms.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatformId(p.id)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedPlatformId === p.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShots.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card glass-card-interactive overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Hover Zoom */}
                <div 
                  className="relative aspect-video bg-slate-950 overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalShot(item)}
                >
                  <img 
                    src={item.shot.imageUrl} 
                    alt={item.shot.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Zoom Icon Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span 
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white shadow-md"
                      style={{ backgroundColor: item.logoColor }}
                    >
                      {item.platformName}
                    </span>
                    <span className="badge badge-dim text-[10px]">{item.shot.category}</span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <h3 className="text-sm font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.shot.title}
                  </h3>

                  {/* Breadcrumb Navigation Path */}
                  <div className="mb-3">
                    <div className="nav-path text-[11px] truncate" title={item.shot.navigationPath}>
                      📍 {item.shot.navigationPath}
                    </div>
                  </div>

                  {/* Observed Capabilities */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">{t('gallery.observedControls')}</span>
                    {item.shot.observedCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3 bg-slate-950/60 border-t border-slate-900 flex items-center justify-between">
                <EvidenceBadge status={item.shot.evidenceStatus} />
                <button 
                  onClick={() => setActiveModalShot(item)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300"
                >
                  {t('gallery.expandImage')}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Lightbox Viewer */}
        {activeModalShot && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative border-cyan-500/30">
              
              <button 
                onClick={() => setActiveModalShot(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="px-3 py-1 rounded-md text-xs font-bold text-white"
                  style={{ backgroundColor: activeModalShot.logoColor }}
                >
                  {activeModalShot.platformName}
                </span>
                <h3 className="text-lg font-black text-white">{activeModalShot.shot.title}</h3>
              </div>

              {/* Full Image */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 mb-4">
                <img 
                  src={activeModalShot.shot.imageUrl} 
                  alt={activeModalShot.shot.title} 
                  className="w-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <span className="font-mono text-cyan-400 font-bold block mb-1 uppercase">{t('gallery.navigationPath')}</span>
                  <div className="nav-path text-xs mb-3">{activeModalShot.shot.navigationPath}</div>
                  
                  <span className="font-mono text-emerald-400 font-bold block mb-1 uppercase">{t('gallery.uiStrengths')}</span>
                  <p className="text-slate-300 leading-relaxed mb-3">{activeModalShot.shot.strength}</p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                  <span className="font-mono text-amber-400 font-bold block mb-1 uppercase">{t('gallery.observedLimitation')}</span>
                  <p className="text-slate-300 leading-relaxed mb-3">{activeModalShot.shot.weakness}</p>
                  
                  <span className="font-mono text-purple-400 font-bold block mb-1 uppercase">{t('gallery.observedControls')}</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    {activeModalShot.shot.observedCapabilities.map((cap, idx) => (
                      <li key={idx}>{cap}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
