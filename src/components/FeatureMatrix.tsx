import React, { useState } from 'react';
import { Platform, FeatureCategory } from '../types/platform';
import { EvidenceBadge, SupportStatusBadge } from './EvidenceBadge';
import { useLanguage } from '../i18n/LanguageContext';
import { Search, BarChart3, Info, X } from 'lucide-react';

interface FeatureMatrixProps {
  platforms: Platform[];
}

export const FeatureMatrix: React.FC<FeatureMatrixProps> = ({ platforms }) => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Wireless', 'Switching', 'Security', 'Monitoring', 'Operations & Automation', 'Troubleshooting', 'User & Tenant Management', 'Mobile Application'];

  const allFeatureRows: { name: string; category: FeatureCategory; description: string }[] = [];
  
  platforms.forEach(p => {
    p.features.forEach(f => {
      if (!allFeatureRows.some(row => row.name.toLowerCase() === f.name.toLowerCase())) {
        allFeatureRows.push({
          name: f.name,
          category: f.category,
          description: f.description
        });
      }
    });
  });

  const filteredRows = allFeatureRows.filter(row => {
    const matchesCategory = selectedCategory === 'All' || row.category === selectedCategory;
    const matchesSearch = row.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          row.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="section-title">
              <BarChart3 className="w-6 h-6 text-cyan-400" />
              {t('matrix.title')}
            </h2>
            <p className="section-subtitle">
              {t('matrix.subtitle')}
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={t('matrix.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input text-xs"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* High Density Comparison Table */}
        <div className="glass-card overflow-hidden border border-slate-800">
          <div className="overflow-x-auto">
            <table className="tech-table">
              <thead>
                <tr>
                  <th className="w-1/3">{t('matrix.featureColumn')}</th>
                  {platforms.map(p => (
                    <th key={p.id} className="text-center font-bold text-white">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.logoColor }} />
                        {p.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.length === 0 ? (
                  <tr>
                    <td colSpan={platforms.length + 1} className="text-center py-12 text-slate-500">
                      {t('matrix.noResults')} "{searchTerm}".
                    </td>
                  </tr>
                ) : (
                  filteredRows.map((row, idx) => (
                    <React.Fragment key={idx}>
                      <tr className="hover:bg-slate-900/40 transition-colors">
                        
                        {/* Feature Name & Description Column */}
                        <td>
                          <div className="flex items-start gap-2">
                            <div>
                              <div className="font-bold text-white text-xs sm:text-sm">{row.name}</div>
                              <div className="text-[11px] text-slate-400 line-clamp-1">{row.description}</div>
                              <span className="badge badge-dim text-[10px] mt-1">{row.category}</span>
                            </div>
                          </div>
                        </td>

                        {/* Platform Columns */}
                        {platforms.map(p => {
                          const featureMatch = p.features.find(f => f.name.toLowerCase() === row.name.toLowerCase());
                          const status = featureMatch ? featureMatch.status : 'not_verified';
                          const evidenceBadge = featureMatch ? featureMatch.evidenceBadge : 'not_verified';

                          return (
                            <td key={p.id} className="text-center">
                              <div className="flex flex-col items-center justify-center gap-1">
                                <SupportStatusBadge status={status} />
                                {featureMatch && (
                                  <EvidenceBadge status={evidenceBadge} notes={featureMatch.evidenceNotes} />
                                )}
                              </div>
                            </td>
                          );
                        })}

                      </tr>
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend Ribbon */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="font-bold text-white font-mono">STATUS:</span>
            <span className="text-emerald-400">{t('status.supported')}</span>
            <span className="text-red-400">{t('status.notSupported')}</span>
            <span className="text-amber-400">{t('status.partial')}</span>
            <span className="text-slate-500">{t('status.notVerified')}</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <Info className="w-4 h-4" />
            <span>Verificado com evidências capturadas na interface ao vivo.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
