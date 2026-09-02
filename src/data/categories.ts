import { CategoryDefinition } from '../types/platform';

export const getCategories = (lang: 'en' | 'pt'): CategoryDefinition[] => [
  {
    key: 'wireless',
    label: lang === 'pt' ? 'Gerenciamento Wi-Fi' : 'Wireless Management',
    iconName: 'Wifi',
    description: lang === 'pt' 
      ? 'Configuração de SSID, autenticação 802.1X/Enterprise, otimização de canais de rádio, steering de banda, portais captivos e mitigação de interferências RF.' 
      : 'SSID setup, 802.1X/Enterprise security, radio/RF channel optimization, band steering, captive portals, and RF interference mitigation.'
  },
  {
    key: 'switching',
    label: lang === 'pt' ? 'Switching e Redes Cabeadas' : 'Switching & Wired',
    iconName: 'Network',
    description: lang === 'pt'
      ? 'Gerenciamento de VLANs, status de negociação de portas Gigabit, PoE watchdog, LACP/LAG trunking, spanning tree (RSTP/MSTP) e espelhamento de portas.'
      : 'VLAN management, Gigabit port negotiation status, PoE watchdog, LACP/LAG trunking, spanning tree (RSTP/MSTP), and port mirroring.'
  },
  {
    key: 'security',
    label: lang === 'pt' ? 'Segurança e Controle de Acesso' : 'Security & Access Control',
    iconName: 'ShieldCheck',
    description: lang === 'pt'
      ? 'Criptografia WPA3-SAE, isolamento de clientes L2, regras de firewall, autenticação RADIUS, portal captivo e segurança de porta 802.1X.'
      : 'WPA3-SAE encryption, L2 client isolation, firewall rules, RADIUS authentication, captive portal, and 802.1X port security.'
  },
  {
    key: 'monitoring',
    label: lang === 'pt' ? 'Monitoramento e Observabilidade' : 'Monitoring & Observability',
    iconName: 'Activity',
    description: lang === 'pt'
      ? 'Telemetria em tempo real de CPU/memória, mapas de topologia de rede dinâmicos, acompanhamento de clientes ativos e tempo de atividade (uptime).'
      : 'Real-time CPU/memory telemetry, dynamic network topology maps, active client tracking, and device uptime counters.'
  },
  {
    key: 'troubleshooting',
    label: lang === 'pt' ? 'Diagnóstico e Solução de Problemas' : 'Troubleshooting & Diagnostics',
    iconName: 'Wrench',
    description: lang === 'pt'
      ? 'Registros históricos de alarmes de hardware (749+ registros), diagnósticos de cabo virtual, reinicialização remota de dispositivos e logs de auditoria.'
      : 'Historical hardware alarm logs (749+ records), virtual cable diagnostics, remote device reboots, and configuration audit logs.'
  },
  {
    key: 'automation',
    label: lang === 'pt' ? 'Operações e Automação' : 'Operations & Automation',
    iconName: 'Zap',
    description: lang === 'pt'
      ? 'Otimização de RF agendada, reinicialização programada de dispositivos, roaming rápido 802.11k/v/r e agendamento de atualização de firmware.'
      : 'Scheduled RF optimization, scheduled device auto-reboot, 802.11k/v/r fast roaming, and firmware upgrade scheduling.'
  },
  {
    key: 'reporting',
    label: lang === 'pt' ? 'Relatórios e Análises' : 'Reporting & Analytics',
    iconName: 'BarChart2',
    description: lang === 'pt'
      ? 'Exportação de alarmes em CSV, dados históricos de tráfego, contagem de dispositivos por categoria e distribuição de clientes sem fio.'
      : 'CSV alarm log export, historical traffic charts, category device count breakdown, and wireless client distribution stats.'
  },
  {
    key: 'integration',
    label: lang === 'pt' ? 'API e Integrações' : 'API & Integrations',
    iconName: 'Code',
    description: lang === 'pt'
      ? 'Integração de servidor RADIUS externo, URLs de redirecionamento de portal captivo e orquestração de gateway SD-WAN.'
      : 'External RADIUS server integration, captive portal redirect URLs, and SD-WAN gateway orchestration.'
  },
  {
    key: 'ux',
    label: lang === 'pt' ? 'Experiência do Usuário (UX)' : 'UX & Usability',
    iconName: 'Smile',
    description: lang === 'pt'
      ? 'Interface responsiva e limpa, suporte a múltiplos idiomas (Inglês/Chinês), alternador de projetos de fácil acesso e formulários modais.'
      : 'Clean responsive interface, multi-language support (English/Chinese), accessible project switcher, and clear modal forms.'
  },
  {
    key: 'scalability',
    label: lang === 'pt' ? 'Multi-Inquilino e Escala' : 'Multi-Tenancy & Scale',
    iconName: 'Layers',
    description: lang === 'pt'
      ? 'Estrutura hierárquica de projetos em 3 níveis (Nível 1, 2 e 3) para gerenciamento multi-tenant de MSPs em dezenas de redes.'
      : 'Nested 3-level project hierarchy (Level 1, Level 2, Level 3 Orgs) for MSP multi-tenant management across dozens of networks.'
  }
];

export const CATEGORIES = getCategories('en');
