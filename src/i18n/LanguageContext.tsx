import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.title': 'CLOUD MATRIX',
    'header.hub': 'ANALYST HUB',
    'header.subtitle': 'Technical Cloud Network Management Comparison',
    'header.zeroCredentials': 'Zero Credentials Hardcoded',
    'nav.overview': 'Platforms Overview',
    'nav.matrix': 'Feature Matrix',
    'nav.headToHead': 'Head-to-Head',
    'nav.radar': 'Capability Radar',
    'nav.gallery': 'UI Navigation Gallery',
    'nav.useCases': 'Use Case Explorer',

    // Hero
    'hero.badge': 'EMPIRICAL TECHNICAL COMPARATIVE ANALYSIS REPORT',
    'hero.title': 'Cloud Network Management Platforms',
    'hero.subtitle': 'Deep Technical Evaluation & Capability Matrix',
    'hero.description': 'A comprehensive, 100% empirical architectural exploration of enterprise cloud platforms starting with Yunlink Cloud (ruike-cloud.com). Evaluated strictly on observed live interface workflows, wireless radio tuning, hardware inventory (AP, Switch, Gateway, CPE Bridge), security controls, and operational observability.',
    'hero.platformsAnalyzed': 'Platforms Analyzed',
    'hero.featuresEvaluated': 'Features Evaluated',
    'hero.verifiedEvidence': 'UI Verified Evidence',
    'hero.lastAudit': 'Last Live UI Audit',

    // Executive Summary
    'summary.title': 'Executive Summary & Category Rankings',
    'summary.subtitle': 'Calculated dynamically from category capability scores, operational quality metrics, and verified feature support.',
    'summary.inspectDeepDive': 'Inspect Platform Deep Dive',

    // Platform Overview Cards
    'overview.title': 'Platforms Evaluation Overview',
    'overview.subtitle': 'Individual platform score cards, target markets, hardware ecosystem support, and key discovered trade-offs.',
    'overview.overallScore': 'Overall Score',
    'overview.supportedEcosystem': 'Supported Ecosystem:',
    'overview.keyStrengths': 'Key Strengths',
    'overview.keyWeaknesses': 'Key Weaknesses',
    'overview.inspectGallery': 'Inspect Screen-by-Screen Deep Dive',

    // Capability Radar
    'radar.title': 'Multi-Dimensional Capability Visualizer',
    'radar.subtitle': 'Comparative scoring across Wireless, Switching, Security, Observability, Troubleshooting, Automation, and Scalability.',
    'radar.selectDimension': 'Select Dimension to Inspect:',
    'radar.rationale': 'Rationale:',

    // Feature Matrix
    'matrix.title': 'Evidence-Based Technical Feature Matrix',
    'matrix.subtitle': 'Comprehensive feature breakdown across platforms. Each row includes evidence verification status and UI screen navigation path.',
    'matrix.searchPlaceholder': 'Search features (e.g. WPA3, VLAN, Ping)...',
    'matrix.featureColumn': 'Feature Capability',
    'matrix.noResults': 'No matching features found for search term',

    // Head-to-Head
    'h2h.title': 'Side-by-Side Head-to-Head Comparison',
    'h2h.subtitle': 'Select 2 to 4 platforms to perform a direct architectural and operational comparison.',
    'h2h.compareLabel': 'Compare:',
    'h2h.overallRating': 'Overall Rating',
    'h2h.deploymentModel': 'Deployment Model:',
    'h2h.multiTenancy': 'Multi-Tenancy Hierarchy:',
    'h2h.adoptionWorkflow': 'Adoption Workflow:',
    'h2h.apiSupport': 'API Support:',
    'h2h.licensingStructure': 'Licensing Structure:',

    // Screenshot Gallery
    'gallery.title': 'Screen-by-Screen UI Navigation Gallery',
    'gallery.subtitle': 'Verified platform user interfaces categorized by module with explicit breadcrumb menu navigation paths.',
    'gallery.platformLabel': 'Platform:',
    'gallery.allPlatforms': 'All Platforms',
    'gallery.observedControls': 'Observed Controls:',
    'gallery.expandImage': 'Expand Full Image →',
    'gallery.navigationPath': 'Breadcrumb Navigation Path:',
    'gallery.uiStrengths': 'Key UI Strengths:',
    'gallery.observedLimitation': 'Observed Limitation / Concern:',

    // Use Case Explorer
    'useCase.title': 'Real-World Scenario Use Case Matcher',
    'useCase.subtitle': 'Select your specific deployment architecture scenario to discover which cloud platform is best suited for your requirements.',
    'useCase.specification': 'SCENARIO SPECIFICATION',
    'useCase.keyRequirements': 'Key Technical Requirements:',
    'useCase.scenarioDrivers': 'Scenario Drivers:',
    'useCase.inspectDetails': 'Inspect Platform Details',

    // Deep Dive Modal
    'deepDive.summaryTitle': 'Platform Summary',
    'deepDive.analystVerdict': 'Final Analyst Verdict',
    'deepDive.ecosystemTitle': 'Supported Hardware Ecosystem',
    'deepDive.observedStrengths': 'Observed Strengths',
    'deepDive.observedLimitations': 'Observed Limitations',
    'deepDive.closeBtn': 'Close Deep Dive',
    'deepDive.evaluatedDate': 'Evaluated:',

    // Badges & Common
    'badge.verifiedUI': 'Verified in UI',
    'badge.officialDoc': 'Official Doc',
    'badge.inferred': 'Inferred',
    'badge.notVerified': 'Not Verified',
    'status.supported': '✓ Supported',
    'status.notSupported': '✕ Not Supported',
    'status.partial': '◐ Partial',
    'status.notVerified': '? Not Verified'
  },
  pt: {
    // Header
    'header.title': 'CLOUD MATRIX',
    'header.hub': 'HUB ANALÍTICO',
    'header.subtitle': 'Comparativo Técnico de Plataformas de Rede em Nuvem',
    'header.zeroCredentials': 'Zero Credenciais Expostas',
    'nav.overview': 'Visão Geral',
    'nav.matrix': 'Matriz de Recursos',
    'nav.headToHead': 'Comparativo Lado a Lado',
    'nav.radar': 'Radar de Capacidades',
    'nav.gallery': 'Galeria de Interfaces',
    'nav.useCases': 'Explorador de Casos de Uso',

    // Hero
    'hero.badge': 'RELATÓRIO EMPÍRICO DE ANÁLISE COMPARATIVA TÉCNICA',
    'hero.title': 'Plataformas de Gerenciamento de Rede em Nuvem',
    'hero.subtitle': 'Avaliação Técnica Profunda & Matriz de Capacidades',
    'hero.description': 'Uma exploração arquitetônica 100% empírica de plataformas de nuvem corporativas iniciando com o Yunlink Cloud (ruike-cloud.com). Avaliado estritamente nos fluxos de interface ao vivo, ajustes de radiofrequência sem fio, inventário de hardware (AP, Switch, Gateway, Ponte CPE), controles de segurança e observabilidade operacional.',
    'hero.platformsAnalyzed': 'Plataformas Analisadas',
    'hero.featuresEvaluated': 'Recursos Avaliados',
    'hero.verifiedEvidence': 'Evidências Verificadas na UI',
    'hero.lastAudit': 'Última Auditoria ao Vivo',

    // Executive Summary
    'summary.title': 'Resumo Executivo & Rankings por Categoria',
    'summary.subtitle': 'Calculado dinamicamente a partir das pontuações de capacidade, qualidade operacional e suporte a recursos verificados.',
    'summary.inspectDeepDive': 'Inspecionar Detalhes da Plataforma',

    // Platform Overview Cards
    'overview.title': 'Visão Geral de Avaliação das Plataformas',
    'overview.subtitle': 'Cartões de pontuação individual, mercados-alvo, suporte ao ecossistema de hardware e compensações identificadas.',
    'overview.overallScore': 'Pontuação Geral',
    'overview.supportedEcosystem': 'Ecossistema Suportado:',
    'overview.keyStrengths': 'Principais Pontos Fortes',
    'overview.keyWeaknesses': 'Limitações Observadas',
    'overview.inspectGallery': 'Inspecionar Telas & Navegação',

    // Capability Radar
    'radar.title': 'Visualizador de Capacidades Multidimensional',
    'radar.subtitle': 'Pontuação comparativa em Wi-Fi, Switching, Segurança, Observabilidade, Diagnósticos, Automação e Escalabilidade.',
    'radar.selectDimension': 'Selecione a Dimensão para Inspecionar:',
    'radar.rationale': 'Justificativa:',

    // Feature Matrix
    'matrix.title': 'Matriz de Recursos Técnicos Baseada em Evidências',
    'matrix.subtitle': 'Detalhamento completo de recursos por plataforma. Cada linha inclui o status de verificação de evidência e o caminho de navegação na UI.',
    'matrix.searchPlaceholder': 'Buscar recursos (ex: WPA3, VLAN, Ping)...',
    'matrix.featureColumn': 'Recurso / Capacidade',
    'matrix.noResults': 'Nenhum recurso encontrado para o termo',

    // Head-to-Head
    'h2h.title': 'Comparativo Direto Lado a Lado',
    'h2h.subtitle': 'Selecione de 2 a 4 plataformas para realizar uma comparação direta de arquitetura e operação.',
    'h2h.compareLabel': 'Comparar:',
    'h2h.overallRating': 'Classificação Geral',
    'h2h.deploymentModel': 'Modelo de Implantação:',
    'h2h.multiTenancy': 'Hierarquia Multi-Tenant:',
    'h2h.adoptionWorkflow': 'Fluxo de Adoção:',
    'h2h.apiSupport': 'Suporte a API:',
    'h2h.licensingStructure': 'Estrutura de Licenciamento:',

    // Screenshot Gallery
    'gallery.title': 'Galeria de Navegação de Telas da Interface (UI)',
    'gallery.subtitle': 'Interfaces de usuário verificadas categorizadas por módulo com caminhos de navegação explícitos.',
    'gallery.platformLabel': 'Plataforma:',
    'gallery.allPlatforms': 'Todas as Plataformas',
    'gallery.observedControls': 'Controles Observados:',
    'gallery.expandImage': 'Expandir Imagem Completa →',
    'gallery.navigationPath': 'Caminho de Navegação (Breadcrumb):',
    'gallery.uiStrengths': 'Pontos Fortes na UI:',
    'gallery.observedLimitation': 'Limitação / Observação:',

    // Use Case Explorer
    'useCase.title': 'Explorador de Casos de Uso e Cenários Reais',
    'useCase.subtitle': 'Selecione o seu cenário de implantação para descobrir qual plataforma atende melhor às suas exigências técnicas.',
    'useCase.specification': 'ESPECIFICAÇÃO DO CENÁRIO',
    'useCase.keyRequirements': 'Requisitos Técnicos Chave:',
    'useCase.scenarioDrivers': 'Fatores Determinantes:',
    'useCase.inspectDetails': 'Inspecionar Detalhes',

    // Deep Dive Modal
    'deepDive.summaryTitle': 'Resumo da Plataforma',
    'deepDive.analystVerdict': 'Veredito Final dos Analistas',
    'deepDive.ecosystemTitle': 'Ecossistema de Hardware Suportado',
    'deepDive.observedStrengths': 'Pontos Fortes Observados',
    'deepDive.observedLimitations': 'Limitações Observadas',
    'deepDive.closeBtn': 'Fechar Detalhes',
    'deepDive.evaluatedDate': 'Avaliado em:',

    // Badges & Common
    'badge.verifiedUI': 'Verificado na UI',
    'badge.officialDoc': 'Doc Oficial',
    'badge.inferred': 'Inferido',
    'badge.notVerified': 'Não Verificado',
    'status.supported': '✓ Suportado',
    'status.notSupported': '✕ Não Suportado',
    'status.partial': '◐ Parcial',
    'status.notVerified': '? Não Verificado'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt'); // Default to Portuguese for Brazilian user experience!

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
