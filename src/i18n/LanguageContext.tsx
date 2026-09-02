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
    'nav.topics': 'Topic Comparison',

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
    'summary.subtitleSingle': 'Only one platform has a completed live-UI audit so far, so these cards highlight its per-category strengths rather than a head-to-head win — more platforms will be added as audits are completed.',
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
    'radar.scale': '10-point scale',

    // Feature Matrix
    'matrix.title': 'Evidence-Based Technical Feature Matrix',
    'matrix.subtitle': 'Comprehensive feature breakdown across platforms. Each row includes evidence verification status and UI screen navigation path.',
    'matrix.searchPlaceholder': 'Search features (e.g. WPA3, VLAN, Ping)...',
    'matrix.featureColumn': 'Feature Capability',
    'matrix.noResults': 'No matching features found for search term',
    'matrix.statusLabel': 'Status:',
    'matrix.verifiedNote': 'Verified against evidence captured in the live interface.',

    // Head-to-Head
    'h2h.title': 'Side-by-Side Head-to-Head Comparison',
    'h2h.subtitle': 'Select 2 to 4 platforms to perform a direct architectural and operational comparison.',
    'h2h.subtitleSingle': 'Full architectural profile of the platform audited so far. This view will support real side-by-side comparison once more platforms are added.',
    'h2h.singlePlatformNote': 'Only one platform is available for comparison right now. Below is its full architecture and licensing profile — check back as more audited platforms are added.',
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
    'deepDive.tabOverview': 'Overview & Verdict',
    'deepDive.tabArchitecture': 'Architecture & Licensing',
    'deepDive.tabFeatures': 'Verified Feature Matrix',
    'deepDive.tabScreenshots': 'UI Screen Gallery',
    'deepDive.tabScores': 'Score Rationale',
    'deepDive.summaryTitle': 'Platform Summary',
    'deepDive.analystVerdict': 'Final Analyst Verdict',
    'deepDive.ecosystemTitle': 'Supported Hardware Ecosystem',
    'deepDive.observedStrengths': 'Observed Strengths',
    'deepDive.observedLimitations': 'Observed Limitations',
    'deepDive.archSpecTitle': 'Architecture Technical Specifications',
    'deepDive.deploymentModel': 'Deployment Model',
    'deepDive.multiTenantHierarchy': 'Multi-Tenant Hierarchy',
    'deepDive.adoptionFlow': 'Device Adoption Flow',
    'deepDive.firmwareEngine': 'Firmware Update Engine',
    'deepDive.apiIntegration': 'REST API & Integration',
    'deepDive.backupRestore': 'Backup & Restore',
    'deepDive.commercialLicensing': 'Commercial & Licensing Model',
    'deepDive.pricingStructure': 'Pricing Structure',
    'deepDive.mspFeatures': 'MSP Licensing Features',
    'deepDive.licensingNotes': 'Licensing Notes:',
    'deepDive.colFeatureName': 'Feature Name',
    'deepDive.colCategory': 'Category',
    'deepDive.colSupportStatus': 'Support Status',
    'deepDive.colUIEvidence': 'UI Evidence',
    'deepDive.colNavigationPath': 'Navigation Path',
    'deepDive.strengths': 'Strengths:',
    'deepDive.closeBtn': 'Close Deep Dive',
    'deepDive.evaluatedDate': 'Evaluated:',

    // Badges & Common
    'badge.verifiedUI': 'Verified in UI',
    'badge.officialDoc': 'Official Doc',
    'badge.inferred': 'Inferred',
    'badge.notVerified': 'Not Verified',
    'status.supported': 'Supported',
    'status.notSupported': 'Not Supported',
    'status.partial': 'Partial',
    'status.notVerified': 'Not Verified',

    // Footer
    'footer.tagline': 'Empirical Technical Cloud Network Management Platform Comparison',
    'footer.privacyNote': 'Zero Credentials Hardcoded · 100% Client-Side Privacy',
    'footer.auditDate': 'Audit Date: September 2026',

    // Topic Comparison
    'topics.title': 'Screen-by-Screen Topic Comparison',
    'topics.subtitle': 'Pick a specific workflow and compare exactly how each platform builds that screen — main view, configuration options, and notes.',
    'topics.selectTopic': 'Topic:',
    'topics.comparing': 'Comparing platforms for:',
    'topics.configOptions': 'Configuration Options',
    'topics.screenshotPending': 'Screenshot pending',
    'topics.screenshotPendingNote': 'This screen was audited live but no screen capture was saved for it yet.',
    'topics.comingSoon': 'Coming Soon',
    'topics.moreTopicsSoon': 'More topics will be added as new platforms and screens are audited.',
    'topics.clickToEdit': 'Click a platform name to fill in or edit its data',
    'topics.addTopic': 'New Topic',
    'topics.export': 'Export Data',

    // New Topic Modal
    'newTopic.heading': 'New Macro Topic',
    'newTopic.hint': 'Every platform automatically gets a card for this topic — fill each one in later by clicking its name.',
    'newTopic.titlePt': 'Title (Portuguese)',
    'newTopic.titleEn': 'Title (English)',
    'newTopic.descriptionPt': 'Description (Portuguese)',
    'newTopic.descriptionEn': 'Description (English)',
    'newTopic.icon': 'Icon (lucide-react name)',
    'newTopic.cancel': 'Cancel',
    'newTopic.create': 'Create Topic',

    // Topic Entry Editor
    'editor.back': 'Back to Platform Overview',
    'editor.editingFor': 'Editing data for',
    'editor.languageNote': 'Text fields save separately per language — switch PT/EN above to fill in the other language.',
    'editor.available': 'Verified data available for this platform',
    'editor.screenshotUrl': 'Screenshot URL / path',
    'editor.screenshotUrlHint': 'Paste an image URL, or a path under /public (e.g. /my-screenshot.png).',
    'editor.navigationPath': 'Navigation path (breadcrumb)',
    'editor.summary': 'Summary',
    'editor.configOptions': 'Configuration options (one per line)',
    'editor.unavailableNote': 'Note shown while unavailable',
    'editor.save': 'Save Draft',
    'editor.saved': 'Draft saved locally in this browser.',
    'common.copy': 'Copy',
    'common.copied': 'Copied!',
    'export.hint': 'Copy this JSON and send it over so it can be merged into the real site data.',

    // Vendor Topics Hub
    'hub.summary': '{available} of {total} topics have verified data for this platform. Click any topic below to fill in or edit it.',
    'hub.backToComparison': 'Back to Comparison'
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
    'nav.topics': 'Comparação por Tópico',

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
    'summary.subtitleSingle': 'Até o momento apenas uma plataforma tem auditoria completa ao vivo, então estes cards destacam seus pontos fortes por categoria — não uma vitória frente a concorrentes. Mais plataformas serão incluídas conforme novas auditorias forem concluídas.',
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
    'radar.scale': 'Escala de 10 pontos',

    // Feature Matrix
    'matrix.title': 'Matriz de Recursos Técnicos Baseada em Evidências',
    'matrix.subtitle': 'Detalhamento completo de recursos por plataforma. Cada linha inclui o status de verificação de evidência e o caminho de navegação na UI.',
    'matrix.searchPlaceholder': 'Buscar recursos (ex: WPA3, VLAN, Ping)...',
    'matrix.featureColumn': 'Recurso / Capacidade',
    'matrix.noResults': 'Nenhum recurso encontrado para o termo',
    'matrix.statusLabel': 'Status:',
    'matrix.verifiedNote': 'Verificado com evidências capturadas na interface ao vivo.',

    // Head-to-Head
    'h2h.title': 'Comparativo Direto Lado a Lado',
    'h2h.subtitle': 'Selecione de 2 a 4 plataformas para realizar uma comparação direta de arquitetura e operação.',
    'h2h.subtitleSingle': 'Perfil arquitetônico completo da plataforma auditada até agora. Esta tela passa a comparar lado a lado assim que mais plataformas forem incluídas.',
    'h2h.singlePlatformNote': 'No momento há apenas uma plataforma disponível para comparação. Abaixo está o perfil completo de arquitetura e licenciamento dela — volte em breve conforme mais plataformas auditadas forem adicionadas.',
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
    'deepDive.tabOverview': 'Visão Geral & Veredito',
    'deepDive.tabArchitecture': 'Arquitetura & Licenciamento',
    'deepDive.tabFeatures': 'Matriz de Recursos Verificados',
    'deepDive.tabScreenshots': 'Galeria de Telas (UI)',
    'deepDive.tabScores': 'Justificativas de Pontuação',
    'deepDive.summaryTitle': 'Resumo da Plataforma',
    'deepDive.analystVerdict': 'Veredito Final dos Analistas',
    'deepDive.ecosystemTitle': 'Ecossistema de Hardware Suportado',
    'deepDive.observedStrengths': 'Pontos Fortes Observados',
    'deepDive.observedLimitations': 'Limitações Observadas',
    'deepDive.archSpecTitle': 'Especificações Técnicas de Arquitetura',
    'deepDive.deploymentModel': 'Modelo de Implantação',
    'deepDive.multiTenantHierarchy': 'Hierarquia Multi-Tenant',
    'deepDive.adoptionFlow': 'Fluxo de Adoção de Dispositivos',
    'deepDive.firmwareEngine': 'Motor de Atualização de Firmware',
    'deepDive.apiIntegration': 'API REST & Integração',
    'deepDive.backupRestore': 'Backup & Restauração',
    'deepDive.commercialLicensing': 'Modelo Comercial & Licenciamento',
    'deepDive.pricingStructure': 'Estrutura de Preços',
    'deepDive.mspFeatures': 'Recursos MSP de Licenciamento',
    'deepDive.licensingNotes': 'Notas de Licenciamento:',
    'deepDive.colFeatureName': 'Nome do Recurso',
    'deepDive.colCategory': 'Categoria',
    'deepDive.colSupportStatus': 'Status de Suporte',
    'deepDive.colUIEvidence': 'Evidência na UI',
    'deepDive.colNavigationPath': 'Caminho de Navegação',
    'deepDive.strengths': 'Pontos Fortes:',
    'deepDive.closeBtn': 'Fechar Detalhes',
    'deepDive.evaluatedDate': 'Avaliado em:',

    // Badges & Common
    'badge.verifiedUI': 'Verificado na UI',
    'badge.officialDoc': 'Doc Oficial',
    'badge.inferred': 'Inferido',
    'badge.notVerified': 'Não Verificado',
    'status.supported': 'Suportado',
    'status.notSupported': 'Não Suportado',
    'status.partial': 'Parcial',
    'status.notVerified': 'Não Verificado',

    // Footer
    'footer.tagline': 'Comparativo Técnico Empírico de Plataformas de Gerenciamento de Rede em Nuvem',
    'footer.privacyNote': 'Zero Credenciais Expostas · 100% Privacidade no Cliente',
    'footer.auditDate': 'Data da Auditoria: Setembro de 2026',

    // Topic Comparison
    'topics.title': 'Comparação de Telas por Tópico',
    'topics.subtitle': 'Escolha um fluxo específico e compare exatamente como cada plataforma constrói essa tela — visão principal, opções de configuração e observações.',
    'topics.selectTopic': 'Tópico:',
    'topics.comparing': 'Comparando plataformas para:',
    'topics.configOptions': 'Opções de Configuração',
    'topics.screenshotPending': 'Captura de tela pendente',
    'topics.screenshotPendingNote': 'Esta tela foi auditada ao vivo, mas ainda não temos uma captura salva dela.',
    'topics.comingSoon': 'Em Breve',
    'topics.moreTopicsSoon': 'Mais tópicos serão adicionados conforme novas plataformas e telas forem auditadas.',
    'topics.clickToEdit': 'Clique no nome de uma plataforma para preencher ou editar os dados dela',
    'topics.addTopic': 'Novo Tópico',
    'topics.export': 'Exportar Dados',

    // New Topic Modal
    'newTopic.heading': 'Novo Tópico Macro',
    'newTopic.hint': 'Toda plataforma já ganha um card automaticamente para esse tópico — preencha cada uma depois clicando no nome dela.',
    'newTopic.titlePt': 'Título (Português)',
    'newTopic.titleEn': 'Título (Inglês)',
    'newTopic.descriptionPt': 'Descrição (Português)',
    'newTopic.descriptionEn': 'Descrição (Inglês)',
    'newTopic.icon': 'Ícone (nome do lucide-react)',
    'newTopic.cancel': 'Cancelar',
    'newTopic.create': 'Criar Tópico',

    // Topic Entry Editor
    'editor.back': 'Voltar para Visão Geral da Plataforma',
    'editor.editingFor': 'Editando dados de',
    'editor.languageNote': 'Os campos de texto salvam separadamente por idioma — troque PT/EN acima para preencher o outro idioma.',
    'editor.available': 'Dados verificados disponíveis para esta plataforma',
    'editor.screenshotUrl': 'URL / caminho da captura de tela',
    'editor.screenshotUrlHint': 'Cole uma URL de imagem, ou um caminho dentro de /public (ex: /minha-captura.png).',
    'editor.navigationPath': 'Caminho de navegação (breadcrumb)',
    'editor.summary': 'Resumo',
    'editor.configOptions': 'Opções de configuração (uma por linha)',
    'editor.unavailableNote': 'Observação exibida enquanto indisponível',
    'editor.save': 'Salvar Rascunho',
    'editor.saved': 'Rascunho salvo localmente neste navegador.',
    'common.copy': 'Copiar',
    'common.copied': 'Copiado!',
    'export.hint': 'Copie este JSON e envie pra mim aplicar nos dados reais do site.',

    // Vendor Topics Hub
    'hub.summary': '{available} de {total} tópicos têm dados verificados para esta plataforma. Clique em qualquer tópico abaixo para preencher ou editar.',
    'hub.backToComparison': 'Voltar para Comparação'
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
