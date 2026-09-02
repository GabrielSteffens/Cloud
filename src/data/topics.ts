import { TopicDefinition } from '../types/platform';

export const getTopics = (lang: 'en' | 'pt'): TopicDefinition[] => {
  const isPt = lang === 'pt';

  return [
    {
      id: 'captive-portal',
      title: isPt ? 'Portal Captivo Interno' : 'Internal Captive Portal',
      description: isPt
        ? 'Como cada plataforma implementa a tela de autenticação de visitantes: personalização visual, métodos de login e opções de configuração disponíveis.'
        : 'How each platform implements the guest authentication screen: visual customization, login methods, and available configuration options.',
      iconName: 'DoorOpen',
      platforms: [
        {
          platformId: 'yunlink',
          platformName: 'Yunlink',
          vendor: 'CloudNetlot / Ruike Technology',
          logoColor: '#2563eb',
          available: true,
          navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Portal Page',
          summary: isPt
            ? 'Portal captivo integrado com preview alternável entre mobile e desktop, editor de banner (1170x1020px, máx. 200KB, JPG/PNG), cor de tema, URL de redirecionamento e 3 fases de fluxo: Pré-Autenticação, Em Autenticação e Pós-Autenticação. Auditado ao vivo, porém sem captura de tela salva desta janela específica.'
            : 'Built-in captive portal with switchable mobile/desktop preview, banner editor (1170x1020px, max 200KB, JPG/PNG), theme color, redirect URL, and a 3-stage flow: Before Auth, Process Auth, and After Auth. Live-audited, but no screenshot was captured for this specific screen yet.',
          configOptions: isPt
            ? ['Autenticação via SMS', 'Vouchers com código de acesso', 'Login de membros', 'Acesso 1-clique', 'Integração com servidor RADIUS externo', 'Isolamento de clientes em Camada 2', 'Submenus: Portal, Auth Methods, Strategy, Auth Config, Auth Details']
            : ['SMS authentication', 'Passcode access vouchers', 'Member login', 'One-click access', 'External RADIUS server integration', 'Layer 2 client isolation', 'Sub-menus: Portal, Auth Methods, Strategy, Auth Config, Auth Details']
        },
        {
          platformId: 'dahua',
          platformName: 'Dahua',
          vendor: 'Dahua Technology',
          logoColor: '#94a3b8',
          available: false,
          unavailableNote: isPt
            ? 'Ainda não auditamos a tela ao vivo do portal captivo da Dahua. Assim que tivermos acesso a uma conta real e às capturas de tela, esta comparação será preenchida com dados verificados.'
            : "We haven't audited Dahua's live captive portal screen yet. Once we have access to a real account and screen captures, this comparison will be filled in with verified data."
        },
        {
          platformId: 'inc-cloud',
          platformName: 'INC Cloud',
          vendor: 'Intelbras',
          logoColor: '#00cc66',
          available: false,
          unavailableNote: isPt
            ? 'Ainda não auditamos a tela ao vivo do portal captivo do INC Cloud. Assim que tivermos acesso a uma conta real e às capturas de tela, esta comparação será preenchida com dados verificados.'
            : "We haven't audited INC Cloud's live captive portal screen yet. Once we have access to a real account and screen captures, this comparison will be filled in with verified data."
        }
      ]
    }
  ];
};
