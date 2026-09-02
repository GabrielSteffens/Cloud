import { Language } from './LanguageContext';

const FEATURE_CATEGORY_LABELS: Record<Language, Record<string, string>> = {
  en: {
    All: 'All',
    Wireless: 'Wireless',
    Switching: 'Switching',
    Security: 'Security',
    Monitoring: 'Monitoring',
    'Operations & Automation': 'Operations & Automation',
    Troubleshooting: 'Troubleshooting',
    'User & Tenant Management': 'User & Tenant Management',
    'Mobile Application': 'Mobile Application',
    Dashboard: 'Dashboard'
  },
  pt: {
    All: 'Todos',
    Wireless: 'Wi-Fi',
    Switching: 'Switching',
    Security: 'Segurança',
    Monitoring: 'Monitoramento',
    'Operations & Automation': 'Operações & Automação',
    Troubleshooting: 'Diagnóstico',
    'User & Tenant Management': 'Usuários & Locatários',
    'Mobile Application': 'Aplicativo Móvel',
    Dashboard: 'Painel'
  }
};

export function translateFeatureCategory(category: string, language: Language): string {
  return FEATURE_CATEGORY_LABELS[language][category] || category;
}
