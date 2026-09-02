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
          screenshotUrl: '/yunlink_portal_mobile.png',
          screenshots: {
            mobile: '/yunlink_portal_mobile.png',
            desktop: '/yunlink_portal_desktop.png'
          },
          navigationPath: 'ruike-cloud.com → Project 1 → Config → Auth → Portal',
          summary: isPt
            ? 'Interface de gerenciamento de portal captivo auditada no Yunlink (ruike-cloud.com). Oferece visualização em tempo real com alternância entre Mobile e Desktop, cobrindo as 3 fases do fluxo de acesso: Pré-Autenticação (Before Auth), Em Autenticação (Process Auth) e Pós-Autenticação (After Auth).'
            : 'Audited Captive Portal management interface on Yunlink (ruike-cloud.com). Features real-time visual preview switching between Mobile and Desktop views across 3 access lifecycle stages: Before Auth, Process Auth, and After Auth.',
          configOptions: isPt
            ? [
                'Carrossel de Banners: Configuração de exatamente 3 imagens carrossel na página principal (Before Auth). Não possui opção para deixar uma imagem estática única sem rotação.',
                'Resoluções e Limites: Banner Mobile sugerido em 1170x1020px (máx. 200KB, JPG/PNG); Banner Desktop sugerido em 1920x500px (máx. 200KB, JPG/PNG).',
                'Métodos de Autenticação Disponíveis: "One Click" (Acesso com 1 clique), "SMS" (Verificação via mensagem de texto) e "Member" (Login de membros/usuários cadastrados).',
                'Parâmetros Personalizáveis: Título do Portal (Title Name), URL de redirecionamento pós-login (Guide Address, ex: https://www.baidu.com) e Seletor de Cor do Tema (Color).',
                'Submenus da Seção Auth: Estrutura dividida em Portal, Auth Methods, Strategy, Auth Config e Auth Details.'
              ]
            : [
                'Carousel Banners: Configures exactly 3 carousel banner images on the main page (Before Auth). No option available for a single fixed static image without carousel rotation.',
                'Resolutions & Limits: Mobile banner suggested at 1170x1020px (max 200KB, JPG/PNG); Desktop banner suggested at 1920x500px (max 200KB, JPG/PNG).',
                'Available Auth Methods: "One Click" (Direct 1-click access), "SMS" (Text verification code), and "Member" (Registered user/member login).',
                'Customizable Parameters: Portal Title (Title Name), Post-auth redirect URL (Guide Address, e.g., https://www.baidu.com), and Accent Theme Color picker (Color).',
                'Auth Section Sub-menus: Structured into Portal, Auth Methods, Strategy, Auth Config, and Auth Details.'
              ]
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
