export interface ScenarioDefinition {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyRequirements: string[];
}

export const getScenarios = (lang: 'en' | 'pt'): ScenarioDefinition[] => [
  {
    id: 'msp',
    title: lang === 'pt' ? 'Provedor de Serviços Gerenciados (MSP)' : 'Managed Service Provider (MSP)',
    subtitle: lang === 'pt' ? 'Gerenciamento multi-tenant de clientes e redes corporativas' : 'Multi-tenant client organization & delegated site administration',
    iconName: 'Layers',
    description: lang === 'pt'
      ? 'Provedores de serviços que gerenciam dezenas de clientes e locais precisam de uma estrutura hierárquica clara (Nível 1, 2 e 3) para isolar permissões, atribuir técnicos e manter visibilidade global da frota.'
      : 'Service providers managing dozens of distinct clients and sites require multi-tenant organizational hierarchies to isolate permissions, delegate technician access, and maintain global fleet visibility.',
    keyRequirements: lang === 'pt' 
      ? ['Hierarquia Multi-Tenant em 3 Níveis', 'Controle de Acesso RBAC', 'Visão Geral Global da Frota', 'Exportação de Audit Log']
      : ['Nested Multi-Level Project Hierarchy', 'Granular RBAC Permission Delegation', 'Global Device Fleet Overview', 'Audit Trail Logging']
  },
  {
    id: 'smb',
    title: lang === 'pt' ? 'Pequenas e Médias Empresas (PME)' : 'Small & Medium Business (SMB)',
    subtitle: lang === 'pt' ? 'Rede sem fio de alta velocidade e baixo custo de manutenção' : 'Cost-effective high-performance wireless & quick setup',
    iconName: 'Store',
    description: lang === 'pt'
      ? 'Ambientes comerciais e de escritórios PME priorizam facilidade de instalação, suporte moderno a WPA3-SAE, portal captivo para convidados com SMS e roaming automático 802.11k/v/r sem necessidade de controladoras locais caras.'
      : 'Commercial retail and SMB office environments prioritize rapid installation, modern WPA3-SAE security, guest captive portal with SMS auth, and 802.11k/v/r auto roaming without expensive local hardware controllers.',
    keyRequirements: lang === 'pt'
      ? ['Criptografia WPA3-SAE', 'Portal Captivo via SMS / Voucher', 'Roaming Rápido 802.11k/v/r', 'Otimização de RF Agendada']
      : ['WPA3-SAE Security', 'SMS & Voucher Captive Portal', '802.11k/v/r Auto Roaming', 'Scheduled RF Tuning']
  },
  {
    id: 'multisite',
    title: lang === 'pt' ? 'Corporativo Multi-Site Distribuído' : 'Distributed Multi-Site Corporate',
    subtitle: lang === 'pt' ? 'Conectividade unificada SD-WAN, APs e Pontes sem fio' : 'Unified SD-WAN routing, Wi-Fi 6 APs, and CPE Wireless Bridges',
    iconName: 'Globe',
    description: lang === 'pt'
      ? 'Empresas com múltiplas filiais e pontos remotos necessitam de orquestração unificada de roteadores SD-WAN (LTE-F300, Q3000, R3000), pontes sem fio outdoor (WB5FM) e visualização de topologia de rede em tempo real.'
      : 'Enterprises with distributed branch offices and remote outposts require unified orchestration across SD-WAN gateways (LTE-F300, Q3000, R3000), outdoor CPE wireless bridges (WB5FM), and real-time interactive topology mapping.',
    keyRequirements: lang === 'pt'
      ? ['Integração com Gateway SD-WAN', 'Gerenciamento de Pontes Sem Fio (CPE)', 'Mapa de Topologia Dinâmico', 'Alertas de CPU/Memória']
      : ['SD-WAN Gateway Integration', 'Wireless Bridge (CPE) Support', 'Interactive Topology Mapping', 'CPU/Memory Threshold Alerts']
  }
];

export const SCENARIOS = getScenarios('en');
